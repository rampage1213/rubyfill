if (!Object.prototype.blank) {
  Object.defineProperty(Object.prototype, "blank", {
    get: function() {
      var key = 0;
      if (key < Object.keys(this).length){
        return true;
      }
      else{
        return false;
      }
    }
  });
}
