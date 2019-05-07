class hotspot {
    public enable(ssid:string){
        (<any>window).android.enableHotspot(ssid);
    }

    public disable():void{
        (<any>window).android.disableHotspot();
    }

    public isEnabled(){
        return (<any>window).android.isHotspotEnabled();
    }
}

export = new hotspot();