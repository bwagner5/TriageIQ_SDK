var request = require('request');
var config = require('./config');

function login(username, password,callback) {
  var callBackData = {};
  request({
    url: config.loginURL,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({"usrinfo":{"username": username}, "password":  password})
  }, function(error, response, body){
    if(error) {
      callBackData.statusCode = -1
    } else {
      var jsonBody = JSON.parse(body);
      if(response.statusCode!=201){
        callBackData.status = jsonBody.status
        callback(callBackData)

      }else{
        callBackData.status = jsonBody.status
        callBackData.token = jsonBody.token
        callback(callBackData)
      }
    }
  });
}

function signup(usrinfo,password,callback) {
  var callBackData = {};
  request({
    url: config.signURL,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({"usrinfo":usrinfo, "password":  password})
  }, function(error, response, body){
    if(error) {
      callBackData.statusCode = -1
      callback(callBackData)

    } else {
      var jsonBody = JSON.parse(body);
      if(jsonBody.statusCode!=201){
        callBackData.status = jsonBody.status
        callback(callBackData)

      }else{
        callBackData.status = jsonBody.status
        callBackData.token = jsonBody.token
        callback(callBackData)
      }
    }
  });
}

module.exports = {
  login: login,
  signup: signup
}
