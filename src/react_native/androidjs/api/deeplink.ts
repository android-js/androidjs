const NativeModules = require('react-native').NativeModules;

class deeplink {
    public getLink(){
        return NativeModules.DeepLink.getDeepLink();
    }
}

export = new deeplink();