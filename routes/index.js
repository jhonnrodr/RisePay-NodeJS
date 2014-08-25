
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
									CardNum : "5149612222222229",
									ExpDate : "1214",
									Amount: 10,
									TransType: "Auth",
									PNRef: "11",
									ExtData: null,
									CVNum: "678",
									InvNum: "ABC123",
									Zip: "33139",
									Street: "1880 Alton Road",
									}, function(data){

						  					res.send(data);
									});	

								});


					app.post("/charge", function (req, res) {

					});





}