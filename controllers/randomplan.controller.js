
const mongoose = require('mongoose');
const Event = require('../models/event.model');
const createError = require('http-errors');

module.exports.getRandomPlan = (req, res, next) => {
    console.info("user: " + req.session.currentUser);
    res.json(req.params.id)
}