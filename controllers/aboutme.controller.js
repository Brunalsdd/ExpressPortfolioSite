

exports.render = function (req, res) {
    res.render('aboutme', {
        title: 'About Me',
        description: 'Here you can find some information about me!'
    })
};