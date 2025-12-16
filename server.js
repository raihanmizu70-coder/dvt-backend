require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/tasks", require("./tasks"));
app.use("/submit", require("./submit"));
app.use("/admin", require("./admin"));
app.use("/withdraw", require("./withdraw"));

app.listen(process.env.PORT, () =>
  console.log("Backend running")
);
