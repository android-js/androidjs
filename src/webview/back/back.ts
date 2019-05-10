import path = require('path');
import http = require('http');
import io = require('socket.io');
import Buffer = require('Buffer');
import fs = require('fs');

class Back{
    private server;
    private server_socket;
    private clients;
    private listerners;

    constructor(){
        this.server = http.createServer();
        this.server.listen(3000);
        this.server_socket = io(this.server);
        this.clients = [];
        this.listerners = {};
        this.server_socket.on('connection', function(socket){
            this.clients.push(socket);
            socket.on('response-from-front', function(event:string, ...args){
            if(event == 'androidjs:saveBlob'){
                this.saveBlobHelper(args[0], args[1], args[2], args[3]);
                return;
            }
            this.exeFunction(event, ...args);
            }.bind(this));
        }.bind(this));
    }

    private addListener(event:string, fn:Function){
        this.listerners[event] = this.listerners[event] || [];
        this.listerners[event].push(fn);
    }

    public on(event:string, fn:Function){
        this.addListener(event, fn);
    }

    private exeFunction(event:string, ...args){
        let fns = this.listerners[event];
        if(!fns) return;
        fns.forEach(function(f){
            f(...args);
        });
        return;
    }

    public send(event:string, ...args){
        for(let i = 0; i < this.clients.length; i++){
            this.clients[i].emit('response-from-back', event, ...args);
        }
    }

    private saveBlobHelper(filepath:string, filename:string, blob:Blob, type:string){
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
}

export = new Back();