//@ts-ignore

class location {
  public get(){
    return JSON.parse((<any>window).android.getLocation());
  }
}

export = new location();