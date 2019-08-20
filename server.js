const path = require("path");
const express = require("express");

const app = express();
const DIST_DIR = path.join(__dirname, "dist");
// const HTML_FILE = path.join(__dirname, "dist/index.html");
const PORT = process.env.NODE_PORT || 8000;

app.use(express.static(DIST_DIR));

app.get("*", (req, res) => {
  res.sendFile(path.join(DIST_DIR, "index.html"));
});

app.listen(PORT, () => {
  console.log("Node Server started on PORT:", PORT);
  console.log("Press Ctrl + C to quit");
});
