const fs = require('fs');

fs.readFile("./dist/front/front.js", function(err, frontFile){
    if(err) throw err;
    fs.readFile("./dist/androidjs/androidjs.js", function(err, androidjsFile){
        if(err) throw err;
        fs.writeFile("./dist/androidjs/androidjs.js", frontFile + androidjsFile, function(err){
            if(err) throw err;
            console.log("building done");
        })
    })
})