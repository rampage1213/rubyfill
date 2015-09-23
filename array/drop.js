if (!Array.prototype.drop) {
  Object.defineProperty(Array.prototype, "drop", {
    value: function(num){
      var clone = this.slice(0);
      var returnedArray = [];

      for(var n = num - 1; n < clone.length; n++){
        returnedArray.push(clone[n]);
      }
      return returnedArray;
    }
  });
}
