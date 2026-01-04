class Logger {
  static info(message) {
    console.log(`ℹ️  ${message}`);
  }

  static error(message) {
    console.error(`❌ ${message}`);
  }
}

module.exports = Logger;
