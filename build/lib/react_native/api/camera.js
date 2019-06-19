"use strict";
var camera = /** @class */ (function () {
    function camera() {
        this.mediaRecorder = null;
        this.recordedBlobs = [];
        this.canvas = document.createElement('canvas');
        this.stream = null;
    }
    camera.prototype.init = function (dom, constraints) {
        if (this.stream != undefined) {
            this.stopMediaTracks(this.stream);
        }
        navigator.getUserMedia(constraints, function (stream) {
            this.stream = stream;
            dom.srcObject = stream;
        }, function (error) {
            console.log(error);
            throw error;
        });
    };
    camera.prototype.handleDataAvailable = function (event) {
        if (event.data && event.data.size > 0) {
            this.recordedBlobs.push(event.data);
        }
    };
    camera.prototype.startRecording = function (options) {
        this.recordedBlobs = [];
        try {
            this.mediaRecorder = new MediaRecorder(this.stream, options);
        }
        catch (e0) {
            console.log('Unable to create MediaRecorder with options Object: ', options, e0);
            try {
                options = { mimeType: 'video/webm;codecs=vp8', bitsPerSecond: 100000 };
                this.mediaRecorder = new MediaRecorder(this.stream, options);
            }
            catch (e1) {
                console.log('Unable to create MediaRecorder with options Object: ', options, e1);
                try {
                    options = 'video/mp4';
                    this.mediaRecorder = new MediaRecorder(this.stream, options);
                }
                catch (e2) {
                    alert('MediaRecorder is not supported by this browser.');
                    console.error('Exception while creating MediaRecorder:', e2);
                    return;
                }
            }
        }
        this.mediaRecorder.ondataavailable = this.handleDataAvailable;
        this.mediaRecorder.start();
    };
    camera.prototype.stopRecording = function () {
        this.mediaRecorder.stop();
    };
    camera.prototype.saveRecording = function (filepath, filename, options) {
        var blob = new Blob(this.recordedBlobs, options);
        this.saveCameraBlob(filepath, filename, blob);
    };
    camera.prototype.previewRecording = function (dom, options) {
        dom.controls = true;
        var superBuffer = new Blob(this.recordedBlobs, options);
        dom.src = window.URL.createObjectURL(superBuffer);
    };
    camera.prototype.saveCameraBlob = function (filepath, filename, blob) {
        var reader = new FileReader();
        reader.onload = function () {
            if (reader.readyState == 2) {
                front.send('androidjs:saveBlob', filepath, filename, reader.result, 'video');
                console.log("saving " + JSON.stringify({ filename: filename, size: blob.size }));
            }
        };
        reader.readAsArrayBuffer(blob);
    };
    camera.prototype.getDevices = function (callback) {
        var devices = [];
        navigator.mediaDevices.enumerateDevices()
            .then(function (mediaDevices) {
            for (var i = 0; i < mediaDevices.length; i++) {
                if (mediaDevices[i].kind === 'videoinput') {
                    devices.push(mediaDevices[i].deviceId);
                }
            }
            callback(devices);
        });
    };
    camera.prototype.stopMediaTracks = function (stream) {
        stream.getTracks().forEach(function (track) {
            track.stop();
        });
    };
    camera.prototype.getBuffer = function (options, callback) {
        var blob = new Blob(this.recordedBlobs, options);
        var reader = new FileReader();
        reader.onload = function () {
            if (reader.readyState == 2) {
                callback(reader.result);
            }
        };
        reader.readAsArrayBuffer(blob);
    };
    camera.prototype.takePhoto = function (cameraDom, previewDom) {
        this.canvas.width = cameraDom.videoWidth;
        this.canvas.height = cameraDom.videoHeight;
        this.canvas.getContext('2d').drawImage(cameraDom, 0, 0);
        if (previewDom != undefined) {
            previewDom.src = this.canvas.toDataURL('image/webp');
        }
    };
    camera.prototype.savePhoto = function (filepath, filename) {
        var data = this.canvas.toDataURL('image/webp').replace(/^data:image\/\w+;base64,/, "");
        front.send('androidjs:saveBlob', filepath, filename, data, 'image');
        console.log('saving file');
    };
    return camera;
}());
module.exports = new camera();
