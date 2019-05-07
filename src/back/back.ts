import path = require('path');
import http = require('http');
import io = require('socket.io');
import Buffer = require('Buffer');
import fs = require('fs');

let server = http.createServer();
server.listen(3000);
let server_socket = io(server);
let clients = [];
let listerners = {};

server_socket.on('connection', function(socket){
    clients.push(socket);
    socket.on('response-from-front', function(event:string, ...args){
        if(event == 'androidjs:saveBlob'){
            saveBlobHelper(args[0], args[1], args[2], args[3]);
            return;
        }
        exeFunction(event, ...args);
    });
});

function addListener(event:string, fn:Function){
    listerners[event] = listerners[event] || [];
    listerners[event].push(fn);
}

function on(event:string, fn:Function){
    addListener(event, fn);
}

function exeFunction(event:string, ...args){
    let fns = listerners[event];
    if(!fns) return;
    fns.forEach(function(f){
        f(...args);
    });
    return;
}

function send(event:string, ...args){
    for(let i = 0; i < clients.length; i++){
        clients[i].emit('response-from-back', event, ...args);
    }
}

function saveBlobHelper(filepath:string, filename:string, blob:Blob, type:string){
    console.log('called this function');
    if(type == 'image'){
        let buffer = new Buffer(blob, 'base64');
        fs.writeFile(path.join(filepath, filename), buffer, function(err){
            if(err){
                console.log(err);
                throw err;
            }
        });
    }else if(type == 'video'){
        let buffer = new Buffer(blob);
        fs.writeFile(path.join(filepath, filename), buffer, function(err){
            if(err){
                console.log(err);
                throw err;
            }
        });
    }else if(type =='audio'){
        let buffer = new Buffer(blob);
        fs.writeFile(path.join(filepath, filename), buffer, function(err){
            if(err){
                console.log(err);
                throw err;
            }
        });
    }
}

export = {send, on}