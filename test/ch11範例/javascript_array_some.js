const scores = [59, 62, 38, 77, 86, 12, 98]
const result = scores.find((score) => score >= 60)
console.log(result)

if ((scores.find((score) => score > 100)) == undefined) {
    console.log('沒有成績在100分以上')
}

if(! scores.some((score)=>score > 100)){
    console.log('沒有成績在100分以上')
}
