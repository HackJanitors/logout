const Child = require('../models/child')
//import Guardian from '../models/guardian'

const express = require('express')
const router = express.Router()

router.get('/admin/:childId', async (req, res) => {
    const childId = req.params.id
    const child = await Child.findById(childId)

    res.send(child)

})

module.exports = router