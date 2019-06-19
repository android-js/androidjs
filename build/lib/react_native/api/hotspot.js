"use strict";
var NativeModules = require('react-native').NativeModules;
var hotspot = /** @class */ (function () {
    function hotspot() {
    }
    hotspot.prototype.enable = function (ssid) {
        NativeModules.HotSpot.enableHotspot(ssid);
    };
    hotspot.prototype.disable = function () {
        NativeModules.HotSpot.disableHotspot();
    };
    hotspot.prototype.isEnabled = function () {
        return NativeModules.HotSpot.isHotspotEnabled();
    };
    return hotspot;
}());
module.exports = new hotspot();
