"use strict";
var path = require("path");
var http = require("http");
var io = require("socket.io");
var Buffer = require("Buffer");
var fs = require("fs");
var server = http.createServer();
server.listen(3000);
var server_socket = io(server);
var clients = [];
var listerners = {};
server_socket.on('connection', function (socket) {
    clients.push(socket);
    socket.on('response-from-front', function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (event == 'androidjs:saveBlob') {
            saveBlobHelper(args[0], args[1], args[2], args[3]);
            return;
        }
        exeFunction.apply(void 0, [event].concat(args));
    });
});
function addListener(event, fn) {
    listerners[event] = listerners[event] || [];
    listerners[event].push(fn);
}
function on(event, fn) {
    addListener(event, fn);
}
function exeFunction(event) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var fns = listerners[event];
    if (!fns)
        return;
    fns.forEach(function (f) {
        f.apply(void 0, args);
    });
    return;
}
function send(event) {
    var _a;
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < clients.length; i++) {
        (_a = clients[i]).emit.apply(_a, ['response-from-back', event].concat(args));
    }
}
function saveBlobHelper(filepath, filename, blob, type) {
    if (type == 'image') {
        var buffer = new Buffer(blob, 'base64');
        fs.writeFile(path.join(filepath, filename), buffer, function (err) {
            if (err) {
                console.log(err);
                throw err;
            }
        });
    }
    else if (type == 'video') {
        var buffer = new Buffer(blob);
        fs.writeFile(path.join(filepath, filename), buffer, function (err) {
            if (err) {
                console.log(err);
                throw err;
            }
        });
    }
    else if (type == 'audio') {
        var buffer = new Buffer(blob);
        fs.writeFile(path.join(filepath, filename), buffer, function (err) {
            if (err) {
                console.log(err);
                throw err;
            }
        });
    }
}
module.exports = { send: send, on: on };
