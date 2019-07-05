import notification = require('./api/notification');
import app = require('./api/app');
import hotspot = require('./api/hotspot');
import toast = require('./api/toast');
import wifi = require('./api/wifi');
import call = require('./api/call');
import contact = require('./api/contact');

export = {
    notification,
    hotspot,
    toast,
    wifi,
    call,
    contact,
    getPath: app.getPath,
    loadUrl: app.loadURL,
    reload: app.reload
}