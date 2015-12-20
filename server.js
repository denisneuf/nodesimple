#!/bin/env node

// Set up app and DB objects
var express    = require('express');
var path       = require('path');
console.log("App Iniciada.");

var viewfolder = process.env.OPENSHIFT_REPO_DIR;

if (typeof viewfolder === "undefined") {
    
   viewfolder = path.join(__dirname, 'views');
   console.warn('No OPENSHIFT_REPO_DIR environment variable');
}
else
{
    
    viewfolder = viewfolder + 'views';

}
console.warn(viewfolder);



var app        = express();


//  Get the environment variables we need.
var ipaddr  = process.env.OPENSHIFT_NODEJS_IP;
var port    = process.env.OPENSHIFT_NODEJS_PORT || 8080;

if (typeof ipaddr === "undefined") {
    
   ipaddr = "127.0.0.1";
   console.warn('No OPENSHIFT_NODEJS_IP environment variable');
}

app.get('/', function(req, res) {
 res.writeHead(404, {"Content-Type": "text/plain"});
  res.write("404 Not Found\n");
  res.end();
});


app.listen(port, ipaddr, function() {
   console.log('%s: Node server started on %s:%d ...', Date(Date.now() ),
               ipaddr, port);
});