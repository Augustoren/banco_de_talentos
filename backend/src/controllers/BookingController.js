const { Booking, validatebooking } = require("../models/booking");
const { Position } = require("../models/Position");
const { Candidate } = require("../models/Candidate");

module.exports = {
  async index(req, res) {
    const bookings = await Booking.find();
    return res.json(bookings);
  },

  async store(req, res) {
    const { error } = validatebooking(req.body);
    if (error) return res.json(error.details[0].message);

    const position = await Position.findOne({ _id: req.body.position }).catch(
      (err) => {
        return res.status(400).json({ message: "Invalid position id." });
      }
    );
    if (!position)
      return res.status(400).json({ error: "Position does not exists." });

    const candidate = await Candidate.findOne({
      _id: req.body.candidate,
    }).catch((err) => {
      return res.status(400).json({ message: "Invalid Candidate id." });
    });
    if (!candidate)
      return res.status(400).json({ error: "Candidate does not exists." });

    let booking = await Booking.findOne(req.body);
    if (booking) return res.json(booking);

    booking = await Booking.create(req.body);

    return res.json(booking);
  },
};
