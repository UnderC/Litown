const Client = require('./objects/client')
const config = require('./config')
const client = new Client(config)

client.login(config.token)
