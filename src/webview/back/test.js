// const app = require('http').createServer();
const server = require('http').createServer();
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log(`Client SocketID: ${socket.id}.`);
  socket.emit('sayHello', {Hello: 'world!'});
  socket.on('sayHello', (greeting) => {
    console.log(`Hello, ${greeting['Hello']}`);
  });
});

server.listen(3000);