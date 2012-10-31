var cities = require("../data/cities.js");

exports.get = function (req, res) {

    var skip = parseInt(req.query.skip) || 0,
    take = parseInt(req.query.take) || 1000;

    var callback = function (data, total) {
        res.json({ total: total, data: data });
    };

    cities.get(skip, take, callback);
};

exports.one = function (req, res) {

    var id = parseInt(req.params.id);

    var callback = function (data) {
        res.json(data);
    }

    cities.one(id, callback);

}