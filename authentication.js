var request = require('request');
var config ={
loginURL :"",

}


function login(username, password,callback) {
  var callBackData = {};
  request({
  url: config.loginURL,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({"info":{"username": username}, "password":  password})
}, function(error, response, body){
  if(error) {
    callBackData.statusCode = -1
  } else {
    if(response.statusCode!=201){
      callBackData.statusCode = response.statusCode
      callback(callBackData)

    }else{
      callBackData.statusCode = response.statusCode
      callBackData.token = body.token
      callback(callBackData)
    }
  }
});
}
module.exports = {
  login: login
}
