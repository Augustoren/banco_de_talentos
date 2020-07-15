const mongoose = require("mongoose");
const joi = require("joi");

const positionSchema = new mongoose.Schema({
  title: String,
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
  },
});

const Position = mongoose.model("Position", positionSchema);

function validatePosition(position) {
  const schema = {
    title: joi.string().required().min(5),
  };
  return joi.validate(position, schema);
}

module.exports = {
  Position,
  validatePosition,
};
