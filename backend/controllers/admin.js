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
