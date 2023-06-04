const express = require('express');

const app = express();
const PORT = 5000;

const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');
//Express config
const expressConfig = require('./config/expressConfig');
expressConfig(app);

//Handlebars config
const handlebarsConfig = require('./config/handlebarsConfig');
handlebarsConfig(app);

//Routes 
app.use(homeController);
app.use('/cubes', cubeController);
app.use("*", (req, res) => {
    res.render('404');
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));  