//import eksternal
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_PRIVATE_KEY } = process.env;

//import internal
const profileModel = require("../models/profile.model");

const profileController = {
  get: (req, res) => {
    const id = req.id_user;
    return profileModel
      .get(id)
      .then((result) => {
        return res.status(200).send({ message: "succes", data: result });
      })
      .catch((error) => {
        return res.status(500).send({ message: error });
      });
  },
};

module.exports = profileController;
