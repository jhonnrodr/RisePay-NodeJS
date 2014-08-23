
var express = require('express');

var app = express();
path 	= require('path');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.bodyParser());

require('./routes/')(app);
	


app.listen(5000, function(){
    console.log("Listen in Localhost:5000");
});


