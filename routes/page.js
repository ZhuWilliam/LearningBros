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
