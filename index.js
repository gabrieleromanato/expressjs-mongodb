'use strict';

const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./routes');

app.disable('x-powered-by');
app.set('view engine', 'ejs');

app.use('/', routes);

app.use('/public', express.static(path.join(__dirname, 'public')));

app.listen(port);