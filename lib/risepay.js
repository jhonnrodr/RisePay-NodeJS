

var https = require('https'),
	url = require('url');
	var querystring = require('querystring');
	var request = require('request');
	var parser = require('xml2json');

//URL connection 
var url = 'https://gateway1.risepay.com/ws/transact.asmx/ProcessCreditCard?';

var username, password;


var risePay = {};

	risePay.connect = function(authData){
		username = authData.username;
		password = authData.password;
		
	}

	//Auth – authorize the amount on a credit card
	risePay.auth = function(options, callback){

		var form = {
				UserName: username,
				Password: password,
				TransType: options.TransType,
			    CardNum: options.CardNum,
			    ExpDate: options.ExpDate,
			    Amount: options.Amount,
			    NameOnCard: options.NameOnCard,
			    MagData: "",
			    PNRef: "",
				ExtData: "",
				CVNum: options.CVNum,
				InvNum: options.InvNum,
				Zip: options.Zip,
				Street: options.Street,
							};

								post(form,function(res){
									callback(res);
								});
	}

	//Sale - make a purchase using a credit card
	risePay.sale = function(options, callback){

		var form = {
				UserName: username,
				Password: password,
				TransType: options.TransType,
			    CardNum: options.CardNum,
			    ExpDate: options.ExpDate,
			    Amount: options.Amount,
			    NameOnCard: options.NameOnCard,
			    MagData: "",
			    PNRef: "",
				ExtData: "",
				CVNum: options.CVNum,
				InvNum: options.InvNum,
				Zip: options.Zip,
				Street: options.Street,
							};


								post(form,function(res){
									callback(res);
								});

	}

	//Void – undo an unsettled transaction
	risePay.void = function(options, callback){

	}

	risePay.return = function(options, callback){

	}

	risePay.capture = function(options, callback){

		var form = {
				UserName: username,
				Password: password,
				TransType: options.TransType,
			    CardNum: options.CardNum,
			    ExpDate: options.ExpDate,
			    Amount: options.Amount,
			    NameOnCard: options.NameOnCard,
			    MagData: "",
			    PNRef: options.PNRef,
				ExtData: "",
				CVNum: options.CVNum,
				InvNum: options.InvNum,
				Zip: options.Zip,
				Street: options.Street,
							};

							post(form,function(res){
									callback(res);
								});

	}



function post(form, callback){


			var formData = querystring.stringify(form);
			var contentLength = formData.length;

			var headers = { 
			    'Content-Type' : 'application/x-www-form-urlencoded',
			    'Content-Length': contentLength 
			};
				
			request.post({ url: url, form: formData, headers: headers }, function (error, response, body) {
				
				if (!error && response.statusCode == 200) {
					var json = parser.toJson(body, {object: true, arrayNotation: false});

					if(json.Response.Result == 0){
						callback({msg: "Payment Success: Pnref = " +  json.Response.PNRef, RespMSG:json.Response.RespMSG,  json: json});
					}else{
						callback({msg: "Payment failed: " +  json.Response.RespMSG, RespMSG:json.Response.RespMSG , json: json});
					}
				}else{
					callback({msg: "Gateway error: " +  json});
				}

			});

}


module.exports = risePay;