const John = {
    name: 'John',
    email: 'john@gmail.com',
    age: 18,
    isMarried: false
}

for(let property in John){
    console.log(`John.${property} is ${John[property]}`)
}