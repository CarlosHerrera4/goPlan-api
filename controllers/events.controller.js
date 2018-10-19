
const mongoose = require('mongoose');
const Event = require('../models/event.model');
const createError = require('http-errors');

module.exports.list = (req, res, next) => {
    Event.find()
        .then(events => res.json(events))
        .catch(error => next(error));
}

module.exports.create = (req, res, next) => {
    console.log("Entra en el create")
    Event.findById(req.params.id)
        .then(event => {
            if (event) {
                throw createError(409, 'El evento ya existe');
            }
            else {
                event = new Event(req.body);
                event.save()
                    .then(event => res.status(201).json(event))
                    .catch(error => {
                        next(error)
                    });         
            }
        })
        .catch(error => next(error));
}

module.exports.get = (req, res, next) => {
    console.log("req.params.id: " + req.params.id );
    console.log("tipo: " + typeof(req.params.id))
    var value = parseInt(req.params.id)
    Event.find({
            id: req.params.id
        })
    // Event.findById(req.params.id)
        .then(event => {
            if (!event) {
                throw createError(404, 'Event not found');
            } else {
                res.json(event);
            }
        })
        .catch(error => {
            next(error);
        });
}

module.exports.getPlan = (req, res, next) => {
    // Promesa de 3 peticiones
    console.log("getPlan")
    let cinemaEvents = Event.find({
        eventType: "cinema-theatre-comedy"
    })
        .then(events => {
            if (!events) {
                throw createError(404, 'Events not found');
            }
            else {
                // Elemento aleatorio
                res.json(events)
            }
        })
        .catch(error => {
            next(error);
        })  
        
    Promise.all([cinemaEvents])
        .then(events => {
            console.log("Ha entrado guay!!");
        })
}

// module.exports.getRandomPlan = (req, res, next) => {
//    //console.info(req.params)
//     // let category = req.params;
//     // res.json("Random Plan: " + category)
//     // let eventsRandom = Event.find({
//     //     category: ""
//     // })

//         Event.find()
//             .then(events => res.json(events))
//             .catch(error => next(error));

// }