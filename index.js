// index.js
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from './db.js';  // Import using ES module syntax
import userRoute from './routes/userRoute.js';
import { residencyRoute } from './routes/residencyRoute.js';
import adminRoute from './routes/adminRoute.js'


dotenv.config();

const app = express();
// Remove the line below as you've already imported mongoose in db.js
// const studmodel = require('./db.js');

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use('/api/user', userRoute);
app.use('/api/residency', residencyRoute);
app.use('/api/admin',adminRoute)