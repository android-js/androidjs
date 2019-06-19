const NativeModules = require('react-native').NativeModules;

class toast {
    public show(text:string, duration){
        NativeModules.Toast.showToast(text, duration);
    }
}

export = new toast();