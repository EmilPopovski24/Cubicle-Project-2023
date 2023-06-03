const express = require('express');

const app = express();
const PORT = 5000;

const homeController = require('./controllers/homeController');

//Express config
const expressConfig = require('./config/expressConfig');
expressConfig(app);

//Handlebars config
const handlebarsConfig = require('./config/handlebarsConfig');
handlebarsConfig(app);

//Routes 
app.use(homeController);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));  