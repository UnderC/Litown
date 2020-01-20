class CommandModel {
  constructor (client) {
    this.client = client
    this.alias = []
    this.name = ''
    this.perm = []
    this.OwnerOnly = false
    this.onlyWithCommand = true
  }

  run (msg) {}
}

module.exports = CommandModel
