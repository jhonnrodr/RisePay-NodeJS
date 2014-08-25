
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
								  	cardholdername: "Jhonny",
									CardNum : "4242424242424242",
									ExpDate : "1114",
									Amount: 10,
									TransType: "Sale",
									PNRef: PNRef,
									ExtData: ExtData,
									CVNum: "123",
									InvNum: InvNum,
									Zip: Zip,
									Street: Street,
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