var http = require('http');
var controller = require('./routes');
http.createServer(controller).listen(process.env.PORT||3000);
