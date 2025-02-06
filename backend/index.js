import express from 'express';
import dotenv from 'dotenv';
import { connect2DB } from './config/db.js';
import router from './routes/routes.js';

dotenv.config();

// express instace 
const app = express();
connect2DB();

// variables 
const port = process.env.PORT | 3000;

app.use("",router)

// listen to port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});