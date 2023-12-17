require("dotenv").config();
const cors = require("cors");
const { urlencoded } = require("express");
const express = require("express");
const app = express();
const port = 7000;
const router = require("./src/routes/index.js");

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cors()); //public access
app.use(router);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
