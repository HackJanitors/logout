import Child from '../models/child'
//import Guardian from '../models/guardian'

const express = require('express')
const app = express()

app.get('/admin/:childId', async (req, res) => {
    const childId = req.params.id
    const child = await Child.findById(childId)

    res.send(child)

})