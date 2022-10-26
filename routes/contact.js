/*
Student: Bruna Donatoni
Student ID: 301199383
Date: Oct 05, 2022
*/


let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

const contact = require("../controllers/contact.controller");

/* GET route for contacts list. */
router.get('/list', requireAuth,  contact.render);

// POST route for saving contac information 
router.post('/add', contact.saveContactPage);


//fucntion that requirer authentication
function requireAuth(req,res,next) {
    if(!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}

module.exports = router;