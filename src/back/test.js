const back = require("./back");

back.on("Hello", function(){
    console.log("hellow rodl");
    back.send('hello');
})