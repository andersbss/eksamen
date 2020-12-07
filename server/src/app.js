import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';
import xssClean from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';
import hpp from 'hpp';
import rateLimit from 'express-rate-limit';
import csrf from 'csurf';
import helmet from 'helmet';

import 'dotenv/config.js';
import errorMiddleware from './middleware/errors.js';

import auth from './routes/auth.js';
import article from './routes/article.js';
import category from './routes/category.js';
import author from './routes/author.js';
import user from './routes/user.js';
import image from './routes/image.js';
import contact from './routes/contact.js';
import userLog from './routes/userLog.js';

const app = express();

app.use(xssClean());
app.use(mongoSanitize());
app.use(hpp());
app.use(helmet());

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // Accepts 60 requests per minute (1 request per second).
  max: 400, // Accepts max 400 requests from the same IP, regardless of time interval.
});

app.use(limiter);

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
// app.use(csrf({ cookie: true }));

// app.get(`${process.env.BASEURL}/csrf-token`, (req, res) => {
//  res.status(200).json({ data: req.csrfToken() });
// });

app.use(`${process.env.BASEURL}/`, auth);
app.use(`${process.env.BASEURL}/articles`, article);
app.use(`${process.env.BASEURL}/categories`, category);
app.use(`${process.env.BASEURL}/authors`, author);
app.use(`${process.env.BASEURL}/`, user);
app.use(`${process.env.BASEURL}/images`, image);
app.use(`${process.env.BASEURL}/contacts`, contact);
app.use(`${process.env.BASEURL}/userlog`, userLog);

app.use(errorMiddleware);

export { app };
