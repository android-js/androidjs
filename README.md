<img src = "https://avatars3.githubusercontent.com/u/48679363" width = "150px">

# Android JS
[Android JS](https://android-js.github.io) framework lets you write android applications
using JavaScript, HTML and CSS. It is based on [Node.js](https://nodejs.org/).
It allows you to write fully featured android application in node js and provide you environment to use any `npm` package in your android app (i.e. SocketIO, fs, etc..)

## Installation

To install Android JS binaries, use [`npm`](https://docs.npmjs.com/).

```sh
npm install androidjs
```

Install Android JS project [generator and builder](https://www.npmjs.com/package/androidjs-builder)
```sh
npm install -g androidjs-builder
```

## Getting started

```sh
mkdir myfirstapp
cd myfirstapp
androidjs g
npm install
```
it will generate a sample project inside `myfirstapp`
```text
 myfirstapp
    |__ assets
    |       |__ ipc, css, js
    |
    |__ views
    |       |__ index.html
    |
    |__ main.js
    |__ package.json
```
- `main.js` is the main file or we can say it is back process of your app which execute all the code written in node, so you have to write all the node js code inside `main.js`
- `index.html` is the first view which is render by app initially
- `package.json` to keep track of all your node packages
- `assets` to store all assets of your app

### Build your app

```sh
cd myfirstapp
androidjs b
```
it will generate apk file inside `dist` folder

if this `build` command `fails` or generated any error, try to build with `force` command

```sh
androidjs b -f
```

## Quick start

clone and run the
[android-js/sample-app](https://github.com/android-js/sample-app)
repository to see a minimal Android JS app in action:

```sh
git clone https://github.com/android-js/sample-app
cd chat-app
npm install
androidjs b -f
```
it will generate an apk inside dist folder.

## Resources for learning Android JS

- [android-js.github.io/androidjs/](https://android-js.github.io/androidjs/) - all of Android JS's documentation
- [android-js/androidjs/sample-app](https://github.com/android-js/sample-app) - sample starter apps created by the community

## License

[MIT](https://github.com/android-js/androidjs/blob/master/LICENSE)

When using the Android JS or other GitHub logos, be sure to follow the [GitHub logo guidelines](https://github.com/logos).
