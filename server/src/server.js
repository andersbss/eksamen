import displayRoutes from 'express-routemap';
import { app } from './app.js';
import { PORT } from './constants/config.js';
import connectDatabase from './config/db.js';

connectDatabase();

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on http://localhost:${PORT}${process.env.BASEURL}`)
);

process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`);
  console.log('Shutting down server due to Unhandled Promise Rejection');
  if (process.env.NODE_ENV !== 'production') {
    displayRoutes(app);
  }
  server.close(() => {
    process.exit(1);
  });
});
