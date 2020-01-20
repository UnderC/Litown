const Model = require('./model')
const config = {
  alias: ['ping', 'pong', '핑', '퐁'],
  name: 'ping'
}

class Ping extends Model {
  constructor (client) {
    super(client, config)
  }

  run (msg) {
    msg.channel.send(`${this.client.ping}ms`)
  }
}

module.exports = Ping
