
	var Risepay = require('../lib/risepay');

	Risepay.connect({
		username: "YourUserName",
		password: "YourPassword" 
	});

module.exports = function(app){



							app.get("/", function(req, res){
									res.render("index", {});
								});


					app.post("/charge", function (req, res) {


								  Risepay.createTransaction({
									CardNum : req.body.CardNum,
									ExpDate : req.body.months + req.body.year,
									Amount: 10,
									TransType: "SALE"
									}, function(data){
										var json = JSON.parse(data);
										var message = json;
										var msg = {
										  	title: json,
										  	message: message
										  };

						  					res.send(msg, 200);
									});	

										
										  

					});





}