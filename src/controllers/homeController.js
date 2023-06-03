const express = require('express');
const router = express.Router();
//const router = require('express').Router();

router.get('/', (req, res) => {
    console.log("----")
    res.render('index')
});

router.get('/about', (req, res) => {
    res.render('about')
});

module.exports = router;