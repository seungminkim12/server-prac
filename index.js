const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Seungmin:1234@cluster0.a2i6i.mongodb.net/<dbname>?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => console.log("DB Connected"))
  .catch((err) => console.error(err));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(5000);
