const Subject = require("../core/Subject");
const Logger = require("../services/Logger");

class YouTubeChannel extends Subject {
  constructor(channelName) {
    super();
    this.channelName = channelName;
    this.subscribers = new Map();
  }

  subscribe(observer) {
    this.subscribers.set(observer.id, observer);
    Logger.info(`Subscriber ${observer.id} subscribed`);
  }

  unsubscribe(observerId) {
    this.subscribers.delete(observerId);
    Logger.info(`Subscriber ${observerId} unsubscribed`);
  }

  async uploadVideo(videoTitle) {
    Logger.info(`📹 ${this.channelName} uploaded "${videoTitle}"`);

    const payload = {
      channel: this.channelName,
      title: videoTitle,
      uploadedAt: new Date()
    };

    await this.notify(payload);
  }

  async notify(payload) {
    const promises = [];

    for (const subscriber of this.subscribers.values()) {
      promises.push(
        subscriber.update(payload).catch(err => {
          Logger.error(
            `Subscriber ${subscriber.id} failed: ${err.message}`
          );
        })
      );
    }

    await Promise.all(promises);
    Logger.info("✅ All subscribers notified\n");
  }
}

module.exports = YouTubeChannel;
