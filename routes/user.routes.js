// user.routes.js

const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/user.controller');

router.post('/', createUser);

router.get('/signin', function(req, res) {
    res.render('signin', {title: "Signin"})
})

router.get('/', function(req, res) {
    res.render('home', {title: "Home"})
})

router.get('/', function(req, res) {
    res.render('home', {
        home: users
    })
})

router.get('/signup', function(req, res) {
    res.render('signup', {title: "Signup"})
})

module.exports = router;