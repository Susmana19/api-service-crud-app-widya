//import eksternal
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//import internal
const authModel = require("../models/auth.model");
const { JWT_PRIVATE_KEY } = process.env;

const authController = {
  login: (req, res) => {
    return authModel
      .login(req.body)
      .then((result) => {
        jwt.sign(
          { id: result.id_user, email: result.email },
          JWT_PRIVATE_KEY,
          { expiresIn: "1d" }, //1 day
          (err, token) => {
            return res.status(201).send({
              message: "succes",
              data: {
                token,
                user: {
                  id: result.id_user,
                  nama: result.nama,
                  email: result.email,
                },
              },
            });
          }
        );
      })
      .catch((error) => {
        return res.status(500).send({ message: error });
      });
  },
  register: (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      } else {
        const request = {
          nama: req.body.nama,
          email: req.body.email,
          jenis_kelamin: req.body.jenis_kelamin,
          password: hash,
        };
        return authModel
          .register(request)
          .then((result) => {
            return res.status(201).send({ message: "succes", data: result });
          })
          .catch((error) => {
            return res.status(500).send({ message: error });
          });
      }
    });
  },
};

module.exports = authController;
