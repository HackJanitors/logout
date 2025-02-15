import dotenv from "dotenv"
dotenv.config()

const SERVER_SIDE_URL = process.env.SERVER_SIDE_URL

export const getDashboardInformation = async (childId) => {
    const data = await fetch(SERVER_SIDE_URL + `/dashboard/${childId}`)
    const dashboardInfo = await data.json()

    return dashboardInfo
}