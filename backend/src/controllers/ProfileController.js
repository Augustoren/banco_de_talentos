const { Position, validatePosition } = require("../models/Position");
const { Company, validateCompany } = require("../models/Company");

module.exports = {
  async show(req, res) {
    const { company_id } = req.headers;
    const positions = await Position.find({ company: company_id });
    return res.json(positions);
  },
};
