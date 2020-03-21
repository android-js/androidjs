import camera = require('./api/camera');
import microphone = require('./api/microphone');
import call = require('./api/call');
import hotspot = require('./api/hotspot');
import notification = require('./api/notification');
import toast = require('./api/toast');
import wifi = require('./api/wifi');
import app = require('./api/app');
import contact = require('./api/contact');
import deeplink = require('./api/deeplink');
import sms = require('./api/sms');
import location = require('./api/location');
import mobiledata = require('./api/mobiledata');

export = {
    camera,
    microphone,
    call,
    hotspot,
    notification,
    toast,
    wifi,
    contact,
    deeplink,
    sms,
    getPath: app.getPath,
    reload: app.reload,
    loadURL: app.loadURL,
    location,
    mobiledata,
}