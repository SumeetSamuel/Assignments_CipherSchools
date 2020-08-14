function testJackpot(arr){

    
    for(var i=0;i<arr.length-1;i++)
    {
        if(arr[i]!=arr[i+1])
        {
            return false;
        }
    }
    return true;
}

console.log(testJackpot(["@","@","@","@"]));
console.log(testJackpot(["abc","abc","abc","abc"]));
console.log(testJackpot(["SS","SS","SS","SS"]));
console.log(testJackpot(["&&","&","&&&","&&&&"]));
console.log(testJackpot(["SS","SS","SS","Ss"]));