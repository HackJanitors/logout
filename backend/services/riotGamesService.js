const { formatUrlWithQueryParams } = require("../utils")
const fetch = require("node-fetch")

require("dotenv").config()

const RIOT_API_KEY = process.env.RIOT_API_KEY
const RIOT_GAMES_URL = process.env.RIOT_GAMES_URL

const getRiotTodayHours = async (childRiotId) => {
    const [gameName, tagLine] = childRiotId.split("#")
    const uri = formatUrlWithQueryParams(
        RIOT_GAMES_URL + `/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`, 
        {
            "api_key": RIOT_API_KEY
        }
    )
    console.log(`Fetching from ${uri}`)
    const puuid = await fetch(uri).then(response => response.json().puuid)
  
    const startTime = new Date();
    startTime.setHours(0, 0, 0, 0); // Start of today
    const endTime = new Date();
    endTime.setHours(23, 59, 59, 999); // End of today

    const startTimeUnix = Math.floor(startTime.getTime() / 1000);
    const endTimeUnix = Math.floor(endTime.getTime() / 1000);


    try {
        const matchIdsResponse = await fetch(
            formatUrlWithQueryParams(
                `${RIOT_GAMES_URL}/lol/match/v5/matches/by-puuid/${puuid}/ids`, 
                {
                    startTime: startTimeUnix,
                    endTime: endTimeUnix,
                    api_key: RIOT_API_KEY
                }
            )
        );

        if (!matchIdsResponse.ok) {
            const errorMessage = await matchIdsResponse.text();
            throw new Error(`Failed to fetch match IDs from Riot Games API: ${errorMessage}`);
        }

        const matchIds = await matchIdsResponse.json();
        let totalGameDuration = 0;

        for (const matchId of matchIds) {
            const matchResponse = await fetch(
                `${RIOT_GAMES_URL}/lol/match/v5/matches/${matchId}?api_key=${RIOT_API_KEY}`
            );

            if (!matchResponse.ok) {
                throw new Error(`Failed to fetch match data for match ID: ${matchId}`);
            }

            const matchJson = await matchResponse.json();
            totalGameDuration += matchJson.info.gameDuration;
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