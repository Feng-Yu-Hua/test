function NumbersSumUp(...numbers){
    let sum = 0
    for(let i=0;i<numbers.length;i++){
        sum += numbers[i]
    }
    return sum
}

console.log(NumbersSumUp(1))
console.log(NumbersSumUp(1,3,5,7,9))
console.log(NumbersSumUp(2,4,6,8,10))