const { Position, validatePosition } = require("../models/Position");
const { Company, validateCompany } = require("../models/Company");

module.exports = {
  async show(req, res) {
    const { company_id } = req.headers;
    if (!company_id)
      return res.status(400).json({ headers: "company_id is required." });

    const company = await Company.findOne({ _id: company_id }).catch((err) => {
      return res.status(400).json({ message: "Invalid company id." });
    });

    if (!company)
      return res
        .status(400)
        .json({ error: "Company does not exists with the given id." });

    const positions = await Position.find({ company: company_id });
    return res.json(positions);
  },
};
