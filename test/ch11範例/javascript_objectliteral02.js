let name = 'Mary'
let email = 'mary@gmail.com'

const Mary1 = {
    name: name,
    email: email,
    age: 18,
    isMarried: false,
    showInfo:function(){
        return `${this.name} has ${this.email} email address`
    }
}
console.log(Object.keys(Mary1))
console.log(Object.values(Mary1))