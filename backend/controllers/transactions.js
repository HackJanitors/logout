import Child from '../models/child.js'
import Day from '../models/day.js'
import express from 'express'
import handleTransaction from '../services/wallet.js'
import io from '../server.js'

const router = express.Router()

router.post('/mock', async (req, res) => {
    const { guardianId, childId, guardianWalletId, childWalletId, riotId, goal, dailyRate, weeklyRate, monthlyRate, dailyPayment,
        weeklyPayment, monthlyPayment, walletAddressUrl, keyId } = req.body;

    const child = await Child.findById(childId);
    const today = new Date();
    let total = 0;

    const newDay = new Day({
        childId,
        date: today,
        hours,       //retrieve from riotAPI
        dailyPayment: false,
        weeklyPayment: false,
        monthlyPayment: false
    });
    await newDay.save();

    if (newDay.hours < child.goal) {
        newDay.dailyPayment = true
        total += dailyPayment
        //await handleTransaction(dailyPayment, guardianWalletId, childWalletId)
        //maketransaction(guardianWalletId, childWalletId, dailyRate)

        const last6Days = await Day.find({
            childId,
            date: { $gte: new Date(today.setDate(today.getDate() - 6)) }
        });
        const last30Days = await Day.find({
            childId,
            date: { $gte: new Date(today.setDate(today.getDate() - 30)) }
        });


        if (last6Days.length >= 6 && last6Days.every(day => day.weeklyPayment)) {
            await Day.updateMany(
                { childId, date: { $gte: new Date(today.setDate(today.getDate() - 6)) } },
                { $set: { weeklyPayment: true } }
            );
            //await handleTransaction(weeklyPayment, guardianWalletId, childWalletId)
            total += weeklyPayment

            //maketransaction(guardianWalletId, childWalletId, weeklyRate)
        }

        if (last30Days.length >= 30 && last30Days.every(day => day.monthlyPayment)) {
            await Day.updateMany(
                { childId, date: { $gte: new Date(today.setDate(today.getDate() - 30)) } },
                { $set: { monehtlyPayment: true } }
            );
            total += monthlyPayment
            //await handleTransaction(monthlyPayment, guardianWalletId, childWalletId)

            //maketransaction(guardianWalletId, childWalletId, monthlyRate)

        }

        await handleTransaction(total, guardianWalletId, childWalletId, walletAddressUrl, keyId)

        io.emit(
            'addWalletEnumeration', total
        )

        res.status(201).json({
            message: "Transaction completed",
        });
    } else {
        newDay.dailyPayment = false
        res.status(201).json({
            message: "Transaction failed",
        });
    }
});

export default router