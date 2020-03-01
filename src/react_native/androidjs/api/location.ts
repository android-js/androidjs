const NativeModules = require('react-native').NativeModules;

//@ts-ignore

class location {
  public get(){
    return JSON.parse(NativeModules.Location.getLocation());
  }
}

export = new location();