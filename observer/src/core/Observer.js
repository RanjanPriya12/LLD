class Observer {
  async update(payload) {
    throw new Error("update() method must be implemented");
  }
}

module.exports = Observer;
