const http = require('http');

http.createServer(

 function(req, res) {
    
    res.end("<h1>Welcome</h1>")
 }

).listen(8080);

console.log("Servido Ativo na porta 8080")