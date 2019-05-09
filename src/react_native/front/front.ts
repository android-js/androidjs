import io = require('socket.io-client');

let socket = io('http://localhost:3000');
let listerners = {};

function addListener(event:string, fn:Function){
    listerners[event] = listerners[event] || [];
    listerners[event].push(fn);
}

export function on(event:string, fn:Function){
    addListener(event, fn);
}

function exeFunction(event:string, ...args){
    let fns:Array<Function> = listerners[event];
    if(!fns) return;
    fns.forEach(function(f){
        f(...args);
    });
    return;
}

export function send(event:string, ...args){
    socket.emit('response-from-front', event, ...args);
}

socket.on('response-from-back', function(event:string, ...args){
    exeFunction(event, ...args);
})