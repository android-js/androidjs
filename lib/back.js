const path = require("path");
const http = require('http').createServer()
const io = require("socket.io")(http);
const Buffer = require('Buffer');
const fs = require('fs');

http.listen(3000);

var clients = []

listerners = {};
    io.on('connection', function (socket) {
        // console.log('user connected');
        clients.push(socket);
        socket.on('response-from-front', function (event, ...args) {
            // console.log('get response from front');
            if(event == "androidjs:saveBlob"){
              saveBlobHelper(...args);
              return;
            }
            let fns = listerners[event];
            if (!fns) return false;
            fns.forEach(function (f) {
              f(...args);
            });
            return true;
        });
        socket.on('sync-response-from-front', function(event, ...args){
            // console.log('sync get response from front');
            let fns = listerners[event];
            if (!fns) return false;
            fns.forEach(function (f) {
              var response = f(...args);
            //   console.log(response)
              socket.emit('sync-response', event ,response);
            });
            return true;
        })
      });
module.exports.back = {
    listerners:listerners, on:on, send:send
}

module.exports.io = io;

function addListener(event, fn) {
    listerners[event] = listerners[event] || [];
    listerners[event].push(fn);
}

function on(event, fn){
    addListener(event, fn);
}

function exeFunction(evemt, ...args){
    let fns = listeners[eventName];
    if (!fns) return false;
    fns.forEach(function (f) {
      f(...args);
    });
    return true;
}


function send(event, ...args){
    // console.log('called send');
    for(let i = 0; i < clients.length; i++){
      // console.log('send Client');
      clients[i].emit('response-from-back', event, ...args)
    }
}


io.on('connection', function (socket) {
  // console.log('user connected');
  front = socket;
  socket.on('reponse-from-front', function (event, ...args) {
      let fns = listeners[eventName];
      if (!fns) return false;
      fns.forEach(function (f) {
        f(...args);
      });
      return true;
  });
});

function saveBlobHelper(filepath, filename, blob, type){
  if(type == 'image'){
    var buffer = new Buffer(blob, 'base64');
    fs.writeFile(path.join(filepath, filename), buffer, function(err){
      if(err){
        console.log(err);
        throw err;
      }
    });
  }else if(type == "video"){
    var buffer = new Buffer(blob);
    fs.writeFile(path.join(filepath, filename), buffer, function(err){
      if(err){
        console.log(err);
        throw err;
      }
    });
  }else if(type == "audio"){
    let buffer = new Buffer(blob);
    fs.writeFile(path.join(filepath, filename,), buffer, function(err){
      if(err){
        console.log(err);
        throw err;
      }
      console.log('saved Audio');
    })
  }
}