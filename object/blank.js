if (!Object.prototype.blank) {
  Object.defineProperty(Object.prototype, "blank", {
    get: function() {
      if (Object.keys(this).length === 0){
        return true;
      }
      else{
        return false;
      }
    }
  });
}
