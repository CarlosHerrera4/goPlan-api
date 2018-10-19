
const mongoose = require('mongoose');
const Event = require('../models/event.model');
const User = require('../models/user.model')
const createError = require('http-errors');

module.exports.getRandomPlan = (req, res, next) => {
    
    User.findById(req.user._id)
        .then((user) => {
            // res.json(user);
            Event.find({
                category: user.preferences[0]
            })
                .then((events) => {
                    res.json(events);
                })
                .catch(error => next(error));
                    console.info("userId: " + req.user._id)        
                })

}