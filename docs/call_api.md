# Call API
`app.call` is the instance of `Call API`, which provide function to `make native calls` from your app.
to use this `API` you need to this permission in your `package.json` file

```text
android.permission.CALL_PHONE
```

A working example of `Call API`
```js
app.call.makeCall("123457890");
```

### Methods

#### `app.call.makeCall(number)`
- `number` String

An example of above code:
```js
app.call.makeCall("1234567895")
```