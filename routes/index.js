
	var risePay = require('../lib/risepay');

	risePay.connect({
		username: "username",
		password: "password" 
	});

var parser = require('xml2json');


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
											

						  					res.send(data.RespMSG);
									});	

								});


					app.get("/test", function (req, res) {
						
					});





}