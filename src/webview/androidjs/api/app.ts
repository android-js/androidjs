export function getPath(name:string){
    return (<any>window).android.getPath(name);
}

export function loadURL(url:string){
    location.href = url;
}

export function reload():void{
    location.reload();
}

export function exec(cmd:string, args:Array<string> = []){
    return return JSON.parse((<any>window).android.exec([cmd].concat(args)));
}
