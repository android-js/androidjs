"use strict";
var microphone = /** @class */ (function () {
    function microphone() {
        this.mediaRecorder = null;
        this.recordedBlobs = [];
        this.stream = null;
    }
    microphone.prototype.handleDataAvailable = function (event) {
        if (event.data && event.data.size > 0) {
            this.recordedBlobs.push(event.data);
        }
    };
    microphone.prototype.stopMediaTracks = function (stream) {
        stream.getTracks().forEach(function (track) {
            track.stop();
        });
    };
    microphone.prototype.startRecording = function (options) {
        if (this.stream != undefined) {
            this.stopMediaTracks(this.stream);
        }
        navigator.getUserMedia(options, function (stream) {
            this.stream = stream;
            this.mediaRecorder = new MediaRecorder(stream);
            this.mediaRecorder.ondataavailable = this.handleDataAvailable;
            this.mediaRecorder.start();
        }, function (error) {
            console.log(error);
            throw error;
        });
    };
    microphone.prototype.stopRecording = function () {
        this.mediaRecorder.stop();
    };
    microphone.prototype.previewRecording = function (dom, options) {
        dom.controls = true;
        var blob = new Blob(this.recordedBlobs, options);
        dom.src = URL.createObjectURL(blob);
    };
    microphone.prototype.saveRecording = function (filepath, filename, options) {
        var blob = new Blob(this.recordedBlobs, options);
        this.saveAudioBlob(filepath, filename, blob);
    };
    microphone.prototype.saveAudioBlob = function (filepath, filename, blob) {
        var reader = new FileReader();
        reader.onload = function () {
            if (reader.readyState == 2) {
                front.send('androidjs:saveBlob', filepath, filename, reader.result, 'audio');
                console.log("saving " + JSON.stringify({ filename: filename, size: blob.size }));
            }
        };
        reader.readAsArrayBuffer(blob);
    };
    microphone.prototype.getBuffer = function (options, callback) {
        var blob = new Blob(this.recordedBlobs, options);
        var reader = new FileReader();
        reader.onload = function () {
            if (reader.readyState == 2) {
                callback(reader.result);
            }
        };
        reader.readAsArrayBuffer(blob);
    };
    microphone.prototype.getDevices = function (callback) {
        var devices = [];
        navigator.mediaDevices.enumerateDevices()
            .then(function (mediaDevices) {
            for (var i = 0; i < mediaDevices.length; i++) {
                if (mediaDevices[i].kind == 'audioinput') {
                    devices.push(mediaDevices[i].deviceId);
                }
            }
            callback(devices);
        });
    };
    return microphone;
}());
module.exports = new microphone();
