const io = require('socket.io')(3001);

let queue = {
    flower: [],
    candy: [],
};

io.on('connection', (socket) => {
    console.log('connected to', socket.id);

    socket.on('delivered', (payload) => {
        if (payload.vendor === 'flower') {
            queue.flower.push(payload.orderID);
            io.to('flower').emit('delivered', queue.flower);
        } else if (payload.vendor === 'candy') {
            queue.candy.push(payload.orderID);
            io.to('candy').emit('delivered', queue.candy);
        }
    });

    //get all messages in the queue it’s looking for
    socket.on('getAll', (payload) => {
        if (payload === 'flower') {
            socket.emit('delivered', queue.flower);
        } else if (payload === 'candy') {
            socket.emit('delivered', queue.candy);
        }
    });

    //put socket in its own room
    socket.on('subscribe', (payload) => {
        if (payload === 'flower') {
            socket.join('flower');
        } else if (payload === 'candy') {
            socket.join('candy');
        }
    });

    // figure out is this from flower shop or candy shop
    socket.on('received-flower-order', (payload) => {
        // delete the item from the queue
        queue.chef.shift();
        io.to('flower').emit('delivered', queue.flower);
    });

    socket.on('received-candy-order', (payload) => {
        // delete the item from the queue
        queue.bar.shift();
        io.to('candy').emit('delivered', queue.candy);
    });
});