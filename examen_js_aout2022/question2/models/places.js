/* eslint-disable quotes */
/* eslint-disable eol-last */
/* eslint-disable import/newline-after-import */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
const path = require('node:path');
const { parse, serialize } = require('../utils/json');
const { v4: uuidv4 } = require('uuid');
const jsonDbPath = path.join(__dirname, '/../data/places.json');

const PLACES = [
    {
        id: uuidv4(),
        name: 'Berlin',
        description: 'Oui oui baguette',
    },
    {
        id: uuidv4(),
        name: 'Bruges',
        description: 'I\'m gonna crease your Jays, Spider-Man',
    },
];

function readAllPlaces() {
    const places = parse(jsonDbPath, PLACES);
    return places;
}

function readOnePlace(id) {
    const places = parse(jsonDbPath, PLACES);
    const indexOfPlaceFound = places.findIndex((place) => place.id === id);
    if (indexOfPlaceFound < 0) return undefined;
    return places[indexOfPlaceFound];
}

function createOnePlace(name, description) {
    const places = parse(jsonDbPath, PLACES);

    const newPlace = {
        id: uuidv4(),
        name,
        description,
    };

    places.push(newPlace);

    serialize(jsonDbPath, places);

    return newPlace.id;
}

module.exports = {
    readAllPlaces,
    readOnePlace,
    createOnePlace,
};