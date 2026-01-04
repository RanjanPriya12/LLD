const Observer = require("../core/Observer");
const Logger = require("../services/Logger");

class EmailSubscriber extends Observer {
  constructor(id, email) {
    super();
    this.id = id;
    this.email = email;
  }

  async update({ channel, title }) {
    await this.simulateDelay();

    Logger.info(
      `📧 Email → ${this.email}: "${title}" uploaded on ${channel}`
    );
  }

  simulateDelay() {
    return new Promise(res => setTimeout(res, 500));
  }
}

module.exports = EmailSubscriber;
