const cors = require("cors")
const express = require("express")
require('dotenv').config()

const CLIENT_SIDE_URL = process.env.CLIENT_SIDE_URL

const applyMiddleware = (app) => {
    app.use(cors({
        origin: [
            CLIENT_SIDE_URL
        ],
        credentials: true
    }));
    app.use(express.json())
}

module.exports = applyMiddleware