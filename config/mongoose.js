const mongoose = require("mongoose");
const { secretkey } = require("./config");

const url = secretkey;

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const db = mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log("Connected to the database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. n${err}`);
  });

module.exports = db;
