var express = require('express');
var router = express.Router();


const index = require("../controllers/index.controller");
const aboutMe = require("../controllers/aboutme.controller");
const contact = require("../controllers/contact.controller");
const projects = require("../controllers/projects.controller");
const services = require("../controllers/services.controller");



/* GET home page. */
router.get('/',  index.render);
router.get('/aboutme',  aboutMe.render);
router.get('/contact',  contact.render);
router.get('/projects',  projects.render);
router.get('/services',  services.render);



module.exports = router;
