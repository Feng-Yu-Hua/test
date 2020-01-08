const [x, ...y] = [1, 2, 3]
const { name, email, ...rest } = { 
    name: 'John', 
    email: 'john@gmail.com', 
    age: 18, 
    isMarried: false 
}

console.log(x,y)
console.log(name,email,rest)
