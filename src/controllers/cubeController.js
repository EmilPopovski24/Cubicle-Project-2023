const router = require('express').Router();
const cubeManager = require("../managers/cubeManager");
const accessoryManager = require('../managers/accessoryManager');

// Връщаме страницата за създаване
router.get('/create', (req, res) => {
    console.log(cubeManager.getAll())
    res.render('create')
});

//Приемаме данните от резултата, когато се събмитне формата
router.post('/create', async (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body;
    await cubeManager.create({name, 
        description, 
        imageUrl, 
        difficultyLevel: Number(difficultyLevel),
    });
    
    console.log(req.body);
    res.redirect('/')
});

router.get('/:cubeId/details', async(req, res) => {
    const cube = await cubeManager.getOne(req.params.cubeId).lean();
    
    if(!cube) {
        res.redirect('404')
    }

    res.render('details', { cube });
});

router.get("/:cubeId/attach-accessory", async (req, res) => {

    const cube = await cubeManager.getOne(req.params.cubeId).lean();
    const accessories = await accessoryManager.getAll().lean();
    res.render('accessory/attach', { cube, accessories });


});





module.exports = router;