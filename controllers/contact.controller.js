/*
Student: Bruna Donatoni
Student ID: 301199383
Date: Oct 05, 2022
*/

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//Create the Contact model instance
let contactModel = require('../models/contac.model');
let contact = contactModel.Contact; // alias

exports.render = function (req, res) {
    res.render('contactMe', {
        title: 'How to contact me',
        description: 'Here you can find some contact information',
        name: 'Bruna Donatoni',
        phone: '(647) 853-3412',
        email: 'libarde3@hotmail.com',
        linkedin: 'https://github.com/Brunalsdd',
        github: 'https://www.linkedin.com/in/bruna-ducceschi-donatoni-3386406b/'
    })
};

exports.saveContactPage = function(req, res, next) {

    contactModel.create({
        name: req.body.name,
        number: req.body.number,
        email: req.body.email,
        subject: req.body.subject
    }, function (error, newContact){
        if(error) return next(error);
        res.redirect('/');
    });

}