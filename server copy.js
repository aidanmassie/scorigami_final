var https = require('https');
var fs = require('fs'); // Using the filesystem module

var credentials = {
  key: fs.readFileSync('star_itp_io.key'),
  cert: fs.readFileSync('star_itp_io.pem')
};

// Start Normal Express Code
var express = require('express');
var app = express();
app.use("/", express.static("public"));

app.get('/', function(req, res) {
	res.render("index.html", {});
});
/////

var httpsServer = https.createServer(credentials, app);

// Default HTTPS Port
httpsServer.listen(443);