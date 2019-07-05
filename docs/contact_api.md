# Contact API
`app.contact` is the instance of `Contact API`, which provide functions to access `Contacts` from your app. In order to use this `API`, you need to add these `permissions` to you `package.json` file.

```text
android.permission.READ_CONTACTS
android.permission.WRITE_CONTACTS
```

A working example of `Contact API`
```js
var contacts = app.contact.getAll();
console.log(contacts);
```

### Methods

#### `app.contact.getAll()`
Returns `Array of JSON Objects` with details of `all available contacts in user's phone`.

An example of above code:
```js
let contacts = app.contact.getAll();
contacts.forEach(function(contact){
    console.log(contact.name, contact.phone_number, contact.email);
})
```

#### `app.contact.add(name, number, email)`
- `name` String
  - `name` by which you want to add contact.
- `number` String
  - `number` which you want to add into contact.
- `email` String
  - `email` which you want to add into contact `(email is optional)`.

Add the given `contact details` into `user's phone`.

`NOTE: It returns a JSON Object, {error: true/false, msg: 'error msg'}  
if contact add successfully then error will be false otherwise true.`

An example of above code:
```js
let name = 'alex';
let number = '123457896'
let email = 'example@androidjs.com'
let status = app.contact.add(name, number, email);
if(!status.error){
    console.log('contact added to phone');
}else{
    console.log(status.error, status.msg);
}
```

#### `app.contact.getByName(name)`
- `name` String
  - `name` which you want to search.

`NOTE: returns JSON Object of uesr's details if record found otherwise error object`

Search `contact details` of given `name` .

An example of above code:
```js
let name = "alex"
let status = app.contact.getByName(name);
if(status.error == undefined){
    console.log(status.name, status.phone_number, status.email);
}else{
    console.log(status.error, status.msg);
}
```

#### `app.contact.getCount()`
Returns the `total number of contacts` saved in user's `phone`.

An example of above code:
```js
let count = app.contact.getCount();
console.log(count);
```