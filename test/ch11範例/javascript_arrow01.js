
let pi = 3.14159
let radius = 10
const area = (p, r) => p * r * r
let result = `
    圓週率pi為 ${pi} 而半徑為 ${radius} 時，
    圓週長是 ${2 * pi * radius}
    圓面積是 ${ area(pi,radius) }
`

console.log(result)