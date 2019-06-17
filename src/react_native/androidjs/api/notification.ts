const NativeModules = require('react-native').NativeModules;

class notification{
    public init(title:string, msg:string){
        NativeModules.Notification.initNotification(title, msg);
    }

    public show(id){
        NativeModules.Notification.showNotification(id);
    }

    public initBig(title:string, msg:Array<string>){
        if(typeof msg == 'string') throw "Error: second parameter of initBig() should be an array of strings";
        NativeModules.Notification.initBigNotification(title, msg);
    }
}
export =  new notification();