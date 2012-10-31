var mysql = require('mysql'); 

var client = mysql.createClient({ 
	database: "world", 
	host: 'localhost', 
	user: 'root', 
	password: 'root', 
	port: 3306
});

var total = 0;
client.query("SELECT COUNT(*) as total FROM city", function (err, details) {
    total = details[0].total;
});

// return all the cities
exports.get = function (skip, take, callback) {

    var sql = "SELECT * FROM city LIMIT ?,?";

    client.query(sql, [skip, take], function (err, details) {
        callback(details, total);
    });

};

exports.one = function (id, callback) {

    var sql = "SELECT * FROM city WHERE ID = ?";

    client.query(sql, [id], function (err, details) {
        callback(details);
    });
}

