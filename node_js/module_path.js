var path = require("path");
var filename = path.basename("888354/node_js/basic.js");
var current_filename = path.basename(__filename);
console.log("filename : "+ filename);
console.log("current_path : "+ __filename);
console.log("current_filename : "+ current_filename);


var dir = path.dirname("888354/node_js/basic.js");
var current_dir = path.dirname(__filename);
console.log("dir: "+dir);
console.log("current_dir: "+current_dir);
console.log("current_dir 2: "+ __dirname);

var join_path = path.join("888354","node_js","basic.js");
console.log("join_path: "+ join_path);