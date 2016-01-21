var http = require('http');
var controller = require('./routes');
http.createServer(controller).listen(process.env.OPENSHIFT_NODEJS_PORT||process.env.PORT||8080,process.env.OPENSHIFT_NODEJS_IP);
console.log('server Started at ',process.env.OPENSHIFT_NODEJS_PORT||process.env.PORT||8080);
