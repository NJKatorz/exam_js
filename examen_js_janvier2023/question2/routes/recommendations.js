/* eslint-disable no-console */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-unused-vars */
const express = require('express');
const router = express.Router();

const { readRecommendationUser, readAllProducts, readAllUsers } = require("../models/historique");


router.get('/', (req, res) => {  
    const allProducts = readAllProducts();

    return res.json(allProducts);
});

// Read the pizza identified by an id in the menu
router.get('/:username', (req, res) => {  
    const userPseudo = req?.params?.username;
    const allUsers = readAllUsers();
    const userFound = allUsers.find((user) => user === userPseudo);
    if (!userFound) return res.sendStatus(400);
    console.log("qddddddddddddddddddddddddd", userPseudo);
    const randomProduct = readRecommendationUser(userPseudo);

    return res.json(randomProduct);
});

module.exports = router;
