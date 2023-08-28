/* eslint-disable no-shadow */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-console */
const path = require('node:path');
const { parse, serialize } = require('../utils/json');
const { users, products } = require("../constants");
const jsonDbPath = path.join(__dirname, '/../data/historique.json');

const defaultHistorique = [];

function readAllUsers() {
  return users;
}

function readAllProducts() {
  return products;
}

function readBetterProduct(id) {
  const idAsNumber = parseInt(id, 10);
  let purchases = parse(jsonDbPath, defaultHistorique);
  
  purchases = purchases.filter((e) => e.idProduct === idAsNumber);

 // console.log("eeeeeeeeeeeeeeeeeeeeeeeeee", purchases);
  if (purchases.length === 0) return false;

  let max = 0;
  purchases?.forEach((e) => {
      if (e.quantity > max) {
          max = e.quantity;
         // console.log("eeeeeeeeeeeeeeeeeeeeeeeeee", e.quantity);
         // console.log("djddddddddddddddddddddddd", max);
      }
  });
 // console.log("eeeeeeeeeeeeeeeeeeeeeeeeee", max);
  const userFound = purchases.find((e) => e.quantity === max);

  return userFound.pseudo;
}

function registerOnePurchase(pseudo, idProduct, quantity) {
  const historique = parse(jsonDbPath, defaultHistorique);

  const newHistorique = {
    pseudo,
    idProduct,
    quantity,
  };

  historique.push(newHistorique);
  // console.log("lleleezzzzrffffffffffff", pseudo, idProduct, quantity);
  serialize(jsonDbPath, historique);

  return newHistorique;
}

function readRecommendationUser(username){
  const allUsers = readAllUsers();
  const userFound = allUsers.find((user) => user === username);
  if (!userFound) return undefined;
  const products = readAllProducts();
  const productRandom = products[Math.floor(Math.random() * products.length)];
  // const productRandom = Math.floor(Math.random() * (products.length - 1)) + 1;
  // return products[productRandom];
  return productRandom;
}


module.exports = {
  readBetterProduct,
  registerOnePurchase,
  readAllProducts,
  readAllUsers,
  readRecommendationUser,
};