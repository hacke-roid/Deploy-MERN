const express = require("express");
const app = express();
const port = 5500;
const cors = require("cors");
const mongoose = require("mongoose");
const DataModel = require('./Model/data.js')

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb://127.0.0.1:27017/datastore",
  { useNewUrlParser: true, useUnifiedTopology: true },
).then(()=>{
    console.log("Connected to MongoDB");
})

app.post("/", (req, res) => {
  console.log(req.body);
  res.send(req.body);
  DataModel.create(req.body).then((data)=>{
    res.json(data);
  })
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`listening on port: http://localhost:${port}`);
});
