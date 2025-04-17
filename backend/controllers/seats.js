const Event = require('../models/Event')
const Seat = require('../models/Seat')
const user
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
const getSeat = async (req, res) => {
    try {
        const seat = await Seat.findById(req.params.id);
        res.status(201).json(seat);
    } catch (error) {
        console.error(error);
    }
}
const getSeats = async (req, res) => {
    try {
        const seats = await Seat.find();
        res.status(201).json(seats);
    } catch (error) {
        console.error(error);
    }
}
const deleteSeat = async (req, res) => {
    try {
        await Seat.findByIdAndDelete(req.params.id);
        res.status(201).json({ message: "seat has been deleted..." })
    } catch (error) {
        console.error(error);
    }
}
const bookSeat = async(req,res) => {
    try 
    {
     
       
    } catch (error) {
        console.error(err);
    }
}
module.exports = {createSeat,getSeat,getSeats,deleteSeat}
