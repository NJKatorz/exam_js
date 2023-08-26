/* eslint-disable quotes */
/* eslint-disable no-console */
/* eslint-disable eol-last */
/* eslint-disable import/newline-after-import */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
const path = require('node:path');
const { parse, serialize } = require('../utils/json');
const { v4: uuidv4 } = require('uuid');
const { readOnePlace } = require('./places');
const jsonDbPath = path.join(__dirname, '/../data/users.json');

function readAllUsers() {
    const users = parse(jsonDbPath);
    return users;
}

function readOneUser(id) {
    const users = parse(jsonDbPath);
    const indexOfUserFound = users.findIndex((user) => user.id === id);
    if (indexOfUserFound < 0) return undefined;

    return users[indexOfUserFound];
}

function createOneUser(name, email, place) {
    const users = parse(jsonDbPath, []);
    const newUser = {
        id: uuidv4(),
        name,
        email,
        place,
    };

    users.push(newUser);

    serialize(jsonDbPath, users);

    return newUser.id;
}

function addPlace(userId, placeId) {
    const user = readOneUser(userId);
    console.log("dddddddddddddddddddd", user);
    const place = readOnePlace(placeId);
    console.log("dffffffffffffffffffff", place);
    if (!user) return null;
    user.place.push(place);
    serialize(jsonDbPath, user);
    return user;
}

module.exports = {
    readAllUsers,
    readOneUser,
    createOneUser,
    addPlace,
};