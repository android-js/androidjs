"use strict";
var NativeModules = require('react-native').NativeModules;
var toast = /** @class */ (function () {
    function toast() {
    }
    toast.prototype.show = function (text, duration) {
        NativeModules.Toast.showToast(text, duration);
    };
    return toast;
}());
module.exports = new toast();
