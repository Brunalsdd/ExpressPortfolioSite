
exports.render = function (req, res) {
    res.render('services', {
        title: 'Services',
        description: 'Here are some services'
    })
};