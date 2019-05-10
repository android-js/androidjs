"use strict";
var path = require("path");
var http = require("http");
var io = require("socket.io");
var Buffer = require("Buffer");
var fs = require("fs");
var Back = /** @class */ (function () {
    function Back() {
        this.server = http.createServer();
        this.server.listen(3000);
        this.server_socket = io(this.server);
        this.clients = [];
        this.listerners = {};
        this.server_socket.on('connection', function (socket) {
            this.clients.push(socket);
            socket.on('response-from-front', function (event) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                if (event == 'androidjs:saveBlob') {
                    this.saveBlobHelper(args[0], args[1], args[2], args[3]);
                    return;
                }
                this.exeFunction.apply(this, [event].concat(args));
            }.bind(this));
        }.bind(this));
    }
    Back.prototype.addListener = function (event, fn) {
        this.listerners[event] = this.listerners[event] || [];
        this.listerners[event].push(fn);
    };
    Back.prototype.on = function (event, fn) {
        this.addListener(event, fn);
    };
    Back.prototype.exeFunction = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var fns = this.listerners[event];
        if (!fns)
            return;
        fns.forEach(function (f) {
            f.apply(void 0, args);
        });
        return;
    };
    Back.prototype.send = function (event) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        for (var i = 0; i < this.clients.length; i++) {
            (_a = this.clients[i]).emit.apply(_a, ['response-from-back', event].concat(args));
        }
    };
    Back.prototype.saveBlobHelper = function (filepath, filename, blob, type) {
        console.log('called this function');
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
    };
    return Back;
}());
module.exports = new Back();
