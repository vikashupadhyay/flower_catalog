var http = require('http');
var controller = require('./routes');
http.createServer(controller).listen(process.env.OPENSHIFT_NODEJS_PORT||process.env.PORT||5000,process.env.OPENSHIFT_NODEJS_IP);
