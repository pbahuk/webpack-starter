const path = require("path");
const express = require("express");

const app = express();
const DIST_DIR = path.join(__dirname, "../../dist");
const PORT = process.env.NODE_PORT || 8000;

if (process.env.NODE_ENV === "development") {
  require("./devSetup")(app);
} else {
  app.use(express.static(DIST_DIR));
}

app.get("*", (req, res) => {
  console.log("Catching the default route sjgsjhgsjsgjshsjshsjsh", req);
  res.sendFile(path.join(DIST_DIR, "index.html"));
});

app.listen(PORT, () => {
  console.log("Node Server started on PORT:", PORT);
  console.log("Press Ctrl + C to quit");
});
