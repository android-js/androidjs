# Microphone API
Microphone API provide the various functions to interact with microphone.
The following example shows how to `record audio` in your app

```html
// In front process (web pages)
<html>
    <head>
        // add androidjs.js to get the API's of `Android JS`.
        <script src = "./assets/ipc/androidjs.js" ></script>
    </head>
    <script>
        window.onload = function(){
            app.microphone.getDevices(function(devices){
                app.microphone.startRecording({audio:{deviceId:{exact: devices[1]}}});
            });
        }
    </script>
</html>
```

### Methods

#### `app.microphone.getDevices(callback)`
- `callback` Function
  - `devices` is list of audio devices

Starts gathering information about all available audio devices, and calls `callback(devices)` when finished.

An example of above code:
```js
app.microphone.getDevices(function(devices){
    console.log(devices);
})
```

#### `app.microphone.startRecording(options)`
- `options` Object
  - `audio` it could be just `true/false` or an object `{deviceId: {exact: devices[0]}}`

An example of above code:
```js
app.microphone.startRecording({audio:true);

                        or

app.microphone.getDevices(function(devices){
    app.microphone.startRecording({audio:{deviceId:{exact: devices[1]}}});
});
```

#### `app.microphone.stopRecording()`

An example of above code:
```js
app.microphone.stopRecording();
```

#### `app.microphone.saveRecording(filepath, filename, options)`
- `filepath` where you want to store the recorded audio (i.e. `/storage/emulated/0/`)
- `filename` name of file
- `options` Object
  - `type` audio type (i.e. `audio/webm`)

An example of above code:
```js
app.microphone.saveRecording('/storage/emulated/0/', 'newAudio1.webm', {type:'audio/webm'})
```

#### `app.microphone.previewRecording(dom, options)`
- `dom` where you want to preview the recorded audio
- `options` Object
  - `type` audio type (i.e. `audio/webm`)

An example of above code:
```js
// <audio id = "preview" autoplay></audio>
app.camera.previewRecording(document.getElementById('preview'), {type: 'audio/webm'});
```

#### `app.microphone.getBuffer(options, callback)`
- `callback` Function
  - `buffer`
- `options` Object
  - `type` audio type (i.e. `audio/webm`)

An example of above code:
```js
app.microphone.getBuffer({type: 'audio/webm'}, function(buffer){
    ...
});
```
