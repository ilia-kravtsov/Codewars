/*
This excercise is a more sophisticated version of Simple Events kata.

Your task is to implement an Event constructor function for creating event objects

var event = new Event();
which comply to the following:

an event object should have .subscribe() and .unsubscribe() methods to add and remove handlers

.subscribe() and .unsubscribe() should be able take an arbitrary number of arguments and tolerate invalid arguments (not functions, or for unsubscribe, functions which are not subscribed) by simply skipping them

multiple subscription of the same handler is allowed, and in this case unsubscription removes the last subscription of the same handler

an event object should have an .emit() method which must invoke all the handlers with the arguments provided

.emit() should use its own invocation context as handers' invocation context

the order of handlers invocation must match the order of subscription

handler functions can subscribe and unsubscribe handlers, but the changes should only apply to the next emit call - the handlers for an ongoing emit call should not be affected

subscribe, unsubscribe and emit are the only public properties that are allowed on event objects (apart from Object.prototype methods)

Check the test fixture for usage example
*/

function Event() {
  let handlers = [];

  this.subscribe = function (...fns) {
    for (const fn of fns) {
      if (typeof fn === "function") {
        handlers.push(fn);
      }
    }
  };

  this.unsubscribe = function (...fns) {
    for (const fn of fns) {
      if (typeof fn !== "function") continue;
      for (let i = handlers.length - 1; i >= 0; i--) {
        if (handlers[i] === fn) {
          handlers.splice(i, 1);
          break;
        }
      }
    }
  };

  this.emit = function (...args) {
    const currentHandlers = handlers.slice();
    for (const fn of currentHandlers) {
      fn.apply(this, args);
    }
  };
}
