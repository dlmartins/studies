const EventEmitter = require('events')

class MyEmitter extends EventEmitter {
    notifyNewOrder(order) {
        if (order)
        this.emit('newOrder', order)
        this.emit('print', order)
    }
}

const notifier = new MyEmitter ()

notifier.on('newOrder', (order) => {
    console.log(`New order: ${order}`)
})
notifier.on('print', (order) => {
    console.log(`Printing ${order}`)
})

notifier.notifyNewOrder('Order number: 123, Product: T-Shirt')