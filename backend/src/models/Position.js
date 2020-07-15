const mongoose = require("mongoose");
const joi = require("joi");

const PositionSchema = new mongoose.Schema({
  name: String,
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
  },
});

const Position = mongoose.model("Position", PositionSchema);

function validatePosition(Position) {
  const schema = {
    name: joi.string().required().min(5),
    email: joi.string().required().min(5),
  };
  return joi.validate(Position, schema);
}

module.exports = {
  Position,
  validatePosition,
};
