const express = require('express');

const api = express();

const routes = require('./routes/router');

api.use(express.json());
api.use(routes);

api.listen(3000);