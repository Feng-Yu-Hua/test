let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // 撈資料的結果
        let error = false
        let records = 10

        if (records != -1) { // 有撈到資料
            error = false
        } else {             // 發生異常
            error = true
        }

        if (!error) {
            resolve(`取回 ${records} 筆的紀錄....`)
        } else {
            reject('權限不足，無法連線資料庫....')
        }
    }, 2000)
})

promise
.then(resolved => console.log(resolved))
.catch(rejected => console.log(rejected))