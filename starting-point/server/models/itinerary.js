const Sequelize = require('sequelize');
const db = require('./_db');
const Place = require('./place');
const Hotel = require('./hotel');
const Restaurant = require('./restaurant');
const Activity = require('./activity');

const Itinerary = db.define('itinerary',{
  name: {
    type: Sequelize.STRING
  }
});


Itinerary.belongsToMany(Hotel, {through: 'itinerary_hotel'});
Itinerary.belongsToMany(Restaurant, {through: 'itinerary_restaurant'});
Itinerary.belongsToMany(Activity, {through: 'itinerary_activity'});

module.exports = Itinerary