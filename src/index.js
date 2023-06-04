const express = require('express');

const app = express();
const PORT = 5000;
const routes = require("./routes");

//Express config
const expressConfig = require('./config/expressConfig');
expressConfig(app);

//Handlebars config
const handlebarsConfig = require('./config/handlebarsConfig');
handlebarsConfig(app);

//Routes 
app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));  