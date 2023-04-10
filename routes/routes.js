const express = require('express');
const Router = express.Router();
const Controller = require('../controllers/controller');

Router
    .router("/")
    .get()