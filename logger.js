const fs = require('fs')
const os = require('os')

const EventEmitter = require('events')

class Logger extends EventEmitter{
    log(message){
        this.emit('message',{message})
    }
}

const logger = new Logger()