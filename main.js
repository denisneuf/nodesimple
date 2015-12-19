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


app.get('/', function(req, res) {
 response.writeHead(404, {"Content-Type": "text/plain"});
  response.write("404 Not Found\n");
  response.end();
});