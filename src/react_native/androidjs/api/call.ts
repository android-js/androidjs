const NativeModules = require('react-native').NativeModules;

class call {
    public makeCall(number){
        NativeModules.Call.makeCall(number);
    }
}

export = new call();