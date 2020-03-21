"use strict";
var NativeModules = require('react-native').NativeModules;
var mobiledata = /** @class */ (function () {
    function mobiledata() {
    }
    mobiledata.prototype.isEnabled = function () {
        return NativeModules.Location.isMobileDataEnabled();
    };
    return mobiledata;
}());
module.exports = new mobiledata();
