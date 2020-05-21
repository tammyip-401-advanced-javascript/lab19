const io = require('socket.io-client');
const socket = io.connect('http://localhost:3001');

let flowerOrders = [];

// what should we do on startup
// start by getting all the orders we care about
socket.emit('subscribe', 'flower');
socket.emit('getAll', 'flower');

socket.on('delivered', (payload) => {
  console.log(`Flower: Thank you for delivering order ${payload.orderID}\n`);
  flowerOrders = payload;
});

setInterval(() => {
  if (flowerOrders.length > 0) socket.emit('received-flower-order', flowerOrders[0]);
}, 3000);