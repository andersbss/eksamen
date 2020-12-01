import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import 'dotenv/config.js';

import auth from './routes/auth.js';

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

app.get(`${process.env.BASEURL}/test`, (req, res) => {
  res.status(200).json({ data: 'Test working' });
});

app.use(`${process.env.BASEURL}/`, auth);

export { app };
