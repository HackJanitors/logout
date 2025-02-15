import Child from '../models/child'
import Guardian from '../models/guardian'

const express = require('express')
const app = express()

app.get('/admin/:guardianId', async (req, res) => {
    const guardianId = req.params.guardianId
    const guardian = await Guardian.findById(guardianId)

    //find child
    const child = await Child.findById(guardian.childId);
    res.send(child)
})

// //delete
// app.delete('/admin/:guardianId', async (req, res) => {
//     const guardianId = req.params.guardianId;
//     const guardian = await Guardian.findById(guardianId);

//     if (!guardian) {
//         return res.status(404).json({ message: "Guardian not found" });
//     }

//     await Guardian.findByIdAndDelete(guardianId);
// })


//update
app.put('/admin/:guardianId', async (req, res) => {
    const guardianId = req.params.guardianId;
    //const guardian = await Guardian.findById(guardianId);
    const updateData = req.body;

    const updatedGuardian = await Guardian.findByIdAndUpdate(
        guardianId,
        updateData,
        { new: true, runValidators: true }
    );

    res.send(updatedGuardian)
})
