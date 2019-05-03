class hotspot {
    public enable(ssid:string){
        window.android.enableHotspot(ssid);
    }

    public disable():void{
        window.android.disableHotspot();
    }

    public isEnabled(){
        return window.android.isHotspotEnabled();
    }
}

export = new hotspot();