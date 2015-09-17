if (!Array.prototype.last) {
  Object.defineProperty(Array.prototype, 'last', {
    get: function() {
      var num = this.length - 1;
      return this[num];
    }
  });
}
