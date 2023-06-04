const express = require('express');

const app = express();
const PORT = 5000;
const routes = require("./routes");
const dbConnect = require("./config/dbConfig");

//Express config
const expressConfig = require('./config/expressConfig');
expressConfig(app);

//Handlebars config
const handlebarsConfig = require('./config/handlebarsConfig');
handlebarsConfig(app);

dbConnect()
.then(() => console.log('DB connected successfully'))
.catch(err => console.log('DB error :', err.message));

//Routes 
app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));  