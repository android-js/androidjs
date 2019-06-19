"use strict";
var notification = require("./api/notification");
var app = require("./api/app");
var camera = require("./api/camera");
var hotspot = require("./api/hotspot");
var microphone = require("./api/microphone");
var toast = require("./api/toast");
var wifi = require("./api/wifi");
var call = require("./api/call");
module.exports = {
    notification: notification,
    app: app,
    camera: camera,
    hotspot: hotspot,
    microphone: microphone,
    toast: toast,
    wifi: wifi,
    call: call
};
