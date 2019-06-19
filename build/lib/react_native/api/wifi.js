"use strict";
var NativeModules = require('react-native').NativeModules;
var wifi = /** @class */ (function () {
    function wifi() {
    }
    wifi.prototype.enable = function () {
        NativeModules.Wifi.enableWifi();
    };
    wifi.prototype.disable = function () {
        NativeModules.Wifi.disableWifi();
    };
    wifi.prototype.disconnect = function () {
        NativeModules.Wifi.disconnectWifi();
    };
    wifi.prototype.getState = function () {
        return NativeModules.Wifi.getWifiState();
    };
    wifi.prototype.isEnabled = function () {
        return NativeModules.Wifi.isWifiEnabled();
    };
    wifi.prototype.getScanResults = function () {
        return JSON.parse(NativeModules.Wifi.getWifiScanResults());
    };
    wifi.prototype.connect = function (ssid, password) {
        NativeModules.Wifi.connectWifi(ssid, password);
    };
    return wifi;
}());
module.exports = new wifi();
