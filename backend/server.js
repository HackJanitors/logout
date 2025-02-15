const express = require('express')
const applyMiddleware = require('./middlewares')
const adminRoutes = require('./controllers/admin')
const userRouters = require('./controllers/user')
const dashboardRoutes = require('./controllers/dashboard')
const mongoose = require("mongoose")
require('dotenv').config()

const app = express()
const port = '8000'

const mongodbUsername = process.env.MONGODB_USERNAME
const mongodbPassword = process.env.MONGODB_PASSWORD

const uri = `mongodb+srv://${mongodbUsername}:${mongodbPassword}@logoff.dsoac.mongodb.net/?retryWrites=true&w=majority&appName=LogOff`;
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function connectToMongoDB() {
    try {
        // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
        await mongoose.connect(uri, clientOptions);
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {
        console.log("Failed to connect to MongoDB", error)
    }
}
async function startServer() {
  // Connect to the database
  await connectToMongoDB();

  applyMiddleware(app);

  app.use('/admin', adminRoutes);
  app.use('/dashboard', dashboardRoutes);
  app.use('/user', userRouters);

  app.get('/', (req, res) => {
    res.send('Welcome to the API');
  });

  app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
  });
}

startServer()