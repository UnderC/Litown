const Discord = require('discord.js')
const commands = require('../commands')
const config = require('../config.json')
const plugins = require('../plugins')

class Client extends Discord.Client {
  constructor (config, ...args) {
    super(...args)
    this.config = config
    this.commands = new Map()
    this.plugins = []

    commands.forEach(RawCMD => {
      const command = new RawCMD(this)
      command.alias.forEach(alia => {
        this.commands.set(alia, command)
      })
    })

    plugins.forEach(RawPlugin => {
      const plugin = new RawPlugin(this)
      this.plugins.push(plugin)
    })

    this.on('ready', this.onReady)
    this.on('message', this.onMessage)
  }

  onReady () {
    console.log('===== ready =====')
  }

  onMessage (msg) {
    this.pluginHandler('message', msg)
    if (!msg.content.startsWith(config.prefix)) return
    msg.args = msg.content.replace(config.prefix, '').split(' ')
    const command = this.commands.get(msg.args[0])
    if (command) command.run(msg)
  }

  pluginHandler (eventName, msg) {
    this.plugins.forEach(plugin => {
      if (!plugin.events.includes(eventName)) return
      const methodName = `on${eventName.slice(0, 1).toUpperCase()}${eventName.substr(1)}`
      plugin[methodName](msg)
    })
  }
}

module.exports = Client
