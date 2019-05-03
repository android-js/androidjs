class toast {
    public show(text:string, duration){
        window.android.showToast(text, duration);
    }
}

export = new toast();