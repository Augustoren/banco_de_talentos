const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const mongoose = require("mongoose");
const config = require("config");

const app = express();

const dbkey = config.get("db_access_string");
if (!dbkey) {
  console.error("FATAL ERROR: Database access string was not provided.");
  process.exit(1);
}

const jwtpk = config.get("JwtPrivateKey");
if (!jwtpk) {
  console.error("FATAL ERROR: JWT private key was not provided.");
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

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
