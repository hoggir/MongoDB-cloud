const express = require("express");
const app = express();
const mongoose = require("mongoose");
const productRouter = require("./app/product/router");
var cors = require("cors");
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const url = `mongodb+srv://admin:admin@cluster0.qqahlie.mongodb.net/?retryWrites=true&w=majority`;

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log("Connected to the database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. n${err}`);
  });

app.get("/", (req, res) => {
  res.send({ status: "oke" });
});

app.use("/api", productRouter);

app.listen(PORT, () => console.log("Server: http://localhost: " + PORT));
