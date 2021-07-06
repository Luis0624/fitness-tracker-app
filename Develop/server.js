const express = require("express");
const mongoose = require("mongoose");

console.log('working on getting online');

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/wokrout", {
  useNewUrlParser: true,
  useUnifiedTopology:true,
  useCreateIndex: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});