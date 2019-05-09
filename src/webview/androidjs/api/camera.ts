declare var front:any;

class camera {
    private mediaRecorder:MediaRecorder;
    private recordedBlobs:Array<Blob>;
    private canvas:HTMLCanvasElement;
    private stream;

    constructor(){
        this.mediaRecorder = null;
        this.recordedBlobs = [];
        this.canvas = document.createElement('canvas');
        this.stream = null;
    }

    public init(dom:HTMLVideoElement, constraints:object){
        if(this.stream != undefined){
            this.stopMediaTracks(this.stream);
        }
        navigator.getUserMedia(constraints, function(stream){
            this.stream = stream;
            dom.srcObject = stream;
        }, function(error){
            console.log(error);
            throw error;
        })
    }

    private handleDataAvailable(event){
        if(event.data && event.data.size > 0){
            this.recordedBlobs.push(event.data);
        }
    }

    public startRecording(options){
        this.recordedBlobs = [];
        try{
            this.mediaRecorder = new MediaRecorder(this.stream, options);
        }catch (e0) {
            console.log('Unable to create MediaRecorder with options Object: ', options, e0);
            try {
                options = {mimeType: 'video/webm;codecs=vp8', bitsPerSecond: 100000};
                this.mediaRecorder = new MediaRecorder(this.stream, options);
            } catch (e1) {
                console.log('Unable to create MediaRecorder with options Object: ', options, e1);
                try {
                    options = 'video/mp4';
                    this.mediaRecorder = new MediaRecorder(this.stream, options);
                } catch (e2) {
                    alert('MediaRecorder is not supported by this browser.');
                    console.error('Exception while creating MediaRecorder:', e2);
                    return;
                }
            }
        }
        this.mediaRecorder.ondataavailable = this.handleDataAvailable;
        this.mediaRecorder.start();
    }

    public stopRecording(){
        this.mediaRecorder.stop();
    }

    public saveRecording(filepath:string, filename:string, options){
        let blob:Blob = new Blob(this.recordedBlobs, options);
        this.saveCameraBlob(filepath, filename, blob);
    }

    public previewRecording(dom:HTMLVideoElement, options){
        dom.controls = true;
        let superBuffer:Blob = new Blob(this.recordedBlobs, options);
        dom.src = window.URL.createObjectURL(superBuffer);
    }

    private saveCameraBlob(filepath:string, filename:string, blob:Blob){
        let reader = new FileReader();
        reader.onload = function(){
            if(reader.readyState == 2){
                front.send('androidjs:saveBlob', filepath, filename, reader.result, 'video');
                console.log(`saving ${JSON.stringify({filename, size:blob.size})}`);
            }
        }
        reader.readAsArrayBuffer(blob);
    }

    public getDevices(callback:Function){
        let devices = [];
        navigator.mediaDevices.enumerateDevices()
        .then(function(mediaDevices){
            for(let i = 0; i < mediaDevices.length; i++){
                if(mediaDevices[i].kind === 'videoinput'){
                    devices.push(mediaDevices[i].deviceId);
                }
            }
            callback(devices);
        });
    }

    private stopMediaTracks(stream){
        stream.getTracks().forEach(function(track){
            track.stop();
        })
    }

    public getBuffer(options, callback:Function){
        let blob = new Blob(this.recordedBlobs, options);
        let reader = new FileReader();
        reader.onload = function(){
            if(reader.readyState == 2){
                callback(reader.result);
            }
        }
        reader.readAsArrayBuffer(blob);
    }

    public takePhoto(cameraDom:HTMLVideoElement, previewDom:HTMLImageElement){
        this.canvas.width = cameraDom.videoWidth;
        this.canvas.height = cameraDom.videoHeight;
        this.canvas.getContext('2d').drawImage(cameraDom, 0, 0);
        if(previewDom != undefined){
            previewDom.src = this.canvas.toDataURL('image/webp');
        }
    }
    public savePhoto(filepath:string, filename:string){
        let data = this.canvas.toDataURL('image/webp').replace(/^data:image\/\w+;base64,/, "");
        front.send('androidjs:saveBlob', filepath, filename, data, 'image');
        console.log('saving file');
    }
}

export  = new camera()