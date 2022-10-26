/*
Student: Bruna Donatoni
Student ID: 301199383
Date: Oct 05, 2022
*/


let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

const index = require("../controllers/index.controller");

//fucntion that requirer authentication
function requireAuth(req,res,next) {
    if(!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}

/* GET route for contacts list. */
router.get('/list', requireAuth,  index.render);

