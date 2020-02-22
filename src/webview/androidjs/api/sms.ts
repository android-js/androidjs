class sms {
    public send(number:String, message:String) {
        return JSON.parse((<any>window).android.sendSMS(number, message));
    }
}

export = new sms();