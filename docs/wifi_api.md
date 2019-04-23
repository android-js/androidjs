# Wi-Fi API
`app.wifi` is the instance of `Wi-Fi API`, which provide functions to access `Wi-Fi` from your app. In order to use this `API`, you need to add these `permissions` to you `package.json` file.

```text
android.permission.ACCESS_WIFI_STATE
android.permission.CHANGE_WIFI_STATE
```

A working example of `Wi-Fi API`
```js
new Promise(function(resolve, reject){
    app.wifi.enable();
    setTimeout(resolve, 5000);
}).then(function(){
    available_networks = app.wifi.getScanResult();
    available_networks.forEach(function(network){
        if(network.SSID == "test"){
            app.wifi.connect(network.SSID, "");
        }
    });
});
```

### Methods

#### `app.wifi.enable()`
Enables the `Wi-Fi` of `android device`.

An example of above code:
```js
app.wifi.enable();
```

#### `app.wifi.disable()`
Disables the `Wi-Fi` of `android device`, if already enable.

An example of above code:
```js
app.wifi.disable();
```

#### `app.wifi.connect(SSID, password)`
- `SSID` String
  - `SSID` of the network which you want to connect.
- `password` String
  - `password` of the network which you want to connect.

`NOTE: If you want to connect with open network then provide password = ""`

Connects `Wi-Fi` to the provided `SSID` network.

An example of above code:
```js
app.wifi.connect("test", "");
```

#### `app.wifi.disconnect()`
Disconnects the `Wi-Fi` to currenty connected network.

An example of above code:
```js
app.wifi.disconnect();
```

#### `app.wifi.getScanResults()`
Returns `Array of JSON Objects` with details of `currently available wifi networks`.

An example of above code:
```js
let networks = app.wifi.getScanResults();
networks.forEach(function(network){
    console.log(network.SSID);
})
```

#### `app.wifi.getState()`
Returns the `current state` of `Wi-Fi`.

An example of above code:
```js
console.log(app.wifi.getState());
```

#### `app.wifi.isEnabled()`
Returns `true` if `Wi-Fi` is `enable` otherwise `false`.

An example of above code:
```js
console.log(app.wifi.isEnabled());
```
