
/*
 * GET home page.
 */
var cities = require("../data/cities.js");

exports.index = function (req, res) {

    res.render('index',
    {
        title: 'Hallo DevConnections!',
        description: "Vegas. On Halloween. What could possibly go wrong?"
    });
};