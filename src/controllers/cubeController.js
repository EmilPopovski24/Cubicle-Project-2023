const router = require('express').Router();

// Връщаме страницата за създаване
router.get('/create', (req, res) => {
    res.render('create')
});

//Приемаме данните от резултата, когато се събмитне формата
router.post('/create', (req, res) => {
    console.log(req.body);
    res.redirect('/')
});




module.exports = router;