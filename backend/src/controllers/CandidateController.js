const { Candidate, validateCandidate } = require("../models/Candidate");
const { Booking } = require("../models/booking");

module.exports = {
  async index(req, res) {
    const candidates = await Candidate.find();
    return res.json(candidates);
  },

  async show(req, res) {
    const { user_id } = req.headers;
    if (!user_id)
      return res.status(400).json({ headers: "user_id is required." });

    const bookings = await Booking.find({ candidate: user_id });

    return res.json(bookings);
  },

  async store(req, res) {
    const { error } = validateCandidate(req.body);
    if (error) return res.status(400).json(error.details[0].message);

    let candidate = await Candidate.findOne({ email: req.body.email });
    if (candidate) return res.json(candidate);

    candidate = await Candidate.create(req.body);

    return res.json(candidate);
  },
};
