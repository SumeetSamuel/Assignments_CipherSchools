function removeDups(arr){
    
    return arr.filter((value,index) => arr.indexOf(value) === index);
   // return [...new Set(arr)] // second way of doing using set
    
  }
  
  console.log(removeDups([1,0,1,0]));
  console.log(removeDups(["The","big","cat"]));
  console.log(removeDups(["John","Taylor","John"]));