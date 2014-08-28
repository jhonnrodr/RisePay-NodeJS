
	var risePay = require('../lib/risepay');

	risePay.connect({
		username: "username",
		password: "password" 
	});


module.exports = function(app){

//Testing Api via Console

							app.get("/", function(req, res){

									 risePay.auth({
								  	NameOnCard: "Jhonny",
									CardNum : "5149612222222229",
									ExpDate : "1214",
									Amount: 10,
									TransType: "Auth",
									CVNum: "678",
									InvNum: "ABC123",
									Zip: "33139",
									Street: "1880 Alton Road",
									}, function(data){
											

						  					res.send(data.json);
									});	

								});


					app.get("/test", function (req, res) {
						
					});





}