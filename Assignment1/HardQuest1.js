function realType(value){
    var toString = Object.prototype.toString.call(value); 
    return toString.replace("[object","").replace("]","");
  
}

console.log(realType(1));
console.log(realType("a"));
console.log(realType(true));
console.log(realType([]));
console.log(realType(null));