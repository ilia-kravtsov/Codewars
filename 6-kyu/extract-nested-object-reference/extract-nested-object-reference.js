Object.prototype.hash = function(string) {
  return string.split('.').reduce((acc, key) => {
    return acc && acc[key];
  }, this);
};
​