

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

		opt = paramsExtData(options);

		var form = {
				UserName: username,
				Password: password,
				TransType: "AUTH",
			    CardNum: options.CardNum,
			    ExpDate: options.ExpDate,
			    Amount: parseAmount(options.Amount),
			    NameOnCard: options.NameOnCard,
			    MagData: "",
			    PNRef: "",
				ExtData: opt.ExtData,
				CVNum: options.CVNum,
				InvNum: options.InvNum,
				Zip: options.Zip,
				Street: options.Street
							};

								post(form,function(res){
									callback(res);
								});
	}

	//Sale - make a purchase using a credit card
	risePay.sale = function(options, callback){

		opt = paramsExtData(options);

		var form = {
				UserName: username,
				Password: password,
				TransType: "SALE",
			    CardNum: options.CardNum,
			    ExpDate: options.ExpDate,
			    Amount: parseAmount(options.Amount),
			    NameOnCard: options.NameOnCard,
			    MagData: "",
			    PNRef: "",
				ExtData: opt.ExtData,
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

		opt = paramsExtData(options);

			var form = {
				UserName: username,
				Password: password,
				TransType: "VOID",
			    CardNum: "",
			    ExpDate: "",
			    Amount: parseAmount(options.Amount),
			    NameOnCard: "",
			    MagData: "",
			    PNRef: options.PNRef,
				ExtData: opt.ExtData,
				CVNum: "",
				InvNum: "",
				Zip: "",
				Street: "",
							};

							post(form,function(res){
									callback(res);
								});

	}

	risePay.return = function(options, callback){

		opt = paramsExtData(options);

		var form = {
				UserName: username,
				Password: password,
				TransType: "RETURN",
			    CardNum: "",
			    ExpDate: "",
			    Amount: parseAmount(options.Amount),
			    NameOnCard: "",
			    MagData: "",
			    PNRef: options.PNRef,
				ExtData: opt.ExtData,
				CVNum: "",
				InvNum: "",
				Zip: "",
				Street: "",
							};

							post(form,function(res){
									callback(res);
								});

	}

	risePay.capture = function(options, callback){

		opt = paramsExtData(options);

			var form = {
				UserName: username,
				Password: password,
				TransType: "FORCE",
			    CardNum: "",
			    ExpDate: "",
			    Amount: parseAmount(options.Amount),
			    NameOnCard: "",
			    MagData: "",
			    PNRef: options.PNRef,
				ExtData: opt.ExtData,
				CVNum: "",
				InvNum: "",
				Zip: "",
				Street: "",
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

							var json  = parser.toJson(body, {object: true, arrayNotation: false, sanitize: false});

							json = parsingJson(json.Response);

								if(json.Result == 0){
								
									callback({ Message:json.RespMSG,  json: json});

								}else{
									callback({ Message:json.RespMSG , json: json});
								}

					}else{
						callback({ Message:json.RespMSG, json: json });
					}

			});

}

var whitelist = ["NameOnCard", "CardNum", "ExpDate", "Amount", "CVNum", "InvNum", "Zip", "Street", "PNRef", "City"];

function paramsExtData(opt){
		for (var p in opt){
			
			   if(!inArray(p, whitelist)){
			      opt["ExtData"]="";
			     opt["ExtData"] += "<"+p+">"+opt[p]+"</"+p+">";
			     delete opt[p];
			   
		}
		
	};
		    return opt;

}

function inArray(needle, haystack) {
    var length = haystack.length;
    for(var i = 0; i < length; i++) {
        if(haystack[i] == needle) return true;
    }
    return false;
}


function parsingJson(obj){
	json = JSON.parse(JSON.stringify(obj , ["Result", "RespMSG", "Message", "AuthCode", "PNRef", "HostCode", 
		"GetAVSResult", "GetAVSResultTXT", "GetStreetMatchTXT", "GetCVResult", "GetCVResultTXT", "GetCommercialCard", "ExtData"]));
		if (!json.Result == 1001) {
			json.ExtData = parsingExtData(obj.ExtData); 
		};
	return json;
}

function parsingExtData(arr){
	arr = arr.replace(/[,]/gi,' , '); 
	obj = arr.replace(/[=]/gi,' : ');

	obj = obj.split(',');

	obj = JSON.parse(JSON.stringify("{"+obj+"}"));

	return obj;
}

function parseAmount(num){
	var amount = num.toFixed(2);
	return amount;
}


module.exports = risePay;