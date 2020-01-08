let books = [
    'book 1',
    'book 2',
    'book 3',
    'book 4',
    'book 5',
    'book 6'
]

// 從索引位置 2 ，不刪，加 1 個元素
let deleted = books.splice(2, 0, 'book added')
console.log(books, deleted)

// 從索引位置 2 ，刪 1 個元素
deleted = books.splice(2, 1)
console.log(books, deleted)

// 從索引位置 4，刪 2 個元素，加 2 個元素
deleted = books.splice(4, 2, 'new 1','new 2')
console.log(books, deleted)

// 從索引位置 4，刪之後的所有元素
deleted = books.splice(4)
console.log(books, deleted)