const Observer = require("../core/Observer");
const Logger = require("../services/Logger");

class SmsSubscriber extends Observer {
  constructor(id, phone) {
    super();
    this.id = id;
    this.phone = phone;
  }

  async update({ channel, title }) {
    await this.simulateDelay();

    Logger.info(
      `📩 SMS → ${this.phone}: "${title}" uploaded`
    );
  }

  simulateDelay() {
    return new Promise(res => setTimeout(res, 700));
  }
}

module.exports = SmsSubscriber;
