function gcd(first, second){
    let max = first;
    if(second > first){
        max = second;
    }
    for(let i = max; i > 0 ; i--){
        if(first % i === 0 && second % i === 0){
            return i;
        }
    }
    return 1;
}

console.log(gcd(20,40));