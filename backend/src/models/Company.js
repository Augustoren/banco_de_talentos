const mongoose = require("mongoose");
const joi = require("joi");

const CompanySchema = new mongoose.Schema({
  name: String,
  email: String,
});

const Company = mongoose.model("Company", CompanySchema);

function validateCompany(company) {
  const schema = {
    name: joi
      .string()
      .required()
      .min(5)
      .error(() => {
        return { message: "Campo 'name' nao informado." };
      }),
    email: joi.string().required().min(5),
  };
  return joi.validate(company, schema);
}

module.exports = {
  Company,
  validateCompany,
};
