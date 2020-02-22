const NativeModules = require('react-native').NativeModules;

class sms {
  public send(number:String, message:String) {
      return JSON.parse(NativeModules.SMS.sendSMS(number, message));
  }
}

export = new sms();