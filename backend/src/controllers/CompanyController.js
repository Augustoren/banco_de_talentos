const { Company, validateCompany } = require("../models/Company");

module.exports = {
  async index(req, res) {
    const companies = await Company.find();
    return res.json(companies);
  },

  async store(req, res) {
    const { error } = validateCompany(req.body);
    if (error) return res.status(400).json(error.details[0].message);

    let company = await Company.findOne({ email: req.body.email });
    if (company)
      return res.json({ message: "Company already exists with this e-mail" });

    company = await Company.create(req.body);

    return res.json(company);
  },
};
