class toast {
    public show(text:string, duration){
        (<any>window).android.showToast(text, duration);
    }
}

export = new toast();