class deeplink {
    public getLink(){
        return (<any>window).android.getDeepLink();
    }
}

export = new deeplink();