//Jhonnatan es mi idolo porque me enseño NodeJS ersion rapida
var https = require('https'),
	url = require('url');

var UserName, Password;
var uri = "https://gateway1.risepay.com/ws/transact.asmx/ProcessCreditCard?";


var Risepay = {};

Risepay.connect = function(username, password, url){
	UserName = username;
	Password = password;
	uri = url;
}

Risepay.auth = function(data, callback){

var options = {
  url: 'https://coinbase.com/api/v1/buttons',
  json: {
    'button': {
      'name': data.user,
      'price_string': data.price,
      'price_currency_iso': 'USD'
    }
  }
};

	Post(options, function (err, res) {
  if (err) {
    console.log(err);
  } else {
  	
    callback(res);
  }




}


function Post(ops, callback){

	var uri = url.parse(ops.url);
	var bodyString = '';
	if (ops.json) {
		bodyString = JSON.stringify(ops.json);
	}
	var no = nonce();
	var signature = no + ops.url + bodyString;
	signature = crypto.createHmac('sha256', secret).update(signature).digest('hex');

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
			var err = 'Coinbase error: received header ' + res.headers.status;
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