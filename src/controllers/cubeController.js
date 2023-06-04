const router = require('express').Router();
const cubeManager = require("../managers/cubeManager");

// Връщаме страницата за създаване
router.get('/create', (req, res) => {
    console.log(cubeManager.getAll())
    res.render('create')
});

//Приемаме данните от резултата, когато се събмитне формата
router.post('/create', (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body;
    cubeManager.create({name, 
        description, 
        imageUrl, 
        difficultyLevel: Number(difficultyLevel),
    });
    
    console.log(req.body);
    res.redirect('/')
});

router.get('/:cubeId/details', (req, res) => {
    const cube = cubeManager.getOne(req.params.cubeId);
    
    if(!cube) {
        res.redirect('404')
    }

    res.render('details', { cube })
});





module.exports = router;