const back = require("./back").init();

// setInterval(() => {
//   back.send('hello');
// }, (1000));

back.on("Hello", function(msg){
  console.log(msg);
})