const Model = require('./model')

class Ping extends Model {
  constructor (...args) {
    super(...args)
    this.alias = ['ping', 'pong', '핑', '퐁']
    this.name = 'ping'
  }

  run (msg) {
    msg.channel.send(`${this.client.ping}ms`)
  }
}

module.exports = Ping
