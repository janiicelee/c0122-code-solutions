const { JsonWebTokenError } = require('jsonwebtoken');
// what is being destructured?
// the JsonWebTokenError property
// where is it being destructured from?
// the object returned by the require function being called with the string "jsonwebtoken"
// what is it being assigned to?
// the const variable JsonWebTokenError
const ClientError = require('./client-error');

function errorMiddleware(err, req, res, next) {
  if (err instanceof ClientError) {
    res.status(err.status).json({
      error: err.message
    });
  } else if (err instanceof JsonWebTokenError) {
    res.status(401).json({
      error: 'invalid access token'
    });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
}

module.exports = errorMiddleware;
