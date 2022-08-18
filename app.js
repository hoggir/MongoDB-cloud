require("./config/mongoose");
const express = require("express");
const app = express();
const productRouter = require("./app/product/router");
var cors = require("cors");
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send({ status: "oke" });
});

app.use("/api", productRouter);

app.listen(PORT, () => console.log("Server: http://localhost: " + PORT));
