if (!Array.prototype.last) {
  Object.defineProperty(Array.prototype, 'last', {
    get: function() {
      return this.splice(-1, 1);
    }
  });
}
