const express = require('express');
const { signupUser } = require('../controllers/authController');

const router = express.Router();

router.post('/signup', signupUser); // POST request for signup

module.exports = router;
