var back = require('androidjs').back;
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
// back.send('hello', 'harry');