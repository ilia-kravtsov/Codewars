/*
Implement a Least Recently Used (LRU) cache. An LRU cache is a key-value store that contains a set capacity for the number of elements it holds, which is stored in a property. The size should also be a property. When trying to add a new key-value pair, if cache.size == cache.capacity, the Least Recently Used key is removed.

Hint: You will will need to use the Object.defineProperty facility

Example Behavior:

var store = new LRUCache(3 // Size of the cache 
                        , {a: 1}); // Optional initial values for cache
store.size; // should be 1
store.capacity; // should be 3
store.a; // should be 1;
store.cache('b', 2)['b']; // should be 2
store.a = 5;
store.a; // should be 5
store.cache('c', 3).cache('d', 4).b; // should be undefined, since 'b' was removed because it was the least recently used
store.delete('d');
store.d ; // should be undefined, since 'd' was deleted
store.size ; // should be 2
store.cache('c', 4); 
store.c; // should be 4
store.capacity = 1; // should resize the store to have just one element
Object.keys(store); // should be ['c']
Full API Specification:

The user should be able to make a new cache object with new LRUCache(n), where n is the cache's (initial) capacity
The constructor should be able to take a javascript object as an optional second parameter, which will be copied and put into the cache
Items can be added to the cache using a method called cache
cache takes two arguments, a key and a value
The new key should be added as a property to the cache
The new property should be enumerable
It should be possible to reassign the new property
Caching an already existing property should update its value
The cache method should return the cache itself, so the method can be chained (ie, the builder pattern)
The cache method itself should not be enumerable, writable, nor configurable
Items can be deleted from the cache using a method called delete
This method should not be enumerable, writable, nor configurable
This method should have the same return values as the delete builtin
The number of elements stored in the cache should be accessible via the size property
This property should not be enumerable, writable nor configurable
The capacity should be accessible by via the capacity property
Making the capacity smaller should trigger the cache to delete the least recently used items until the size of the cache is smaller than or equal to the capacity
This property should not be enumerable
The size property should never acceed the capacity property of a cache
An item in the cache is used every time its value is read or assigned, or it is cached using the cache method
*/

function LRUCache(capacity, init) {
  if (!(this instanceof LRUCache)) {
    return new LRUCache(capacity, init);
  }
  var _data = {};
  var _order = [];
  var self = this;

  function touch(key) {
    var idx = _order.indexOf(key);
    if (idx !== -1) {
      _order.splice(idx, 1);
    }
    _order.push(key);
  }

  function defineCacheProperty(key) {
    Object.defineProperty(self, key, {
      enumerable: true,
      configurable: true,
      get: function () {
        if (key in _data) {
          touch(key);
        }
        return _data[key];
      },
      set: function (val) {
        _data[key] = val;
        touch(key);
      },
    });
  }

  Object.defineProperty(this, "cache", {
    value: function (key, value) {
      if (typeof key !== "string") key = String(key);
      if (!(key in _data)) {
        if (_order.length >= self.capacity) {
          var evictKey = _order.shift();
          delete _data[evictKey];
          delete self[evictKey];
        }
        defineCacheProperty(key);
      }
      _data[key] = value;
      touch(key);
      return self;
    },
    enumerable: false,
    writable: false,
    configurable: false,
  });

  Object.defineProperty(this, "delete", {
    value: function (key) {
      if (typeof key !== "string") key = String(key);
      var reserved = ["cache", "delete", "size", "capacity"];
      if (reserved.includes(key)) return false;
      if (!(key in _data)) return true;
      var idx = _order.indexOf(key);
      if (idx !== -1) {
        _order.splice(idx, 1);
      }
      delete _data[key];
      return delete self[key];
    },
    enumerable: false,
    writable: false,
    configurable: false,
  });

  Object.defineProperty(this, "size", {
    get: function () {
      return _order.length;
    },
    enumerable: false,
    configurable: false,
  });

  var _capacity = capacity;
  Object.defineProperty(this, "capacity", {
    get: function () {
      return _capacity;
    },
    set: function (newCap) {
      newCap = Number(newCap);
      if (isNaN(newCap) || newCap < 0) return;
      _capacity = newCap;
      while (_order.length > _capacity) {
        var evictKey = _order.shift();
        delete _data[evictKey];
        delete self[evictKey];
      }
    },
    enumerable: false,
    configurable: false,
  });

  if (init && typeof init === "object") {
    for (var key in init) {
      if (Object.prototype.hasOwnProperty.call(init, key)) {
        this.cache(key, init[key]);
      }
    }
  }
}
