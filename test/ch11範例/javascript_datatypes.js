
// value型別
console.log('3.14159 的資料型別是 ',typeof 3.14159)
console.log('"JavaScript" 的資料型別是 ',typeof "JavaScript")
console.log('true 的資料型別是 ', typeof true)
console.log('undefined 的資料型別是 ', typeof undefined)
console.log('null 的資料型別是 ', typeof null)

// reference型別
console.log('{name:"John",age=12} 的資料型別是 ', typeof { name: "John", age:12})
console.log('[2,4,6,8,10] 的資料型別是 ', typeof [2, 4, 6, 8, 10])

// loosely typed
let pi = 3.14159
console.log('pi = ',pi)

pi = 'JavaScript'
console.log('pi = ',pi)
