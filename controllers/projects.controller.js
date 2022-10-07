

exports.render = function (req, res) {
    res.render('projects', {
        title: 'My Projects',
        description: 'Here you can find some projects I\'ve worked on'
    })
};