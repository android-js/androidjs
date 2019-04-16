# Generating Project

`Note: In order to generate project make sure you already have androidjs-builder`

Android JS enables you to create android applications with pure JavaScript by providing a runtime with rich native (android) APIs. You could see it as a variant of the Node.js runtime that is focused on android applications instead of web servers.

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