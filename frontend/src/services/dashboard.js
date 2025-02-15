const SERVER_SIDE_URL = process.env.NEXT_PUBLIC_SERVER_SIDE_URL

export const getDashboardInformation = async (childId) => {
    const data = await fetch(SERVER_SIDE_URL + `/dashboard/${childId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const dashboardInfo = await data.json()

    return dashboardInfo
}