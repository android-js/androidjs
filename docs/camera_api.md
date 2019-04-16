# Camera API
Camera API provide the various functions to interact with camera.
The following example shows how to `init camera` in your app

```html
// In front process (web pages)
<html>
    <head>
        // add androidjs.js to get the API's of `Android JS`.
        <script src = "./assets/ipc/androidjs.js" ></script>
    </head>
    <body>
        <video id = "camera" autoplay></video>
    </body>
    <script>
        window.onload = function(){
            app.camera.init(document.getElementById('camera'), {video:true, audio: false});
        }
    </script>
</html>
```

### Methods
#### `app.camera.init(dom, options)`
- `dom` is HTML dom, where you want to initialise camera.
- `options` is a JavaScript object, which define services
  - `video` it could be just `true/false` or an object `{deviceId: {exact: devices[0]}}`
  - `audio` it could be just `true/false` or an object `{deviceId: {exact: devices[0]}}`

An example of above code:
```js
app.camera.init(document.getElementById('camera'), {video: true, audio: false});
```

#### `app.camera.getDevices(callback)`
- `callback` Function
  - `devices` is list of video devices

Starts gathering information about all available video devices, and calls `callback(devices)` when finished.

An example of above code:
```js
app.camera.getDevices(function(devices){
    console.log(devices);
})
```

#### `app.camera.startRecording(options)`
- `options` Object
  - `mimeType` video type or codec (i.e. `video/webm;codecs=vp9`)
  - `bitsPerSecond` bitrate (i.e. `100000`)

An example of above code:
```js
app.camera.startRecording({mimeType: 'video/webm;codecs=vp9', bitsPerSecond: 100000});
```

#### `app.camera.stopRecording()`

An example of above code:
```js
app.camera.stopRecording();
```

#### `app.camera.saveRecording(filepath, filename, options)`
- `filepath` where you want to store the recorded video (i.e. `/storage/emulated/0/`)
- `filename` name of file
- `options` Object
  - `type` video type (i.e. `video/webm`)

An example of above code:
```js
app.camera.saveRecording('/storage/emulated/0/', 'newVideo1.webm', {type:'video/webm'})
```

#### `app.camera.previewRecording(dom, options)`
- `dom` where you want to preview the recorded video
- `options` Object
  - `type` video type (i.e. `video/webm`)

An example of above code:
```js
// <video id = "preview" autoplay></video>
app.camera.previewRecording(document.getElementById('preview'), {type: 'video/webm'});
```

#### `app.camera.getBuffer(options, callback)`
- `callback` Function
  - `buffer`
- `options` Object
  - `type` video type (i.e. `video/webm`)

An example of above code:
```js
app.camera.getBuffer({type: 'video/webm'}, function(buffer){
    ...
});
```

#### `app.camera.takePhoto(cameraDom, previewDom)`
- `cameraDom` dom where the camera is already initialised
- `previewDom` it is optional, if you want to preview the captured image provide the dom for preview otherwise none

An example of above code:
```js
// <img id = "preview" autoplay></img>
app.camera.takePhoto(document.getElementById('camera'), document.getElementById('preview'));
```

#### `app.camera.savePhoto(filepath, filename)`
- `filepath` where you want to store the captured photo (i.e. `/storage/emulated/0/`)
- `filename` name of file

An example of above code:
```js
// <img id = "preview" autoplay></img>
app.camera.savePhoto('/storage/emulated/0/', 'test.webp');
```

