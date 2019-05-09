declare var front:any;
class microphone {
    private mediaRecorder:MediaRecorder;
    private recordedBlobs:Array<Blob>;
    private stream;

    constructor(){
        this.mediaRecorder = null;
        this.recordedBlobs = [];
        this.stream = null;
    }

    private handleDataAvailable(event){
        if(event.data && event.data.size > 0){
            this.recordedBlobs.push(event.data);
        }
    }

    private stopMediaTracks(stream){
        stream.getTracks().forEach(function(track){
            track.stop();
        })
    }
    public startRecording(options){
        if(this.stream != undefined){
            this.stopMediaTracks(this.stream);
        }
        navigator.getUserMedia(options, function(stream){
            this.stream = stream;
            this.mediaRecorder = new MediaRecorder(stream);
            this.mediaRecorder.ondataavailable = this.handleDataAvailable;
            this.mediaRecorder.start();
        }, function(error){
            console.log(error);
            throw error;
        })
    }

    public stopRecording(){
        this.mediaRecorder.stop();
    }

    public previewRecording(dom:HTMLAudioElement, options){
        dom.controls = true;
        let blob:Blob = new Blob(this.recordedBlobs, options);
        dom.src = URL.createObjectURL(blob);
    }

    public saveRecording(filepath:string, filename:string, options){
        let blob:Blob = new Blob(this.recordedBlobs, options);
        this.saveAudioBlob(filepath, filename, blob);
    }

    private saveAudioBlob(filepath:string, filename:string, blob:Blob){
        let reader = new FileReader();
        reader.onload = function(){
            if(reader.readyState == 2){
                front.send('androidjs:saveBlob', filepath, filename, reader.result, 'audio');
                console.log(`saving ${JSON.stringify({filename, size:blob.size})}`);
            }
        }
        reader.readAsArrayBuffer(blob);
    }

    public getBuffer(options, callback: Function){
        let blob:Blob = new Blob(this.recordedBlobs, options);
        let reader = new FileReader();
        reader.onload = function(){
            if(reader.readyState == 2){
                callback(reader.result);
            }
        }
        reader.readAsArrayBuffer(blob);
    }

    public getDevices(callback:Function){
        let devices = [];
        navigator.mediaDevices.enumerateDevices()
        .then(function(mediaDevices){
            for(let i = 0; i < mediaDevices.length; i++){
                if(mediaDevices[i].kind == 'audioinput'){
                    devices.push(mediaDevices[i].deviceId);
                }
            }
            callback(devices);
        });
    }
}

export  = new microphone();