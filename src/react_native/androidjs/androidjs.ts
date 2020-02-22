import notification = require('./api/notification');
import app = require('./api/app');
import hotspot = require('./api/hotspot');
import toast = require('./api/toast');
import wifi = require('./api/wifi');
import call = require('./api/call');
import contact = require('./api/contact');
import deeplink = require('./api/deeplink');
import sms = require('./api/sms');

export = {
    notification,
    hotspot,
    toast,
    wifi,
    call,
    contact,
    deeplink,
    sms,
    getPath: app.getPath,
    loadUrl: app.loadURL,
    reload: app.reload
}