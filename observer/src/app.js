const YouTubeChannel = require("./channel/YouTubeChannel");
const EmailSubscriber = require("./notifications/EmailSubscriber");
const PushSubscriber = require("./notifications/PushSubscriber");
const SmsSubscriber = require("./notifications/SmsSubscriber");

// Create channel
const channel = new YouTubeChannel("Backend Mastery");

// Create subscribers
const emailUser = new EmailSubscriber("u1", "user@gmail.com");
const pushUser = new PushSubscriber("u2", "DEVICE_XYZ");
const smsUser = new SmsSubscriber("u3", "+91-9999999999");

// Subscribe all users
channel.subscribe(emailUser);
channel.subscribe(pushUser);
channel.subscribe(smsUser);

// Upload video (ALL subscribers get notified)
(async () => {
  await channel.uploadVideo("Observer Pattern in Node.js");

  // Unsubscribe one user
  channel.unsubscribe("u3");

  await channel.uploadVideo("Scalable Notification Systems");
})();
