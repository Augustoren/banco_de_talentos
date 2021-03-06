const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const dbkey = process.env.MONGO_KEY;
const jwtpk = process.env.JWTPK;

if (!dbkey && !jwtpk) {
  console.error(
    "FALTA ERROR: Mongodb access string or JWT private key were not provided."
  );
  process.exit(1);
}

mongoose
  .connect(dbkey, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database OK");
  })
  .catch((err) => {
    console.log("Database FAILED");
  });

app.use(cors({}));
app.use(express.json());
app.use(routes);
app.use((req, res, next) => {
  return res.json({ message: "Rota inexistente" });
});

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
