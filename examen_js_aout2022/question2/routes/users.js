/* eslint-disable import/newline-after-import */
/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const { readOneUser, createOneUser } = require('../models/users');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.json({ users: [{ name: 'e-baron' }] });
});

router.get('/:id', (req, res) => {
  const userFound = readOneUser(req?.params?.id);
  if (!userFound) return res.sendStatus(400);
  return res.json(userFound);
});

router.post('/', (req, res) => {
  const name = req?.body?.name?.length !== 0 ? req.body.name : undefined;
  const email = req?.body?.email?.length !== 0 ? req.body.email : undefined;
  if (!name || !email) return res.sendStatus(400); // error code '400 Bad request'

  const newUser = createOneUser(name, email, []);

  return res.json(newUser);
});

module.exports = router;
