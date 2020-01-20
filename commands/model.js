class CommandModel {
  constructor (client) {
    this.client = client
    this.alias = []
    this.name = ''
    this.perm = []
    this.events = []
    this.OwnerOnly = false
    this.onlyWithCommand = true
  }

  message (msg) {}
}

module.exports = CommandModel
