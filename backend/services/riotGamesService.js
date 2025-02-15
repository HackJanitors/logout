const { formatUrlWithQueryParams } = require("../utils")
const axios = require('axios')

require("dotenv").config()

const RIOT_API_KEY = process.env.RIOT_API_KEY
const RIOT_GAMES_URL = process.env.RIOT_GAMES_URL

const getRiotTodayHours = async (childRiotId) => {
    const [gameName, tagLine] = childRiotId.split("#")
    const puuid = await axios.get(formatUrlWithQueryParams(
        RIOT_GAMES_URL + `/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`, 
        {
            "api_key": RIOT_API_KEY
        }
    )).then(response => response.data.puuid)

    const startTime = new Date();
    startTime.setHours(0, 0, 0, 0); // Start of today
    
    const endTime = new Date();
    endTime.setHours(23, 59, 59, 999); // End of today
    startTime.setDate(endTime.getDate() - 3)


    const startTimeUnix = Math.floor(startTime.getTime() / 1000);
    const endTimeUnix = Math.floor(endTime.getTime() / 1000);

    try {
        const matchIds = await axios.get(
            formatUrlWithQueryParams(
                `${RIOT_GAMES_URL}/lol/match/v5/matches/by-puuid/${puuid}/ids`, 
                {
                    startTime: startTimeUnix,
                    endTime: endTimeUnix,
                    api_key: RIOT_API_KEY
                }
            )
        ).then(response => response.data);
        console.log(`Fetched match ids ${matchIds}`)

        let totalGameDuration = 0;

        for (const matchId of matchIds) {
            const gameDuration = await axios.get(
                formatUrlWithQueryParams(
                    `${RIOT_GAMES_URL}/lol/match/v5/matches/${matchId}?api_key=${RIOT_API_KEY}`, 
                    {
                        api_key: RIOT_API_KEY
                    }
                )
            ).then(response => response.data.info.gameDuration);

            totalGameDuration += gameDuration
        }

        // Convert total game duration from seconds to hours and format to 2 decimal places
        const totalGameDurationHours = (totalGameDuration / 3600).toFixed(2);

        return totalGameDurationHours;
    } catch (e) {
        console.log(`Failed to get matches from Riot API with error: ${e}`)
        throw error
    }
}

const getRiotGamesSummary = async (childRiotId) => {
    const response = await fetch(formatUrlWithApiKey("", RIOT_API_KEY))


    return {

    }
}

module.exports = {getRiotTodayHours, getRiotGamesSummary}