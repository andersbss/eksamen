import ErrorHandler from '../utils/errorHandler.js';
import response from '../utils/response.js';

export default (err, req, res, next) => {
  console.log('mårn');
  err.status = err.status || 500;

  // if (process.env.NODE_ENV === 'development') {
  //  res.status(err.status).json({
  //    success: false,
  //    name: err.name,
  //    error: err,
  //    message: err.message,
  //    stack: err.stack,
  //  });
  // }

  if (
    process.env.NODE_ENV === 'production' ||
    process.env.NODE_ENV === 'test' ||
    process.env.NODE_ENV === 'development'
  ) {
    let error = { ...err };
    error.message = err.message;

    console.log(error.message);

    if (err.name === 'CastError') {
      const message = `Resource not found. Invalid ${err.path}`;
      error = new ErrorHandler(message, 404);
    }

    if (err.name === 'ValidationError') {
      error = new ErrorHandler(
        Object.values(err.errors).map((value) => value.message),
        400
      );
    }

    if (err.code === 11000) error = new ErrorHandler(`${Object.keys(err.keyValue)} already exist`, 400);

    response(res, error.status, false, error.message || 'Internal Server Error');
  }
};
