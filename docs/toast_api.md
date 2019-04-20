# Toast API
`app.toast` is the instance of `Toast API`, which provide functions to `show` native toast.

A working example of `Toast API`
```js
app.toast.show("Hello Android JS", 1);
```

### Methods

#### `app.toast.show(text, duration)`
- `text` String
- `duration` Int
  - `0` for short
  - `1` for long

An example of above code:
```js
app.toast.show("Hello Android JS", 0);
```