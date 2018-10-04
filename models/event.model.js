
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({

});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;