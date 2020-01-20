class PluginModel {
  constructor (client) {
    this.client = client
    this.perm = []
    this.events = []
    this.OwnerOnly = false
  }

  onMessage (msg) {}
}

module.exports = PluginModel
