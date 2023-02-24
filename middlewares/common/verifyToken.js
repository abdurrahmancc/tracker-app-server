const createHttpError = require("http-errors");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers?.authorization?.split(" ")?.[1];
    if (token) {
      const decoded = await promisify(jwt.verify)(token, process.env.TOKEN_SECRET);
      req.user = decoded;
      next();
    } else {
      res.clearCookie(process.env.COOKIE_NAME);
      return res.status(401).send({
        errors: {
          common: {
            msg: "Unauthorized Access",
          },
        },
      });
    }
  } catch (err) {
    next(createHttpError(403, "Forbidden access!"));
  }
};
