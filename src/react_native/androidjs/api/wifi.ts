const NativeModules = require('react-native').NativeModules;

class wifi {
    public enable():void{
        NativeModules.Wifi.enableWifi();
    }

    public disable():void{
        NativeModules.Wifi.disableWifi();
    }

    public disconnect():void{
        NativeModules.Wifi.disconnectWifi();
    }

    public getState(){
        return NativeModules.Wifi.getWifiState();
    }

    public isEnabled(){
        return NativeModules.Wifi.isWifiEnabled();
    }

    public getScanResults(){
        return JSON.parse(NativeModules.Wifi.getWifiScanResults());
    }

    public connect(ssid:string, password:string){
        NativeModules.Wifi.connectWifi(ssid, password);
    }
}

export = new wifi();