"use strict";
var notification = require("./api/notification");
var app = require("./api/app");
var hotspot = require("./api/hotspot");
var toast = require("./api/toast");
var wifi = require("./api/wifi");
var call = require("./api/call");
var contact = require("./api/contact");
var deeplink = require("./api/deeplink");
var sms = require("./api/sms");
var location = require("./api/location");
var mobiledata = require("./api/mobiledata");
module.exports = {
    notification: notification,
    hotspot: hotspot,
    toast: toast,
    wifi: wifi,
    call: call,
    contact: contact,
    deeplink: deeplink,
    sms: sms,
    getPath: app.getPath,
    loadUrl: app.loadURL,
    reload: app.reload,
    exec: app.exec,
    location: location,
    mobiledata: mobiledata
};
