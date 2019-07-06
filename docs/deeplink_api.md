# DeepLink API
`app.deeplink` is the instance of `DeepLink API`, which provide functions to enable `DeepLink` to your app content. 

`NOTE : In order to enable Deep Link to your app, you have to do all the following configurations.`

## `First Update Your Package.JSON`
In order to enable `Deep Link` to your app, you'll have to define array of objects with following attributes in `package.json` file of your app
- You need to define `deep-link` attribute in `package.json` which is array of `objects` of `scheme` and `host`
- You can define as many `scheme` and `host` you want

- `scheme`
  - it is protocol on which you want to enable deep link your app
- `host`
  - it is particular host on which you want to deep link your app

## Example Configuration
```json
{
  "deep-link":[
        {
            "scheme" : "http",
            "host" : "android-js.github.io"
        },
        {
            "scheme" : "https",
            "host" : "android-js.github.io"
        }
  ]
}
```
whenever user click on `defined links or hosts`, your app will be `listed as suggestion` to `open` that `link in your app`
# Access Link In Your App
## Methods

#### `app.deeplink.getLink()`
Returns a `link` on which `user clicked` to `open` that in `your app`

`NOTE: returns link if available otherwise -1`  

An example of above code:
```js
// In views of your app

let link = app.deeplink.getLink();
if(link != '-1') {
    app.loadURL(link);
}
```

