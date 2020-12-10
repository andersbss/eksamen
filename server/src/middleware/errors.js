import ErrorHandler from '../utils/errorHandler.js';
import response from '../utils/response.js';

export default (err, req, res, next) => {
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

  // Feilhåndteringen blir utført som om det skulle vært produksjon da det gir mest
  // mening med tanke på brukeropplevelsen selv om appen kjører i dev.
  if (
    process.env.NODE_ENV === 'production' ||
    process.env.NODE_ENV === 'test' ||
    process.env.NODE_ENV === 'development'
  ) {
    let error = { ...err };
    error.message = err.message;

    if (process.env.NODE_ENV !== 'test') console.log(error.message);

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

    if (err.code === 11000) {
      if (process.env.NODE_ENV === 'test') error = new ErrorHandler(`Duplicate value`, 400);
      else error = new ErrorHandler(`${Object.keys(err.keyValue)} already exist`, 400);
    }

    if (err.name === 'JsonWebTokenError') error = new ErrorHandler('Invalid jwt', 500);

    if (err.name === 'TokenExpiredError') error = new ErrorHandler('Expired jwt', 500);

    response(res, error.status, false, error.message || 'Internal Server Error');
  }
};
