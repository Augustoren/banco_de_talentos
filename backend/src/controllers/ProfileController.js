const { Position, validatePosition } = require("../models/Position");
const { Company, validateCompany } = require("../models/Company");

module.exports = {
  async show(req, res) {
    const { company_id } = req.headers;
    const positions = await Position.find({ company: company_id }).catch(
      (err) => {
        return res.status(400).json({ message: "Invalid company id." });
      }
    );
    return res.json(positions);
  },
};
