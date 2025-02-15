import Child from '../models/child.js';
import Guardian from '../models/guardian.js';
import express from 'express';

const router = express.Router()

router.get('/:guardianId', async (req, res) => {
    const guardian = await Guardian.findById(req.params.guardianId).exec()

    //find child
    const child = await Child.findOne({"guardianId": guardian._id}).exec()
    res.send(child)
})

//update
router.put('/:guardianId', async (req, res) => {
    console.log("this is for the put");
    const guardian = await Guardian.findById(req.params.guardianId).exec()

    //find child
    const child = await Child.findOne({ "guardianId": guardian._id }).exec()

    const { childWalletId, dailyRate } = req.body;
    if (childWalletId) {
        child["walletId"] = childWalletId
    }
    if (dailyRate) {
        child["dailyRate"] = dailyRate
    }

    const savedChild = await child.save();

    res.status(201).json({
        message: "Child saved successfully",
        child: savedChild,
    });
})

export default router