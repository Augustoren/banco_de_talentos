const mongoose = require("mongoose");
const joi = require("joi");

const candidateSchema = new mongoose.Schema({
  name: String,
  password: {
    type: String,
  },
  email: String,
  phone: String,
});

const Candidate = mongoose.model("Candidate", candidateSchema);

function validateCandidate(candidate) {
  const schema = {
    name: joi.string().required().min(5),
    password: joi.string().required().min(8),
    email: joi.string().required().min(5),
    phone: joi
      .string()
      .required()
      .min(11)
      .error(() => {
        return new Error("Campo 'phone' e obrigatorio.");
      }),
  };
  return joi.validate(candidate, schema);
}

module.exports = {
  Candidate,
  validateCandidate,
};
