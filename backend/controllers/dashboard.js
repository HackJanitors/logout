import express from 'express'

import Child from "../models/child.js"
import { getRiotTodayHours } from "../services/riotGamesService.js"

const router = express.Router()

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

export default router