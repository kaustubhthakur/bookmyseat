const express = require('express')
const router = express.Router();
const protectRoute = require('../utils/protectRoute')
const {createEvent,deleteEvent,getEvent,getEvents} = require('../controllers/events')
router.post('/',protectRoute,createEvent)
router.get('/:id',protectRoute,getEvent)
router.get('/',getEvents)
router.delete('/:id',protectRoute,deleteEvent)
module.exports = router;