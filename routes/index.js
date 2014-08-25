
	var Risepay = require('../lib/risepay');

	Risepay.connect({
		username: "YourUserName",
		password: "YourPassword" 
	});

module.exports = function(app){

//Testing Api via Console

							app.get("/", function(req, res){
									//res.render("index", {});
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

						  					res.send(json);
									});	

								});


					app.post("/charge", function (req, res) {

					});





}