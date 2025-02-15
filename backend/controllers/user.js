import express from 'express'

import Child from '../models/child.js'
import Guardian from '../models/guardian.js'

const router = express.Router()

router.post('/guardian', async (req, res) => {
    const { guardianWalletId, childWalletId, childUsername, riotId, name, email, password} = req.body;
    const newGuardian = new Guardian({
        // username: guardianUsername,
        walletId: guardianWalletId,
    });

    const savedGuardian = await newGuardian.save();

    const newChild = new Child({
        username: childUsername,
        guardianId: savedGuardian._id,
        riotId: riotId,
        walletId: childWalletId,
        name: name,
        goal: "2",
        dailyRate: "5",
        weeklyRate: "5",
        monthlyRate: "5",
    });

    const savedChild = await newChild.save();

    res.status(201).json({
        message: "Guardian and Child created successfully",
        guardian: savedGuardian,
        child: savedChild
    });
});

router.put('/child/:childId', async (req, res) => {
    const childId = req.params.childId
    const { childWalletId, childUsername, riotId, dailyRate } = req.body;

    const child = await Child.findById(childId).exec()

    if (childWalletId) {
        child.childWalletId = childWalletId
    }
    if (childUsername) {
        child.childUsername = childUsername
    }
    if (riotId) {
        child.riotId = riotId
    }
    if (dailyRate) {
        child.dailyRate = dailyRate
    }
    
    const savedChild = await child.save();

    res.status(201).json({
        message: "Child saved successfully",
        child: savedChild
    });
})

export default router