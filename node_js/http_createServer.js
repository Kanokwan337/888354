var http = require("http");

http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write('<h1>Hello Se by  Node.js</h1>');
    res.write('<h2>Create by kanokwan</h2>');
    res.end();
}).listen(8080,'127.0.0.1');