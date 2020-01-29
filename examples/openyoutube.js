"use strict"
let playerName = ".."; //Change to "castv2-player" to execute outside this folder
var ScannerPromise = require(playerName).ScannerPromise();
var Client = require('castv2-client').Client;
var Youtube = require('youtube-castv2-client').Youtube;

return ScannerPromise()
  .then(function (device) {

    console.log("Dispositivo cast encontrado -> ", device)
    ondeviceup(device);
    return Promise.resolve();
  })

function ondeviceup(host) {

  var client = new Client();
  client.connect(host, function () {
    console.log('connected, launching app ...');
    
    client.launch(Youtube, function (err, player) {
      player.load('WPTQ8fZ0aQk');
    });
  });

  client.on('error', function (err) {
    console.log('Error: %s', err.message);
    client.close();
  });

}
