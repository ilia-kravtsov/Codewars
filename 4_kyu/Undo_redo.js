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
