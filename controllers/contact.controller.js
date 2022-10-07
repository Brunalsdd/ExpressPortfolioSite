/*
Student: Bruna Donatoni
Student ID: 301199383
Date: Oct 05, 2022
*/

exports.render = function (req, res) {
    res.render('contact', {
        title: 'How to contact me',
        description: 'Here you can find some contact information'
    })
};