const Event = require('../models/Event')
const Seat = require('../models/Seat')
const createSeat = async (req, res, next) => {
    const eventId = req.params.id;
    const newSeat = new Seat(req.body);

    try {
        const savedSeat = await newSeat.save();
        try {
            await Event.findByIdAndUpdate(eventId, {
                $push: { seats: savedSeat._id },
            });
        } catch (err) {
            next(err);
        }
        res.status(200).json(savedSeat);
    } catch (err) {
        next(err);
    }
};
module.exports = {createSeat}
