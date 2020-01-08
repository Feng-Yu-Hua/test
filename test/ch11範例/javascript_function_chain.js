const scores = [59,62,38,77,86,12,98]
let sum = 0

let result = scores
    .filter((score)=>score>=60)
    .reduce((sum, score) => sum + score)
    
console.log(result / scores.filter((score) => score >= 60).length)


