function numInStr(arrStr){
    let newArr=[];
  for(var i=0;i< arrStr.length;i++)
  {
      var tempArr=arrStr[i].split("");

      for(var j=0; j< tempArr.length ;j++)
      {
          if(tempArr[j] >= "0" && tempArr[j] <= "9"){
                 newArr.push(tempArr.join("")); 
                 break;  
          }
      }
  }
  return newArr; 

}
console.log(numInStr(["1a","a","2b","b"]));
console.log(numInStr(["abc","abc10"]));
console.log(numInStr(["abc","ab10c","a10bc","bcd"]));
console.log(numInStr(["this is a test","test1"]));
