if (!Array.prototype.take) {
  Object.defineProperty(Array.prototype, "take", {
    value: function(num){
      var clone = this.slice(0);
      var returnedArray = [];

      for(var n = 0; n < num; n++){
        returnedArray.push(clone[n]);
      }
      return returnedArray;
    }
  });
}
