/* eslint-disable no-console */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-unused-vars */
const express = require('express');
const router = express.Router();

const { registerOnePurchase, readAllUsers, readAllProducts, readBetterProduct } = require("../models/historique");


// Read the pizza identified by an id in the menu
router.get('/:productId', (req, res) => {
    
    const idInRequest = parseInt(req?.params?.productId, 10);
    
    const userPseudo = readBetterProduct(idInRequest);

    return res.json(userPseudo);
});


// Create a pizza to be added to the menu.
router.post('/', (req, res) => {
    const pseudo = req?.body?.pseudo;
    const idProduct = req?.body?.idProduct;
    const quantity = req?.body?.quantity;
    const users = readAllUsers();
    if (!users.find((e) => e === pseudo)) return res.status(404).json({ message: "Utilisateur non trouvé" });
    
    const products = readAllProducts();
    if (!products.find((e) => e.id === idProduct)) return res.sendStatus(400);

    // console.log("lleleezzzzrffffffffffff", pseudo, idProduct, quantity);
    if (!pseudo || !idProduct || !quantity) return res.sendStatus(400); // error code '400 Bad request'
   

    const newPurchase = registerOnePurchase(pseudo, idProduct, quantity);

    return res.json(newPurchase);
});


module.exports = router;
