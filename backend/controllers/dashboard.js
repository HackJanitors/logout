const express = require('express')
const router = express.Router()

const Child = require("../models/child")
const { getRiotTodayHours } = require("../services/riotGamesService")

router.get('/:childId', async (req, res) => {
    const childId = req.params.childId
    const child = await Child.findById(childId).exec()
    const childRiotId = child.riotId
    
    if  (!childRiotId) {
        return res.status(404).send("Riot ID not found.")
    }

    const riotGamesHours = await getRiotTodayHours(childRiotId)

    res.send({
        child: child,
        hours: riotGamesHours
    })

})

module.exports = router