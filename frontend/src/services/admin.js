const SERVER_SIDE_URL = process.env.SERVER_SIDE_URL

export const updateChildInfo = async (guardianId, updateInfo) => {
    const data = await fetch(`http://localhost:8000/admin/${guardianId}`, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: "include",
        body: JSON.stringify(updateInfo)
    })
    
    const dashboardInfo = await data.json()

    return dashboardInfo
}

export const getChildInfo = async (guardianId) => {
    const data = await fetch(`http://localhost:8000/admin/${guardianId}`, {
        method: 'GET',
        credentials: "include",
    });

    const dashboardInfo = await data.json()

    return dashboardInfo
}