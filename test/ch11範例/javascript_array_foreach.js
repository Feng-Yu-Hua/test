const scores = [59,62,38,77,86,12,98]
const result = []
scores.forEach((score)=>{
    if(score >= 60){
        result.push(score)
    }
})

console.log(result)