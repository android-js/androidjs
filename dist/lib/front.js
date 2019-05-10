"use strict";
exports.__esModule = true;
var io = require("socket.io-client");
var socket = io('http://localhost:3000');
var listerners = {};
function addListener(event, fn) {
    listerners[event] = listerners[event] || [];
    listerners[event].push(fn);
}
function on(event, fn) {
    addListener(event, fn);
}
exports.on = on;
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
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    socket.emit.apply(socket, ['response-from-front', event].concat(args));
}
exports.send = send;
socket.on('response-from-back', function (event) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    exeFunction.apply(void 0, [event].concat(args));
});
