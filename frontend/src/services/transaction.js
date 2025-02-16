const SERVER_SIDE_URL = process.env.NEXT_PUBLIC_SERVER_SIDE_URL

export const runMockTransaction = async () => {
    await fetch(SERVER_SIDE_URL + `/transactions/mock`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}