
var express = require('express');

var app = express();

var multipart = require('connect-multiparty');
app.use(express.bodyParser());
app.use(multipart());

var path = require('path');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.bodyParser());

require('./routes/')(app);
	


app.listen(5000, function(){
    console.log("Listen in Localhost:5000");
});


