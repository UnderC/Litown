const Model = require('./model')

class Ping extends Model {
  constructor (...args) {
    super(...args)
    this.alias = ['ping', 'pong', '핑', '퐁']
    this.name = 'ping'
    this.events = ['message']
  }

  message (msg) {
    msg.channel.send(`${this.client.ping}ms`)
  }
}

module.exports = Ping
