/*
 * GET home page.
 */

exports.view = function(req, res){
    var number = req.params.number;
    if (number) {
        res.render('page'+number);
    } else {
        res.render('index');
    }
};
