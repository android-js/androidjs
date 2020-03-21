const NativeModules = require('react-native').NativeModules;

class mobiledata {
  public isEnabled(){
    return NativeModules.Location.isMobileDataEnabled();
  }
}

export = new mobiledata();