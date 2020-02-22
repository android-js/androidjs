"use strict";
var NativeModules = require('react-native').NativeModules;
var notification = /** @class */ (function () {
    function notification() {
    }
    notification.prototype.init = function (title, msg) {
        NativeModules.Notification.initNotification(title, msg);
    };
    notification.prototype.show = function (id) {
        NativeModules.Notification.showNotification(id);
    };
    notification.prototype.initBig = function (title, msg) {
        if (typeof msg == 'string')
            throw "Error: second parameter of initBig() should be an array of strings";
        NativeModules.Notification.initBigNotification(title, msg);
    };
    return notification;
}());
module.exports = new notification();
