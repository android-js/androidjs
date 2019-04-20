# Notification API
`app.notification` is the instance of `Notification API`, which provide functions to `initialise notification` and `show them` when you want.

There are two kind of `notifications`:
- `Single Line Notification`
- `Multiline Notification`

A working example of `Notification API`
```js
app.notification.init("Update", "1.2.5 is available");
app.notification.initBig("Update", ["there are lot's of changes", "in this version", "would you like to install"]);
app.notification.show(2);
```

### Methods

#### `app.notification.init(title, msg)`
- `title` String
- `msg` String

you need to provide `title` and `msg` to initialise your notification.

An example of above code:
```js
app.notification.init("Update", "1.2.5 is available");
```

#### `app.notification.initBig(title, msg)`
- `title` String
- `msg` Array of Strings

this is to initialise the `expended view` of your `notification`, for this you need to provide `title` and `an array of strings` (this function is optional).
`NOTE: MAXIMUM SIZE OF ARRAY IS 6`

An example of above code:
```js
app.notification.init("update", "1.2.5 update available");
app.notification.initBig("Update", ["there are lot's of changes", "in this version", "would you like to install"]);
```

#### `app.notification.show(id)`
- `id` Int

This function is to `show` your already initialised notification.

An example of above code:
```js
app.notification.show(1);
```
