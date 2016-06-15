var express = require('express');
var app = express();
var path    = require("path");
app.use('/img', express.static(__dirname + '/img'));
// app.use(express.static(__dirname + '/public/stylesheets'));
app.use('/stylesheet',  express.static(__dirname + '/stylesheet'));
app.use('/node_modules',  express.static(__dirname + '/node_modules'));
app.use('/app',  express.static(__dirname + '/app'));
// app.use('/img', express.static(__dirname + "/img"));
// app.use(express.static('img'));
// app.use('/img',express.static(path.join(__dirname, 'public/images')));

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
