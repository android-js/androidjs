# Hotspot API
`app.hotspot` is the instance of `Hotspot API`, which provide functions to access `Hotspot` from your app. In order to use this `API`, you need to add these `permissions` to you `package.json` file.

```text
android.permission.ACCESS_WIFI_STATE
android.permission.CHANGE_WIFI_STATE
```

A working example of `Hotspot API`
```js
app.hotspot.enable("hello");
console.log(app.hotspot.isEnabled());
```

### Methods

#### `app.hotspot.enable(ssid)`
- `ssid` String
  - `ssid` name of the network, you want to create.

Enables the `Hotspot` of `android device`.

An example of above code:
```js
app.hotspot.enable("hello");
```

#### `app.hotspot.disable()`
Disables the `Hotspot` of `android device`, if already enable.

An example of above code:
```js
app.hotspot.disable();
```

#### `app.hotspot.isEnabled()`
Returns `true` if `Hotspot` is `enable` otherwise `false`.

An example of above code:
```js
console.log(app.hotspot.isEnabled());
```
