function addUp(num){

    if(num>1 && num<1000)
    {
        var count=0;
        for(var i=1;i<=num;i++){
           count+=i;
        }
        return count;
    }
}

console.log(addUp(4));
console.log(addUp(13));
console.log(addUp(600));