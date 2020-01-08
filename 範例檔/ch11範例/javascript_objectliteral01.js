let name = 'Mary'
let email = 'mary@gmail.com'

const Mary1 = {
    name: name,
    email: email,
    age: 18,
    isMarried: false,
    showInfo: function () {
        return `${this.name} has ${this.email} email address`
    }
}
console.log(Mary1.showInfo())

const Mary2 = {
    name,
    email,
    age: 18,
    shwoInfo() {
        return `${this.name} has ${this.email} email address`
    }
}
console.log(Mary2.shwoInfo())