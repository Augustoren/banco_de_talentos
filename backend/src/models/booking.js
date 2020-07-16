const mongoose = require("mongoose");
const joi = require("joi");

const bookingSchema = new mongoose.Schema({
  candidate: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Candidate",
  },
  position: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Position",
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
  },
});

const Booking = mongoose.model("Booking", bookingSchema);

function validatebooking(booking) {
  const schema = {
    company: joi.string().required(),
    candidate: joi.string().required(),
    position: joi.string().required(),
  };
  return joi.validate(booking, schema);
}

module.exports = {
  Booking,
  validatebooking,
};
