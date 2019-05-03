export function getPath(name:string){
    return window.android.getPath(name);
}

export function loadURL(url:string){
    location.href = url;
}

export function reload():void{
    location.reload();
}