require("dotenv").config();
const jwt = require("jsonwebtoken");
const { JWT_PRIVATE_KEY } = process.env;

const verifyToken = (req, res, next) => {
  const bearerToken = req.headers["authorization"];
  const token = bearerToken?.split(" ")[1];
  if (!token) {
    return res.status(400).send({
      message: "Unauthorized: token diperlukan",
    });
  } else {
    jwt.verify(token, JWT_PRIVATE_KEY, function (err, decoded) {
      if (!err) {
        //authorization
        req.id_user = decoded.id;
        next();
      } else {
        return res.status(400).send({
          message: "token tidak valid / expired",
          error: err,
        });
      }
    });
  }
};

module.exports = verifyToken;
