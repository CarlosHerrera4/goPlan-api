
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