const express = require("express");
const { celebrate, Joi, Segments } = require("celebrate");
const routes = express.Router();

const CompanyController = require("./controllers/CompanyController");
const PositionController = require("./controllers/PositionController");
const ProfileController = require("./controllers/ProfileController");

routes.get("/", (req, res) => {
  return res.json({ message: "banco de talentos" });
});

//Company routes
routes.get("/companies", CompanyController.index);
routes.post("/companies", CompanyController.store);

//Position routes
routes.get("/positions", PositionController.index);
routes.post("/positions", PositionController.store);

//Profile routes
routes.get("/profile", ProfileController.show);

module.exports = routes;

/* 

TODO: Adicionar validacao de headers nas rotas que necessiarem.

*/
