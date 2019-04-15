# Getting Started
In order to create your first project, first make a directory
```sh
mkdir myfirstapp
cd myfirstapp
npm init
```
you will get the following 

```text
 myfirstapp
    |__ package.json
```

create directory named `views` and make `index.html` inside it.

```sh
mkdir views
touch index.html
```

Now you will get the following
```text
 myfirstapp
    |__views
    |     |__index.html
    |
    |__ package.json
```
- `views` is a directory to store all the views of your app
- `index.html` is the first view, render's initially by app (it is must to create `index.html` inside the view folder)
- add `androidjs.js` file in all of your views to access the API's of `Android JS` (download [here](https://github.com/android-js/androidjs/blob/master/lib/androidjs.js))

create `main.js` file inside the parent directory

```sh
touch main.js
```

Now you will get something like this

```text
 myfirstapp
    |__views
    |     |__index.html
    |__ main.js
    |__ package.json
```
- `main.js` is the main process of your android app, which will provide the runtime environment for `Node Js`