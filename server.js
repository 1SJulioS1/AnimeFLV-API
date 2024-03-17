const express = require("express");
const app = express();
const port = 3000;

app.use("/root", require("./routes/routes"));

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});
