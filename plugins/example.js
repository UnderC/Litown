const Model = require('./model')

class Logger extends Model {
  constructor (...args) {
    super(...args)
    this.events = ['message', 'messageDelete']
  }

  onMessage (msg) {
    console.log(`${msg.member.nickname}님이 방금 메시지를 작성하셨네요!`)
  }

  onMessageDelete (msg) {
    console.log(`${msg.member.nickname}님이 방금 메시지를 삭제하셨네요!`)
  }
}

module.exports = Logger
