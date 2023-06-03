const router = require('express').Router();
const cubeManager = require("../managers/cubeManager");

// Връщаме страницата за създаване
router.get('/create', (req, res) => {
    console.log("--------------------------")
    console.log(cubeManager.getAll())
    res.render('create')
});

//Приемаме данните от резултата, когато се събмитне формата
router.post('/create', (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body;
    cubeManager.create({name, description, imageUrl, difficultyLevel});
    
    console.log(req.body);
    res.redirect('/')
});




module.exports = router;