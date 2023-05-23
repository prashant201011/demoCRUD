const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const apirouter = require("./routes/api.js");
const mongoose = require("mongoose");
const env = require("dotenv");

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(apirouter);

mongoose
  .connect("mongodb+srv://prashant:prashant@cluster0.pmd9pkp.mongodb.net/test")
  .then((result) => {
    console.log("conected to database");
    app.listen(port, () => {
      console.log("working");
    });
  })
  .catch((error) => {
    console.log(error);
  });
