if (!Array.prototype.last) {
  Object.defineProperty(Array.prototype, 'last', {
    value: function(num) {
      if(num){
         return this.splice(this.length - num, this.length);
      }
      else{
        return this.splice(this.length - 1, this.length);
      }
    } 
  });
}
