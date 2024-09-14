const express = require("express");
const fs = require("fs");
const app = express();

const port = 9000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api", (req, res) => {
  const filePath = `${__dirname}/data/data.json`;
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read file" });
    }
    res.setHeader("Content-Type", "application/json");
    res.json(JSON.parse(data));
    console.log("hi");
  });
});

app.listen(port, () => {
  console.log("Hello 2");
});
///]
///]
///]
///]
