function Bus() {
  var events = {};
​
  this.subscribe = function (name, callback) {
    if (!events[name]) {
      events[name] = [];
    }
    events[name].push(callback);
  };
​
  this.unsubscribe = function (name, callback) {
    var listeners = events[name];
    if (!listeners) return;
​
    if (!callback) {
      delete events[name];
      return;
    }
​
    var filtered = [];
    for (var i = 0; i < listeners.length; i++) {
      if (listeners[i] !== callback) {
        filtered.push(listeners[i]);
      }
    }
​
    if (filtered.length > 0) {
      events[name] = filtered;
    } else {
      delete events[name];
    }
  };
​
  this.emit = function (name) {
    var listeners = events[name];
    if (!listeners) return;
​
    var args = Array.prototype.slice.call(arguments, 1);
​
    listeners = listeners.slice();
​
    for (var i = 0; i < listeners.length; i++) {
      listeners[i].apply(null, args);
    }
  };
}