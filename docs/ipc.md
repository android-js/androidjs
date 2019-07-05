# IPC (Inter Process Communication)
There are two processes `Back Process` and `Front Process` in `Android JS`.
- `main.js` is the `Back Process` of your app which provide `Node JS` runtime environment.
- `views` of your app called `Front Process` which rendered by `Android Webview` (i.e HTML files) or `React Native views` (i.e. JS files).

In order to make the `Async` communication between them `Android JS` provide two modules `Back module` and `Front module`.

An example of sending and handling messages between the `back` and `front` processes:
```js
// In back process (main.js)
var back = require('androidjs').back;

back.on('Hello', function(msg){
    back.send('print', 'Hello ${msg}');
});
```
#### Webview Based App or HTML / CSS Based  
```html
// In front process (web pages)
<html>
    <head>
        // add androidjs.js to get the API's of `Android Js`.
        <script src = "./assets/ipc/androidjs.js" ></script>
    </head>
    <script>
        front.send('Hello', 'Hello Android jS');
        front.on('print', function(msg){
            console.log(msg);
        })
    </script>
</html>
```

#### React Native Based App
```js
// In react native views (JS files)
import {front, app} from 'androidjs';

front.send('Hello', 'Hello Android JS');
front.on('print', function(msg){
    console.log(msg);
}.bind(this));
```

### Back Module
Require `Android JS` in your `main.js` file and get the instance of `Back` module.

```js
var back = require('androidjs').back;
```

### Methods
The `back` module has the following method to listen for events:

#### `back.on(channel, listener)`
- `channel` String
- `listener` Function

Listens to `channel`, when a new message arrives `listener` would be called with `listener(args...)`.

#### `back.send(channel[, arg1][, arg2][, ...])`
- `channel` String
- `...args` any[]

Send a message to the front process asynchronously via `channel`, you can also send arbitrary arguments.

The front process handles it by listening for `channel` with `front` module.


### Front Module
##### `Add Android JS In Webview Based App or HTML / CSS Based`
Add `Android JS` in your `web page` get the instance of `Front` module.

```html
<html>
    <head>
        // add androidjs.js to get the API's of `Android Js`.
        <script src = "./assets/ipc/androidjs.js" ></script>
    </head>
</html>
```

##### `Add Android JS In React Native Based App`
Add `Android JS` in your `JS files to` get the instance of `Front` module.

```js
import {front, app} from 'androidjs';
```

### Methods
The `front` module has the following method to listen for events:

#### `front.on(channel, listener)`
- `channel` String
- `listener` Function

Listens to `channel`, when a new message arrives `listener` would be called with `listener(args...)`.

#### `front.send(channel[, arg1][, arg2][, ...])`
- `channel` String
- `...args` any[]

Send a message to the back process asynchronously via `channel`, you can also send arbitrary arguments.

The back process handles it by listening for `channel` with `back` module.