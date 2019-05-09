class wifi {
    public enable():void{
        (<any>window).android.enableWifi();
    }

    public disable():void{
        (<any>window).android.disableWifi();
    }

    public disconnect():void{
        (<any>window).android.disconnectWifi();
    }

    public getState(){
        return (<any>window).android.getWifiState();
    }

    public isEnabled(){
        return (<any>window).android.isWifiEnabled();
    }

    public getScanResults(){
        return JSON.parse((<any>window).android.getWifiScanResults());
    }

    public connect(ssid:string, password:string){
        (<any>window).android.connectWifi(ssid, password);
    }
}

export = new wifi();