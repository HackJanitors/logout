import mongoose from 'mongoose';
import express from 'express'
import dotenv from 'dotenv';
import adminRoutes from './controllers/admin.js';
import userRouters from './controllers/user.js';
import dashboardRoutes from './controllers/dashboard.js';
import transactionRoutes from './controllers/transactions.js';
import applyMiddleware from './middlewares/index.js';

dotenv.config()

const SERVER_SIDE_PORT = process.env.SERVER_SIDE_PORT

const app = express()
const port = SERVER_SIDE_PORT

const mongodbUsername = process.env.MONGODB_USERNAME
const mongodbPassword = process.env.MONGODB_PASSWORD

const uri = `mongodb+srv://${mongodbUsername}:${mongodbPassword}@logoff.dsoac.mongodb.net/?retryWrites=true&w=majority&appName=LogOff`;
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function connectToMongoDB() {
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  
}
async function startServer() {
  // Connect to the database
  try {
    await connectToMongoDB();
  } catch {
    console.log("Failed to connect to mongo db")
    return
  }
  

  applyMiddleware(app);

  app.use('/admin', adminRoutes);
  app.use('/dashboard', dashboardRoutes);
  app.use('/user', userRouters);
  app.use('/transactions', transactionRoutes)

  app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
  });
}

startServer()