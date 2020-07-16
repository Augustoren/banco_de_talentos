const { Position, validatePosition } = require("../models/Position");
const { Company } = require("../models/Company");

module.exports = {
  async index(req, res) {
    const positions = await Position.find()
      .select("title")
      .populate("company", "name -_id");
    return res.json(positions);
  },

  async store(req, res) {
    const { company_id } = req.headers;
    const { error } = validatePosition(req.body);
    if (error) return res.status(400).json(error.details[0].message);
    const { title } = req.body;

    const company = await Company.findOne({ _id: company_id });
    if (!company)
      return res.status(400).json({ message: "Company does not exists" });

    let position = await Position.findOne({ title, company: company_id });
    if (position) return res.json(position);

    position = await Position.create({
      title,
      company: company_id,
    });

    return res.json(position);
  },
};
