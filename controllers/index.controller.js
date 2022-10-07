

exports.render = function (req, res) {
    res.render('index', {
        title: 'Bruna Donatoni - Portfolio',
        welcome: 'Welcome to my home page'
    })
};