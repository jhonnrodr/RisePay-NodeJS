
	var risePay = require('../lib/risepay');

	risePay.connect({
		username: "jhonndev",
		password: "U0H464z4" 
	});


module.exports = function(app){

							app.get("/", function(req, res){

									 risePay.auth({
								  	NameOnCard: "Jhonny",
									CardNum : "5149612222222229",
									ExpDate : "1214",
									Amount: 10,
									CVNum: "678",
									InvNum: "ABC123",
									Zip: "33139",
									Street: "1880 Alton Road",
									TipAmt: 1,
									Customer: "JR"

									}, function(resp){
											if(resp.Approved){
												console.log("Approved. Transaction ID = " + resp.json.PNRef);
												console.log("AuthCode = " + resp.json.AuthCode)
											}else{
												console.log("Declined: " + resp.json.Message);
											}
						  					res.send(resp.json);
									});	

								});

}