const express = require('express')
const router = express.Router();
const protectRoute = require('../utils/protectRoute')
const {createSeat,getSeat,getSeats} = require('../controllers/seats')
router.post('/:id',protectRoute,createSeat)
router.get('/:id/:id',protectRoute,getSeat)
router.get('/:id',protectRoute,getSeat)

module.exports = router;
