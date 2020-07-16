const express = require("express");
const routes = express.Router();

const CompanyController = require("./controllers/CompanyController");
const PositionController = require("./controllers/PositionController");
const ProfileController = require("./controllers/ProfileController");
const CandidateController = require("./controllers/CandidateController");
const BookingController = require("./controllers/BookingController");

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

//Candidate routes
routes.get("/candidates", CandidateController.index);
routes.get("/candidates/profile", CandidateController.show);
routes.post("/candidates", CandidateController.store);

//Booking routes
routes.get("/bookings", BookingController.index);
routes.post("/bookings", BookingController.store);

module.exports = routes;
