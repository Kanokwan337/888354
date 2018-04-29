var mysql = require("mysql");
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345678",
    database: "shopdb"
});

con.connect(function(err){
    if(err) throw err;
    console.log("Connected !!");
});