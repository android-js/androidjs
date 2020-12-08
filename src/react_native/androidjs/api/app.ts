const NativeModules = require('react-native').NativeModules;

export function getPath(name:string){
    return NativeModules.App.getPath(name);
}

export function loadURL(url:string){
    location.href = url;
}

export function reload():void{
    location.reload();
}

export function exec(cmd:string, args:Array<string> = []){
    return return JSON.parse(NativeModules.App.exec([cmd].concat(args)));
}
