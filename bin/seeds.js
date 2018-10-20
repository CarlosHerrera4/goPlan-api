
const mongoose = require('mongoose');
require('../config/db.config');

// Data
const events = require('../data/data-halloween.json');
// const events = require('../data/data-cinema-theatre-comedy.json');
const eventsNightlifeConcerts = require('../data/data-nightlife-and-concerts.json');

const Event = require('../models/event.model');


const updateEvents = [];

// Cinema, theatre and comedy
for (i = 0; i < events.length; i++) {
    let newEvent = new Event();

    newEvent.id = events[i].id;
    newEvent.name = events[i].name;
    newEvent.category = events[i].category;
    newEvent.description = events[i].description;
    newEvent.eventType = "halloween-madrid";
    newEvent.address = events[i].place.address;
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

// Nightlife and concerts
// for (i = 0; i < eventsNightlifeConcerts.length; i++) {
//     let newEvent = new Event();

//     newEvent.id = eventsNightlifeConcerts[i].id;
//     newEvent.name = eventsNightlifeConcerts[i].name;
//     newEvent.category = eventsNightlifeConcerts[i].category;
//     newEvent.description = eventsNightlifeConcerts[i].description;
//     newEvent.eventType = "nightlife-and-concerts";
//     newEvent.address = eventsNightlifeConcerts[i].place.address;
//     newEvent.location = {
//         type: 'Point',
//         coordinates: [eventsNightlifeConcerts[i].place.city.longitude, eventsNightlifeConcerts[i].place.city.latitude]
//     };
//     newEvent.photoLocation = eventsNightlifeConcerts[i].place.city.photo;

//     newEvent.extras._3_ds_required = false;
//     newEvent.extras.staff_notes = eventsNightlifeConcerts[i].extra.staff_notes;

//     newEvent.rating.num_ratings = eventsNightlifeConcerts[i].rating.num_ratings;
//     newEvent.rating.average = eventsNightlifeConcerts[i].rating.average;
//     newEvent.rating.hide = eventsNightlifeConcerts[i].rating.hid;
//     newEvent.price = eventsNightlifeConcerts[i].price;

//     newEvent.price_info.currency = eventsNightlifeConcerts[i].price_info.currency;
//     newEvent.price_info.amount = eventsNightlifeConcerts[i].price_info.amount;
//     newEvent.price_info.type = eventsNightlifeConcerts[i].price_info.type;

//     newEvent.multiple_days = eventsNightlifeConcerts[i].multiple_days;
//     newEvent.multiple_sessions = eventsNightlifeConcerts[i].multiple_sessions;
//     newEvent.first_active_session_date = eventsNightlifeConcerts[i].first_active_session_date;
//     newEvent.last_active_session_date = eventsNightlifeConcerts[i].last_active_session_date;
//     newEvent.cover_image = eventsNightlifeConcerts[i].cover_image;
//     newEvent.share_message = eventsNightlifeConcerts[i].share_message;

//     updateEvents.push(newEvent)
// }

// Wellness and sports
// for (i = 0; i < eventsNightlifeConcerts.length; i++) {
//     let newEvent = new Event();

//     newEvent.id = eventsNightlifeConcerts[i].id;
//     newEvent.name = eventsNightlifeConcerts[i].name;
//     newEvent.category = eventsNightlifeConcerts[i].category;
//     newEvent.description = eventsNightlifeConcerts[i].description;
//     newEvent.eventType = "wellness-sport";
//     newEvent.address = eventsNightlifeConcerts[i].place.address;
//     newEvent.location = {
//         type: 'Point',
//         coordinates: [eventsNightlifeConcerts[i].place.city.longitude, eventsNightlifeConcerts[i].place.city.latitude]
//     };
//     newEvent.photoLocation = eventsNightlifeConcerts[i].place.city.photo;

//     newEvent.extras._3_ds_required = false;
//     newEvent.extras.staff_notes = eventsNightlifeConcerts[i].extra.staff_notes;

//     newEvent.rating.num_ratings = eventsNightlifeConcerts[i].rating.num_ratings;
//     newEvent.rating.average = eventsNightlifeConcerts[i].rating.average;
//     newEvent.rating.hide = eventsNightlifeConcerts[i].rating.hid;
//     newEvent.price = eventsNightlifeConcerts[i].price;

//     newEvent.price_info.currency = eventsNightlifeConcerts[i].price_info.currency;
//     newEvent.price_info.amount = eventsNightlifeConcerts[i].price_info.amount;
//     newEvent.price_info.type = eventsNightlifeConcerts[i].price_info.type;

//     newEvent.multiple_days = eventsNightlifeConcerts[i].multiple_days;
//     newEvent.multiple_sessions = eventsNightlifeConcerts[i].multiple_sessions;
//     newEvent.first_active_session_date = eventsNightlifeConcerts[i].first_active_session_date;
//     newEvent.last_active_session_date = eventsNightlifeConcerts[i].last_active_session_date;
//     newEvent.cover_image = eventsNightlifeConcerts[i].cover_image;
//     newEvent.share_message = eventsNightlifeConcerts[i].share_message;

//     updateEvents.push(newEvent)
// }


// Update events
Event.create(updateEvents)
    .then(() => {
        console.info("Ojo que parece que funciona: ");
        mongoose.connection.close();
    })
    .catch(error => {
        console.error("Seeds error:", error);
        mongoose.connection.close();
    });
