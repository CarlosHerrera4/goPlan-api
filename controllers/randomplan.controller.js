
const mongoose = require('mongoose');
const Event = require('../models/event.model');
const User = require('../models/user.model')
const createError = require('http-errors');

module.exports.getRandomPlan = (req, res, next) => {
    
    User.findById(req.user._id)
        .then((user) => {
            // res.json(user);
            console.info("Preferences: " + user.preferences)
            const promises = [];
            for (i=0; i < user.preferences.length; i++) {
                let _promise = Event.find({
                        category: user.preferences[i]
                    })
                    // .then((events) => {
                    //     if (!events) {
                    //         throw createError(404, 'Events not found');
                    //     }
                    //     // res.json(events);
                    // })
                    // .catch(error => next(error));
                // console.info("userId: " + req.user._id)
                
                promises.push(_promise)
            }
            Promise.all(promises)
                .then((events) => {
                    res.json(events)
                    console.log("Ha hecho la promesa: " + events)
                })

        })
}