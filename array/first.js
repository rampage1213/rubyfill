if (!Array.prototype.first) {
  Object.defineProperty(Array.prototype, 'first', {
    get: function() {
      return this[0];
    }
  });
}
