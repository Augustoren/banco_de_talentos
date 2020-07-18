const { Candidate } = require("../models/Candidate");

module.exports = {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await Candidate.findOne({ email });
  },
};
