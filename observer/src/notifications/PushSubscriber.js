const Observer = require("../core/Observer");
const Logger = require("../services/Logger");

class PushSubscriber extends Observer {
  constructor(id, deviceId) {
    super();
    this.id = id;
    this.deviceId = deviceId;
  }

  async update({ channel, title }) {
    await this.simulateDelay();

    Logger.info(
      `📲 Push → Device ${this.deviceId}: "${title}" from ${channel}`
    );
  }

  simulateDelay() {
    return new Promise(res => setTimeout(res, 300));
  }
}

module.exports = PushSubscriber;
