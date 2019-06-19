"use strict";
var NativeModules = require('react-native').NativeModules;
var call = /** @class */ (function () {
    function call() {
    }
    call.prototype.makeCall = function (number) {
        NativeModules.Call.makeCall(number);
    };
    return call;
}());
module.exports = new call();
