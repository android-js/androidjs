"use strict";
var NativeModules = require('react-native').NativeModules;
//@ts-ignore
var location = /** @class */ (function () {
    function location() {
    }
    location.prototype.get = function () {
        return JSON.parse(NativeModules.Location.getLocation());
    };
    return location;
}());
module.exports = new location();
