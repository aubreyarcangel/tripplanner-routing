const router = require("express").Router();
const Hotel = require("../models").Hotel;
const Restaurant = require("../models").Restaurant;
const Activity = require("../models").Activity;
const Itinerary = require('../models').Itinerary;

router.get("/", (req, res, next) => {
  Promise.all([
    Hotel.findAll({ include: [{ all: true }] }),
    Restaurant.findAll({ include: [{ all: true }] }),
    Activity.findAll({ include: [{ all: true }] })
  ])
    .then(([hotels, restaurants, activities]) => {
      res.json({
        hotels,
        restaurants,
        activities
      });
    })
    .catch(next);
});

router.get("/itineraries/:id", (req, res, next) => {
  Itinerary.findById(req.params.id, {
    include: [{ all: true, nested: true }]
  })
  .then(itinerary => {
    res.json({
      itinerary
    });
  })
    .catch(err => {
      res.send(err);
    });
});

router.post('/itineraries', (req, res, next) => {
  console.log(req.body)
  res.send(req)
  // Itinerary.create({
  //   name: req.body.name
  // })
  // .then(row => res.send(row))
})

module.exports = router;
