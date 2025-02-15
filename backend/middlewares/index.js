import cors from "cors"
import express from "express"
import dotenv from "dotenv"

dotenv.config()

const CLIENT_SIDE_URL = process.env.CLIENT_SIDE_URL

const applyMiddleware = (app) => {
    app.use(cors({
        origin: [
            CLIENT_SIDE_URL,
        ],
        credentials: true
    }));
    app.use(express.json())
}

export default applyMiddleware