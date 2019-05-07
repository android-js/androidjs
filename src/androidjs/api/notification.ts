class notification {
    public init(title:string, msg:string){
        (<any>window).android.initNotification(title, msg);
    }

    public initBig(title:string, msg:Array<string>){
        if(typeof msg == 'string') throw "Error: second parameter of initBig() should be an array of strings";
        (<any>window).android.initBigNotification(title, msg);
    }

    public show(id){
        (<any>window).android.showNotification(id);
    }
}

export = new notification();