import io from "socket.io-client"

const SERVER_SIDE_URL = process.env.NEXT_PUBLIC_SERVER_SIDE_URL

export const socket = io(SERVER_SIDE_URL);