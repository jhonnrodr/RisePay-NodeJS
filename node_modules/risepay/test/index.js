
	var risePay = require('risepay');

	risePay.connect({
		username: "demo",
		password: "demo" 
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
									Customer: "JR"
									}, function(resp){
											
											if(resp.RespMSG == "Approved"){
												console.log("Approved. Transaction ID = " + resp.PNRef);
												console.log("AuthCode = " + resp.AuthCode)
											}else{
												console.log("Declined: " + resp.Message);
											}
						  					res.send(resp);
									});	

								});

}