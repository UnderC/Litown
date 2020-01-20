const Discord = require('discord.js')
const commands = require('../commands')
const config = require('../config.json')

class Client extends Discord.Client {
  constructor (config, ...args) {
    super(...args)
    this.config = config
    this.commands = []

    commands.forEach(RawCMD => {
      const command = new RawCMD(this)
      this.commands.push(command)
    })

    this.on('ready', this.onReady)
    this.on('message', this.onMessage)
  }

  onReady () {
    console.log('===== ready =====')
  }

  onMessage (msg) {
    if (!msg.content.startsWith(config.prefix)) return
    msg.args = msg.content.replace(config.prefix, '').split(' ')
    this.commands.forEach(command => {
      if (command.events.includes('message')) {
        if (!command.onlyWithCommand) {
          command.message(msg)
        } else {
          if (command.alias.includes(msg.args[0])) {
            command.message(msg)
          }
        }
      }
    })
  }
}

module.exports = Client
