# App
App is an instance of `app` module, which provide various functions to interact with app

### Methods

#### `app.getPath(name)`
- `name` String

Returns `String` - A path to a special directory or file associated with name. On failure returns `-1`

You can request the following paths by the name:
- `root` root directory (i.e. `/system`)
- `cache` cache directory (i.e. `/cache`)
- `data` system's data directory (i.e. `/data`)
- `storage` internal storage (i.e. `/storage/emulated/0`)
- `alarms` storage Alarms directory (i.e. `/storage/emulated/0/Alarms`)
- `dcim` storage DCIM directory (i.e. `/storage/emulated/0/DCIM`)
- `downloads` storage Download directory (i.e. `/storage/emulated/0/Download`)
- `movies` storage Movies directory (i.e. `/storage/emulated/0/Movies`)
- `music` storage Music directory (i.e. `/storage/emulated/0/Music`)
- `notifications` storage Notifications directory (i.e. `/storage/emulated/0/Notifications`)
- `pictures` storage Pictures directory (i.e. `/storage/emulated/0/Pictures`)
- `podcasts` storage Podcasts directory (i.e. `/storage/emulated/0/Podcasts`)
- `ringtones` storage Rongtones directory (i.e. `/storage/emulated/0/Ringtones`)
- `appData` application data directory (i.e. `/data/data/package/files`)
- `userData` application user directory (i.e. `/storage/sdcard0/Android/data/package/files`)

An example of above code:
```js
let path = app.getPath('userData');
console.log(path);
```

#### `app.loadURL(url)`
- `url` URL

Loads the `url` in the `android webview`, the `url` must contain the protocol prefix, e.g. the `http://` or `file://`.

An example of above code:
```js
app.loadURL('https://google.com');
```

#### `app.reload()`

Reloads the `android webview`.

An example of above code:
```js
app.reload();
```
