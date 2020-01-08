// 定義 Author 類別
var Author = function () {
    this.author = 'John';
    this.booknName = 'Vue實戰應用';
    this.published_year = 2019;
};

Author.prototype.setAuthor = function (author) {
    this.author = author;
    return this;
};

Author.prototype.setBookName = function (bookName) {
    this.bookName = bookName
    return this;
};

Author.prototype.setPublishedYear = function (year) {
    this.published_year = year;
    return this;
};

Author.prototype.launch = function () {
    console.log(`作者 ${this.author} 在 ${this.published_year} 發表的新書 ${this.bookName} 已經上架囉！`)
}

let tom = new Author()
    .setAuthor('Tom')
    .setBookName('JavaScript實戰')
    .setPublishedYear(2019)
    .launch()