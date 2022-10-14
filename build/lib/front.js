"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.send = exports.on = void 0;
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
    socket.emit.apply(socket, __spreadArrays(['response-from-front', event], args));
}
exports.send = send;
socket.on('response-from-back', function (event) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    exeFunction.apply(void 0, __spreadArrays([event], args));
});
