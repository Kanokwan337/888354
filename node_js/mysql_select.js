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
    con.query("SELECT * FROM products", function(err, result, fields){
        if(err) throw err;
        //console.log(result);
        result.forEach(function(data){
            console.log(data);
        });
    });
});