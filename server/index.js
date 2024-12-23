const express = require("express");
const app = express();
const port = 5500;
const cors = require("cors");
const mongoose = require("mongoose");
const DataModel = require("./Model/data.js");

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://kishanurankar:kishanurankar@cluster0.qqlsq.mongodb.net/dummydatabase?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  });

app.post("/", (req, res) => {
  console.log(req.body);
  res.send(req.body);
  DataModel.create(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message }); // Handle errors
    });
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`listening on port: http://localhost:${port}`);
});
