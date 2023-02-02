import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';

import connect from './config/db.js';
connect();

import postRouter from './routes/posts.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/posts', postRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server has started.' + PORT));