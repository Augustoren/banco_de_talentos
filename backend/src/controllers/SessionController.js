const { Candidate } = require("../models/Candidate");
const bcrypt = require("bcrypt");
const joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = {
  async store(req, res) {
    function validateLogin(login) {
      const schema = {
        email: joi.string().required(),
        password: joi.string().required(),
      };
      return joi.validate(login, schema);
    }

    const { error } = validateLogin(req.body);
    if (error) return res.status(400).json(error.details[0].message);

    const { email, password } = req.body;

    const user = await Candidate.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Invalid e-mail or password." });

    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid)
      return res.status(400).json({ message: "Invalid e-mail or password." });

    const token = jwt.sign({ email, password }, config.get("JwtPrivateKey"));
    return res.json(token);
  },
};
