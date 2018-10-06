
const mongoose = require('mongoose');
require('../config/db.config');
const events = require('../data/datosEditados.json');
const Event = require('../models/event.model');
// const Phone = require('../models/phone.model');

const updateEvents = [];
for ( i=0; i < events.length; i++ ) {
    let newEvent = new Event();

    newEvent.id = events[i].id;
    newEvent.name = events[i].name;
    newEvent.category = events[i].category;
    newEvent.description = events[i].description;
    newEvent.location = {
        type: 'Point',
        coordinates: [events[i].place.city.longitude, events[i].place.city.latitude]
    };
    newEvent.photoLocation = events[i].place.city.photo;
    
    newEvent.extras._3_ds_required = false;
    newEvent.extras.staff_notes = events[i].extra.staff_notes;
    
    newEvent.rating.num_ratings = events[i].rating.num_ratings;
    newEvent.rating.average = events[i].rating.average;
    newEvent.rating.hide = events[i].rating.hid;
    newEvent.price = events[i].price;

    newEvent.price_info.currency = events[i].price_info.currency;
    newEvent.price_info.amount = events[i].price_info.amount;
    newEvent.price_info.type = events[i].price_info.type; 

    newEvent.multiple_days = events[i].multiple_days;
    newEvent.multiple_sessions = events[i].multiple_sessions;
    newEvent.first_active_session_date = events[i].first_active_session_date;
    newEvent.last_active_session_date = events[i].last_active_session_date;
    newEvent.cover_image = events[i].cover_image;
    newEvent.share_message = events[i].share_message;
    
    updateEvents.push(newEvent)
}

Event.create(updateEvents)
    .then(() => {
        console.info("Ojo que parece que funciona: ", events);
        mongoose.connection.close();
    })
    .catch(error => {
        console.error("Seeds error:", error);
        mongoose.connection.close();
    });

