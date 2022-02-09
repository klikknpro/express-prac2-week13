const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
const port = 3000;

app.use(express.json());
app.use(cors());

let series = [];
let id = 0;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/series", (req, res) => {
  res.json(series);
});

app.post("/api/series", (req, res) => {
  const show = {
    title: req.body.title,
    characters: req.body.characters,
    id: id++,
  };
  series.push(show);
  res.sendStatus(204); // successful without sending back any body
});

app.delete("/api/series/:id", (req, res) => {
  const toDelete = req.params.id;
  series = series.filter((show) => show.id !== toDelete);
  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
