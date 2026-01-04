class Subject {
  subscribe(observer) {
    throw new Error("subscribe() not implemented");
  }

  unsubscribe(observerId) {
    throw new Error("unsubscribe() not implemented");
  }

  notify(payload) {
    throw new Error("notify() not implemented");
  }
}

module.exports = Subject;
