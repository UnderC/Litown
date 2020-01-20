class CommandModel {
  constructor (client, config) {
    if (!client || !config) throw new Error('인자가 부족합니다')

    this.client = client
    this.alias = config.alias
    this.name = config.name || config.codename
    this.perm = config.perm || config.permission
    this.reqOwn = config.reqOwn || config.reqown
  }

  run () {
    throw new Error('이 method를 overwrite 해주세요')
  }
}

module.exports = CommandModel
