class call {
    public makeCall(number){
        (<any>window).android.makeCall(number);
    }
}

export = new call();