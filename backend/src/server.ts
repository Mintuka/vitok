
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/user'
import likeRoutes from './routes/like'
import commentRoutes from './routes/comment'
const app = express();

app.use(bodyParser.json({ limit: '30mb' }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/users', userRoutes)
app.use('/posts', postRoutes);
app.use('/like', likeRoutes)
app.use('/comments', commentRoutes)
const CONNECTION_URL = 'mongodb://localhost:27017/react';
const PORT = 5000;

mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);