const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Track = mongoose.model('Track');

const router = express.Router();

// user is required to be signed in
router.use(requireAuth);

// user can acces all tracks based on userId
router.get('/tracks', async (req, res) => {
    const tracks = await Track.find({ userId: req.user._id });
    res.send(tracks);
});   

module.exports = router;

