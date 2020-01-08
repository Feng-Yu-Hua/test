export var bookname = 'Vue.js實戰應用'
export var author = 'John'
export var email = 'john@gmail.com'
export var published_year = 2019

export function showInfo(){
    return `${bookname} 一書的作者是 ${author}，該書於 ${published_year - 1911} 年發行，作者的連絡信箱為 ${email}`
}