const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const io = require('socket.io-client');
const socket = io.connect('http://localhost:3001');

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.get('/', (req, res, next) => {
  res.status(200);
  res.send('Homepage');
});

// create a route for a client ('customer') to
// write an order

app.post('/delivery/:vendor/:orderID', (req, res, next) => {
  // console.log('order', req.params.vendor, req.params.orderID);
  let order = {
    vendor: req.params.vendor,
    orderID: req.params.orderID,
  };

  if (!(order.vendor === 'flower' || order.vendor === 'candy')) {
    res.status(400);
    res.send('Incorrect order type');
  } else {
    console.log('delivery', order);
    socket.emit('delivered', order);
    res.status(200);
    res.send('Sent order to queue');
  }
  // i want to send this order to the queue
  // when the queue gets it, return a response
});

app.listen(3000, () => {
  console.log('App is up and running on port 3000');
});
