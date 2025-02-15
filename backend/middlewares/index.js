const cors = require("cors")
const express = require("express")
require('dotenv').config()

const CLIENT_SIDE_URL = process.env('../../.env')

const applyMiddleware = (app) => {
    app.use(cors({
        origin: [
            CLIENT_SIDE_URL
        ],
        credentials: true
    }));
    app.use(express.json())
}

export default applyMiddleware