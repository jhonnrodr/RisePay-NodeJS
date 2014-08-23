
var express = require('express');

var app = express();
path 	= require('path');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.bodyParser());


	app.get("/", function(req, res){
		res.render("index", {});
	});


	app.post("/charge", function (req, res) {

	  var UserName = req.body.cardholdername;
	  var CardNum =  req.body.CardNum;
	  var date =  req.body.months + req.body.year;
	  var CVNum = req.body.CVNum;
	  var Amount = req.body.Amount;

		  var Data = {
		  		UserName: UserName,
		  		CardNum: CardNum,
		  		ExpDate: date,
		  		CVNum: CVNum,
		  		Amount: Amount
		  };

		  Payments.createTransaction(Data, function(Databack){

		  });

		var message = "Thanks " + UserName + " for you Purchase.";
		  var msg = {
		  	title: "Your Order is Procesing!",
		  	message: message
		  };

	  		res.send(msg, 200);

	});



app.listen(5000, function(){
    console.log("Listen in Localhost:5000");
});


