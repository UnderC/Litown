const Objects = require('./objects')
const Commands = require('./commands')
const config = require('./config')
const client = new Objects.client(config)

Object.values(Commands).forEach(RawCMD => {
  const cmd = new RawCMD(client)
  cmd.alias.forEach((alia) => {
    client.commands.set(alia, cmd)
  })
})

client.on('ready', () => {
  console.log('===== ready =====')
})

client.on('message', (msg) => {
  if (!msg.content.startsWith(client.config.prefix)) return
  msg.args = msg.content.replace(client.config.prefix, '').split(' ')
  const cmd = client.commands.get(msg.args[0])
  if (cmd) cmd.run(msg)
})

client.login()
