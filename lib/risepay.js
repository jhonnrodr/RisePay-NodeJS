//Jhonnatan es mi idolo porque me enseño NodeJS ersion rapida

var https = require('https'),
	url = require('url');

var UserName, Password;
var url = "https://gateway1.risepay.com/ws/transact.asmx/ProcessCreditCard?";


var Risepay = {};

	Risepay.connect = function(authData){
		UserName = authData.username;
		Password = authData.password;
		
	}

	Risepay.createTransaction = function(data, callback){

				var options = {
				  url: url,
				  json: {
				    CardNum : data.CardNum,
					ExpDate : data.ExpDate,
					Amount: data.Amount,
					TransType: data.TransType
				  		}
				};


						Post(options, function (err, res) {
					  if (err) {
					    console.log(err);
					  } else {
					  	
					    callback(res);
					  }

					}
	}


function Post(ops, callback){

	var uri = url.parse(ops.url);
	var bodyString = '';
	if (ops.json) {
		bodyString = JSON.stringify(ops.json);
	}
	

	var options = {
		hostname: uri.hostname,
		port: 443,
		path: uri.pathname,
		method: 'POST',
		headers: {
			'ACCESS_KEY': key,
			'ACCESS_SIGNATURE': signature,
			'ACCESS_NONCE': no,
			'Content-Type': 'application/json',
			'Connection': 'close'
		}
	};

		var req = https.request(options, function (res) {
			if (res.headers.status == '200 OK') {
				var result = '';
				res.on('data', function (d) {
					result += d;
				});
				res.on('end', function () {
					result = JSON.parse(result);
					callback(null, result);
				});
			} else {
				var err = 'RisePay error: received header ' + res.headers.status;
				callback(err, null);
			}
		});

	req.write(bodyString);
	req.end();

	req.on('error', function (e) {
		console.error(e);
	});

}


module.exports = Risepay;