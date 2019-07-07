# Configuring App

`NOTE: All these configurations are mandatory`

#### `Change the name of your app`
In order to change the name of your app, you'll have to define `app-name` attribute in `package.json` file of your app

```json
{
  "name": "myfirstapp",
  "app-name" : "My First App",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

#### `Change the package name of your app`
In order to change the **package name** of your app, you'll have to define `package-name` attribute in `package.json` file of your app

```json
{
  "name": "myfirstapp",
  "app-name" : "My First App",
  "package-name": "myapp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

#### `Change the icon of your app`
In order to change the **icon** of your app, you'll have to define `icon` attribute in `package.json` file of your app

```json
{
  "name": "myfirstapp",
  "app-name" : "My First App",
  "package-name": "myapp",
  "icon":"./assets/icon/icon.png",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

#### `Adding permissions to your android app`
In order to add the android permissions, you will have to define an array of `permissions` attribute in `package.json` file of your app

```json
{
  "name": "myfirstapp",
  "app-name" : "My First App",
  "package-name": "myapp",
  "permission": ["android.permission.INTERNET", "android.permission.SEND_SMS"],
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

you can find the permissions over android official [documentation](https://developer.android.com/guide/topics/permissions/overview)

#### `Adding output directory`
In order to add the output directory, you will have to define `dist-path` attribute in `package.json` file of your app

```json
{
  "name": "myfirstapp",
  "app-name" : "My First App",
  "package-name": "myapp",
  "permission": ["android.permission.INTERNET", "android.permission.SEND_SMS"],
  "dist-path": "./dist",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

#### `Define Project Type`
In order to define project, you will have to define `project-type` attribute in `package.json` file of your app

- `webview`
  - if you are building `webview` based app or 'HTML / CSS' based
- `react-native`
  - if you are building `react native` based app

```json
{
  "name": "myfirstapp",
  "app-name" : "My First App",
  "package-name": "myapp",
  "permission": ["android.permission.INTERNET", "android.permission.SEND_SMS"],
  "dist-path": "./dist",
  "project-type":"webview",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```
