const config = require("../../../../config");

const methodNotAllowed = (req, res, next) => {
  const message = "methodNotAllowed";
  const error = new Error(config.error[message](req.method) || message);
  error.statusCode = 405;
  next(error);
};

const notFound = (req, res, next) => {
  const message = "notFound";
  const error = new Error(config.error[message] || message);
  error.statusCode = 404;
  next(error);
};

module.exports = { methodNotAllowed, notFound };
