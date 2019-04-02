var back = require('../lib/back.js').back;
// var app = require('./index.js').app;
// console.log(back);



back.on('hello', function(event){
    console.log('hello');
})

back.on('show-details', function(data){
    console.log(data);
})
// back.send('hello');
back.on('get', function(data){
    return 'hello get';
})

back.on('get-data', function(data){
    console.log(data);
    data.age = 15;
    return data;
})
// console.log(app.getPath());
setInterval(function(){
    back.send('hello', 'harry');
}, 5000);
// while(true){
//     back.send('hello', 'harry');
// }