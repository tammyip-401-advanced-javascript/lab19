const io = require('socket.io-client');
const socket = io.connect('http://localhost:3001');

let candyOrders = [];

// what should we do on startup
// start by getting all the orders we care about
socket.emit('subscribe', 'candy');
socket.emit('getAll', 'candy');

socket.on('delivered', (payload) => {
  console.log(`Candy: Thank you for delivering order ${payload.orderID}\n`);
  candyOrders = payload;
});

setInterval(() => {
  if (candyOrders.length > 0) socket.emit('received-candy-order', candyOrders[0]);
}, 5000);