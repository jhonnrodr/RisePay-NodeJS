
	var Risepay = require('../lib/risepay');

	Risepay.connect("YourUserName", "YourPassword");

module.exports = function(app){



							app.get("/", function(req, res){
									res.render("index", {});
								});


					app.post("/charge", function (req, res) {

						  var name = req.body.cardholdername;
						  var CardNum =  req.body.CardNum;
						  var date =  req.body.months + req.body.year;
						  var CVNum = req.body.CVNum;
						  var Amount = req.body.Amount;

								  var Data = {
								  		name: name,
								  		CardNum: CardNum,
								  		ExpDate: date,
								  		CVNum: CVNum,
								  		Amount: Amount
								  };

								  Risepay.auth(Data, function(Databack){

								  });

										var message = "Thanks " + name + " for you Purchase.";
										  var msg = {
										  	title: "Your Order is Procesing!",
										  	message: message
										  };

						  					res.send(msg, 200);

					});





}