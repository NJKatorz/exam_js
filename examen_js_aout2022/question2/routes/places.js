/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
const express = require('express');
const { readAllPlaces, readOnePlace, createOnePlace } = require('../models/places');
const { addPlace } = require('../models/users');

const router = express.Router();

/* Read all places
*/
router.get('/', (req, res) => {
  const allPlaces = readAllPlaces();
  return res.json(allPlaces);
});

// Read the pizza identified by an id in the PLACES
router.get('/:id', (req, res) => {
  const placeFound = readOnePlace(req.params.id);
  if (!placeFound) return res.sendStatus(404);
  return res.json(placeFound);
});

// Create a places to be added to the PLACES.
router.post('/', (req, res) => {
  const name = req?.body?.name?.length !== 0 ? req.body.name : undefined;
  const description = req?.body?.description?.length !== 0 ? req.body.description : undefined;

  const newPlace = createOnePlace(name, description);

  return res.json(newPlace);
});

// Like a place for a user
router.post('/addFav', (req, res) => {
  const userId = req?.body?.userId?.length !== 0 ? req.body.userId : undefined;
  const placeId = req?.body?.placeId?.length !== 0 ? req.body.placeId : undefined;
  const fav = addPlace(userId, placeId);
  return res.json(fav);
});

module.exports = router;
