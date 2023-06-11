const router = require('express').Router();
const accessoryManager = require('../managers/accessoryManager');
 
router.get("/create", (req, res) => {
    console.log(req.user);
    res.render('accessory/create')
});

router.post("/create" , async(req, res) => {
    const { name, description, imageUrl } = req.body;
    await accessoryManager.create({ name, description, imageUrl });// add accessory data to database
    res.redirect("/")
});

module.exports = router;