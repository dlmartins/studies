const EventEmitter = require('events')

class MyEmitter extends EventEmitter {
    notifyUser(username) {
        if (username)
        this.emit('newUser', username)
    }
}

const notifier = new MyEmitter ()

notifier.on('newUser', (username) => {
    console.log(`Hello ${username}`)
})
notifier.on('newUser', (username) => {
    console.log(`Add new email to ${username}`)
})
notifier.on('newUser', (username) => {
    console.log(`Send welcome email to ${username}`)
})


notifier.notifyUser('Daniel')
