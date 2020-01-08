const scores = [59,62,38,77,86,12,98]
let sum = 0
scores.map((score)=> {
    sum += score
})

console.log(`合計：${sum} , 平均：${sum/scores.length}`)