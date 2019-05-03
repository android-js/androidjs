class wifi {
    public enable():void{
        window.android.enableWifi();
    }

    public disable():void{
        window.android.disableWifi();
    }

    public disconnect():void{
        window.android.disconnectWifi();
    }

    public getState(){
        return window.android.getWifiState();
    }

    public isEnabled(){
        return window.android.isWifiEnabled();
    }

    public getScanResults(){
        return JSON.parse(window.android.getWifiScanResults());
    }

    public connect(ssid:string, password:string){
        window.android.connectWifi(ssid, password);
    }
}

export = new wifi();