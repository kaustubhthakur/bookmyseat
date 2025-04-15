const Event = require('../models/Event')
const cloudinary = require('cloudinary')
const createEvent = async (req, res) => {
    try {
        const { title, description, totalseats, maxprice, minprice, location } = req.body;
        const { image } = req.body;
        const newuser = new User({ title, description, image, location, totalseats, maxprice, minprice });
        const saveuser = await newuser.save();
        res.status(201).json(saveuser);
    } catch (error) {
        console.error(error);
    }
}
const getEvent = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        res.status(201).json(event);
    } catch (error) {
        console.error(error);
    }
}
const getEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.status(201).json(events);
    } catch (error) {
        console.error(error);
    }
}
const deleteEvent = async (req, res) => {
    try {
        await Event.findByIdAndDelete(req.params.id);
        res.status(201).json({ message: "event has been deleted..." })
    } catch (error) {
        console.error(error);
    }
}
module.exports = { createEvent, getEvent, getEvents, deleteEvent }