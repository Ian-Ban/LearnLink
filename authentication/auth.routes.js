// auth.routes.js

const express = require('express');
const { signIn, signOut } = require('../controllers/user.controller');

const router = express.Router();

router.post('/signin', signIn);
router.get('/signout', signOut);

module.exports = router;