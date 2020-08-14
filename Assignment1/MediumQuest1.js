function specialReverse(str, char){
    let  arr=[];
    arr= str.split(" ");

    for(var i=0 ;i< arr.length ; i++)
    {
        if(arr[i].substr(0,1) == char){
            let newarr = arr[i].split("");
            arr[i]=newarr.reverse().join("");
        }
    }
  return arr.join(" ");
   
      
}
console.log(specialReverse("word searches are super fun", "s"));
console.log(specialReverse("first man to walk on the moon", "m"));
console.log(specialReverse("peter piper picked pickled peppers", "p"));
