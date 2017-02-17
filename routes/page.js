/*
 * GET home page.
 */

var ux2data = {};

exports.view = function(req, res){
    var number = req.params.number;
    if (number) {
        res.render('page'+number, {ux2data: ux2data});
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

exports.ux2update = function(req, res){
    for (var key in req.body.stuff) {
        if(req.body.stuff.hasOwnProperty(key)) {
            ux2data[key] = req.body.stuff[key];
            console.log("updating "+key+" with "+req.body.stuff[key]);
            console.log(key)
        }
    }
    res.json({});
}
