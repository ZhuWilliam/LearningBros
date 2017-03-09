/*
 * GET home page.
 */

var ux2data = {};

ux2data['index_obj'] = require('../data.json');

exports.view = function(req, res){
    var number = req.params.number;
    if (number) {
        var ddata = {ux2data: ux2data};
        if (number === "0" || number === "0_b") {
            ddata['containTrackCode'] = true;
        }
        res.render('page'+number, ddata);

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
    console.log(JSON.stringify(req.body.newData));
    for (var key in req.body.newData) {
        if(req.body.newData.hasOwnProperty(key)) {
            ux2data[key] = req.body.newData[key];
            console.log("updating "+key+" with "+req.body.newData[key]);
            console.log(key)
        }
    }
    console.log(JSON.stringify(ux2data))
    res.json({}); /* POST handler to update stuff returns nothing... */
}
