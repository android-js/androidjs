class mobiledata {
  public isEnabled(){
    return (<any>window).android.isMobileDataEnabled();
  }
}

export = new mobiledata();