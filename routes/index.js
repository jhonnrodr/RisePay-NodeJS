
var risePay = require('../lib/risepay');

risePay.connect({
	username: "demo",
	password: "demo" 
});


module.exports = function(app){

	app.get("/", function(req, res){

		risePay.sale({
			NameOnCard: "Jhonny",
			CardNum : "5149612222222229",
			ExpDate : "1214",
			Amount: 12,
			CVNum: "678"
		}, function(resp){
			if(resp.Approved){
				res.send("Approved. Transaction ID = " + resp.PNRef);
				res.send("AuthCode = " + resp.AuthCode)
			}else{
				res.send("Declined: " + resp.RespMSG);
			}
		});	

	});

	app.get("/auth", function(req, res){

		risePay.auth({
			NameOnCard: "Jhonny",
			CardNum : "5149612222222229",
			ExpDate : "1214",
			Amount: 12,
			CVNum: "678"
		}, function(resp){
			if(resp.Approved){
				res.send("Approved. Transaction ID = " + resp.PNRef);
				res.send("AuthCode = " + resp.AuthCode)
			}else{
				res.send("Declined: " + resp.RespMSG);
			}
		});	

	});

	app.get("/void", function(req, res){

		risePay.void({
			NameOnCard: "Jhonny",
			CardNum : "5149612222222229",
			ExpDate : "1214",
			Amount: 5,
			CVNum: "678",
			PNRef: 1104825
		}, function(resp){
			if(resp.Approved){
				res.send("Approved. Transaction ID = " + resp.PNRef);
				res.send("AuthCode = " + resp.AuthCode)
			}else{
				res.send("Declined: " + resp.Message);
			}
		});	

	});

}