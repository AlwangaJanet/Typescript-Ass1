function fibonnaci(x:number){
    if(x<= 1){
        return x
    } else{
        return fibonnaci(x-1) + fibonnaci(x-2)
    }
}
console.log(fibonnaci(3))