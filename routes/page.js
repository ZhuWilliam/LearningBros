/*
 * GET home page.
 */

var pages;

exports.view = function(req, res){
    var number = req.params.number;
    if (number) {
        res.render('page'+number);
    } else {
        res.render('index', {failLogin: false});
    }
};

exports.login = function(req, res){
    if (req.body.username === 'test' && req.body.passwd === 'test') {
        res.redirect('page0')
    } else {
        res.render('index', {failLogin: true});
    }
};
