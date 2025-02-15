import Child from '../models/child'
import Guardian from '../models/guardian'

const express = require('express')
const router = express.Router()

router.post('/:guardianId', async (req, res) => {
    const { guardianId, childId, guardianUsername, guardianWalletId, childWalletId, childUsername, riotId, goal, dailyRate, weeklyRate, monthlyRate } = req.body;

    const newGuardian = new Guardian({
        id: guardianId,
        username: guardianUsername,
        walletId: guardianWalletId,
    });

    const savedGuardian = await newGuardian.save();

    const newChild = new Child({
        id: childId,
        username: childUsername,
        guardianId: savedGuardian._id,
        riotId: riotId,
        walletId: childWalletId,
        goal: goal,
        dailyRate: dailyRate,
        weeklyRate: weeklyRate,
        monthlyRate: monthlyRate,
    });

    const savedChild = await newChild.save();

    res.status(201).json({
        message: "Guardian and Child created successfully",
        guardian: savedGuardian,
        child: savedChild
    });
});

export default router