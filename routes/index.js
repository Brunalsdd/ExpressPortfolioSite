/*
Student: Bruna Donatoni
Student ID: 301199383
Date: Oct 05, 2022
*/

var express = require('express');
var router = express.Router();


const index = require("../controllers/index.controller");
const aboutMe = require("../controllers/aboutme.controller");
const contact = require("../controllers/contact.controller");
const projects = require("../controllers/projects.controller");
const services = require("../controllers/services.controller");
const login = require("../controllers/login.controller");



/* GET home page. */
router.get('/',  index.render);
router.get('/aboutme',  aboutMe.render);
router.get('/contact',  contact.render);
router.get('/projects',  projects.render);
router.get('/services',  services.render);
router.get('/login',  login.render);



module.exports = router;
