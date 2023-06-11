const express = require('express');
const path  = require('path');
const cookieParser = require('cookie-parser');

function expressConfig(app) {
    app.use(express.static(path.resolve(__dirname, '../public')));
    app.use(express.urlencoded({extended : false})); // закача получените данни в req.body(parser)
    // app.use(express.static('src/public'));
    app.use(cookieParser());
};

module.exports = expressConfig;