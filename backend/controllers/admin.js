const Child = require('../models/child')
const Guardian = require('../models/guardian')
const express = require('express')

const router = express.Router()

router.get('/:guardianId', async (req, res) => {
    const guardian = await Guardian.findById(guardianId).exec()

    //find child
    const child = await Child.findOne({guardianId: guardian._id}).exec()
    res.send(child)
})

// app.delete('/:guardianId', async (req, res) => {
//     const guardianId = req.params.guardianId;
//     const guardian = await Guardian.findById(guardianId);

//     if (!guardian) {
//         return res.status(404).json({ message: "Guardian not found" });
//     }

//     await Guardian.findByIdAndDelete(guardianId);
// })


//update
router.put('/:guardianId', async (req, res) => {
    const guardianId = req.params.guardianId;
    //const guardian = await Guardian.findById(guardianId);
    const updateData = req.body;

    const updatedGuardian = await Guardian.findByIdAndUpdate(
        guardianId,
        updateData,
        { new: true, runValidators: true }
    ).exec();

    res.send(updatedGuardian)
})

module.exports = router