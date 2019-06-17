const fs = require('fs');
const path = require('path');

json_file = path.join(__dirname, '..', '..', '..',  'package.json');

if(fs.existsSync(json_file)){
    console.log("package.json File Detected")
    let data = JSON.parse(fs.readFileSync(json_file));
    if(data['dependencies']){
        if(data['dependencies']['react-native']){
            console.log("React Native Project Detected");
            // fs.unlinkSync(path.join('lib', 'back.js'));
            console.log("Making Package To Compatible with React Native");
            fs.writeFileSync(path.join('lib', 'back.js'), '');
            fs.writeFileSync('index.js', '"use strict";\
                module.exports = {\
                    back: require("./lib/back"),\
                    front: require("./lib/front"),\
                    app: require("./lib/react_native/androidjs")\
                };\
                ')
            console.log("Done");
        }
    }
}