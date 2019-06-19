const NativeModules = require('react-native').NativeModules;
class hotspot {
    public enable(ssid:string){
        NativeModules.HotSpot.enableHotspot(ssid);
    }

    public disable():void{
        NativeModules.HotSpot.disableHotspot();
    }

    public isEnabled(){
        return NativeModules.HotSpot.isHotspotEnabled();
    }
}

export = new hotspot();