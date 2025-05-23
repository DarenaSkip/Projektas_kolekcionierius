const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { User } = require('../models');

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ username, email, password_hash: hashedPassword });
    res.status(201).json({ message: 'Vartotojas sukurtas' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Klaida registruojant vartotoją' });
  }
});

module.exports = router;
