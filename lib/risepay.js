
/**
 * Risepay API helper
 *
 * @category  API helper
 * @package   Risepay
 * @author    support@risepay.com
 * @copyright Copyright (c) 2014
 * @version   1.0

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
**/

var https = require('https');
var url = require('url');
var querystring = require('querystring');
var request = require('request');
var parser = require('xml2json');
var urle = 'https://gateway1.risepay.com/ws/transact.asmx/ProcessCreditCard?';
var username, password;


var risePay = {};

var whitelist = ['TransType', 'NameOnCard','CardNum','ExpDate','Amount','CVNum','InvNum',
'Zip','Street', 'City', 'MagData', 'Amount','PNRef', 'UserName', 'Password', 'ExtData' ];
var amountFields = ['Amount', 'TipAmt', 'TaxAmt'];                               


risePay.connect = function(authData){
  username = authData.username;
  password = authData.password;

}

risePay.getGatewayUrl = function(url){
  urle = url;
}

risePay.auth = function(options, callback){

  if (options) {
    options["TransType"]="Auth";
    prepareData(options, function(data){callback(data)});           
  };

}

risePay.sale = function(options, callback){

 if (options) {
  options["TransType"]="Sale";
  prepareData(options, function(data){callback(data)});           
};

}

risePay.void = function(options, callback){

  if (options) {
    options["TransType"]="Void";
    prepareData(options, function(data){callback(data)});           
  };

}

risePay.return = function(options, callback){

  if (options) {
    options["TransType"]="Return";
    prepareData(options, function(data){callback(data)});             
  };

}

risePay.capture = function(options, callback){

  if (options) {
    options["TransType"]="Force";
    prepareData(options, function(data){callback(data)});             
  };

}


function prepareData(opt, callback){

  opt["UserName"]= username;
  opt["Password"]= password;

  // fix amounts
  for (var p in opt) {
   if(inArray(p, amountFields)){
    opt[p] =  parseAmount(opt[p]);
  }
};    

var next = "";
for (var p in opt){
  // Construct ExtData
  if(!inArray(p, whitelist)){
    opt["ExtData"]="";
    next += "<"+p+">"+opt[p]+"</"+p+">";
    opt["ExtData"]= next;
    delete opt[p];
  }       
};

  // set defaults fields
  whitelist.forEach(function(w) {
    if(opt[w]===undefined){ 
     opt[w] = "";
   }
 });

  post(opt,function(res){
    callback(res);
  });

}

function convertResponse(obj){
  obj["Approved"] = false;

  // Cleanup array
  var ar = {};
  for(var j in obj){
   ar[j] = obj[j];
 };

 if(ar.Result==0){
  ar["Approved"] = true;

/// Convert ExtData
// Split plain data and XML into $matches array
var matches = ar.ExtData;
matches = matches.match(/([,=0-9a-zA-Z]*)(\<.*\>)?/);
var str = matches[1];

str.split(',').forEach(function(x){
  var arr = x.split('=');
  arr[1] && (ar[arr[0]] = arr[1]);
});

if(matches.length==2)
// Process XML part
var xmldata = parser.toJson(matches[2], {object: true, arrayNotation: false, sanitize: false});
if (xmldata) {
  for(var x in xmldata){
    ar[x] = xmldata[x];
  };
};

} 

var jsonlist = ['xmlns:xsd', 'xmlns:xsi', 'xmlns', 'ExtData'];
for(var a in ar){
  if(inArray(a, jsonlist)){
   delete ar[a];
 }  
};


return ar;
}

function post(form, callback){


  var formData = querystring.stringify(form);
  var contentLength = formData.length;

  var headers = { 
    'Content-Type' : 'application/x-www-form-urlencoded',
    'Content-Length': contentLength 
  };

  request.post({ url: urle, form: formData, headers: headers }, function (error, response, body) {

    if (!error && response.statusCode == 200) {

      var json  = parser.toJson(body, {object: true, arrayNotation: false, sanitize: false});

      callback(convertResponse(json.Response));

    } else{

      callback({Message: "Gateway error: " + body});
    }      

  });

}


function inArray(needle, haystack) {
  var length = haystack.length;
  for(var i = 0; i < length; i++) {
    if(haystack[i] == needle) return true;
  }
  return false;
}


function parseAmount(num){
  var amount = num.toFixed(2);
  return amount;
}


module.exports = risePay;