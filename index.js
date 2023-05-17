import express from "express";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.sendStatus(401);
});

app.get("/about", (req, res) => {
  res.send("<h1>This is About Page</h1>");
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
