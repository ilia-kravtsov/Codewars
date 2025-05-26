/*
The purpose of this kata is to implement the undoRedo function.

This function takes an object and returns an object that has these actions to be performed on the object passed as a parameter:

set(key, value) Assigns the value to the key. If the key does not exist, creates it.

get(key) Returns the value associated to the key.

del(key) removes the key from the object.

undo() Undo the last operation (set or del) on the object. Throws an exception if there is no operation to undo.

redo() Redo the last undo operation (redo is only possible after an undo). Throws an exception if there is no operation to redo.

After set() or del() are called, there is nothing to redo.

All actions must affect to the object passed to undoRedo(object) function. So you can not work with a copy of the object.

Any set/del after an undo should disallow new redos.
*/

function undoRedo(object) {
  let history = [];
  let redoStack = [];

  return {
    set: function (key, value) {
      history.push({
        type: "set",
        key,
        oldValue: object[key],
        newValue: value,
      });
      object[key] = value;
      redoStack = [];
    },
    get: function (key) {
      return object[key];
    },
    del: function (key) {
      if (key in object) {
        history.push({ type: "del", key, oldValue: object[key] });
        delete object[key];
        redoStack = [];
      }
    },
    undo: function () {
      if (history.length === 0) {
        throw new Error("Nothing to undo");
      }
      const lastAction = history.pop();
      redoStack.push(lastAction);

      if (lastAction.type === "set") {
        if (lastAction.oldValue === undefined) {
          delete object[lastAction.key];
        } else {
          object[lastAction.key] = lastAction.oldValue;
        }
      } else if (lastAction.type === "del") {
        object[lastAction.key] = lastAction.oldValue;
      }
    },
    redo: function () {
      if (redoStack.length === 0) {
        throw new Error("Nothing to redo");
      }
      const action = redoStack.pop();
      history.push(action);

      if (action.type === "set") {
        object[action.key] = action.newValue;
      } else if (action.type === "del") {
        delete object[action.key];
      }
    },
  };
}
