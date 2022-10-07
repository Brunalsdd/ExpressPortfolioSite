/*
Student: Bruna Donatoni
Student ID: 301199383
Date: Oct 05, 2022
*/

exports.render = function (req, res) {
    res.render('contact', {
        title: 'How to contact me',
        description: 'Here you can find some contact information',
        name: 'Bruna Donatoni',
        phone: '(647) 853-3412',
        email: 'libarde3@hotmail.com',
        linkedin: 'https://github.com/Brunalsdd',
        github: 'https://www.linkedin.com/in/bruna-ducceschi-donatoni-3386406b/'
    })
};