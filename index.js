const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

app.get("/", (req, res) => {
  console.log("Hello World");
  res.send("Hello World");
});
