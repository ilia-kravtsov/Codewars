function Event() {
  this.handlers = [];
  this.subscribe = function(handler) {
    this.handlers.push(handler);
  };
  
  this.unsubscribe = function(handler) {
    const index = this.handlers.indexOf(handler);
    if (index !== -1) {
      this.handlers.splice(index, 1);
    }
  };
  
  this.emit = function() {
    const args = Array.prototype.slice.call(arguments);
    
    for (let i = 0; i < this.handlers.length; i++) {
      this.handlers[i].apply(null, args);
    }
  };
}