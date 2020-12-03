import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';

import 'dotenv/config.js';
import errorMiddleware from './middleware/errors.js';

import auth from './routes/auth.js';
import article from './routes/article.js';
import category from './routes/category.js';
import author from './routes/author.js';
import user from './routes/user.js';
import image from './routes/image.js';

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use(
  cors({
    origin: 'http://localhost:3000',
    allowedHeaders: ['Content-Type', 'Authorization', 'x-csrf-token'],
    credentials: true,
  })
);

app.use(cookieParser());

app.use(`${process.env.BASEURL}/`, auth);
app.use(`${process.env.BASEURL}/articles`, article);
app.use(`${process.env.BASEURL}/categories`, category);
app.use(`${process.env.BASEURL}/authors`, author);
app.use(`${process.env.BASEURL}/me`, user);
app.use(`${process.env.BASEURL}/images`, image);

app.use(errorMiddleware);

export { app };
