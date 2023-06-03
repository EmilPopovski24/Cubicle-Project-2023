const express = require('express');
const router = express.Router();
//const router = require('express').Router();
const cubeManager = require("../managers/cubeManager");

router.get('/', (req, res) => {
    console.log("----")
    const cubes = cubeManager.getAll();
    res.render('index',{ cubes })
    console.log(cubes)
});

router.get('/about', (req, res) => {
    res.render('about')
});

module.exports = router;