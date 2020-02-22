"use strict";
var NativeModules = require('react-native').NativeModules;
var sms = /** @class */ (function () {
    function sms() {
    }
    sms.prototype.send = function (number, message) {
        return JSON.parse(NativeModules.SMS.sendSMS(number, message));
    };
    return sms;
}());
module.exports = new sms();
