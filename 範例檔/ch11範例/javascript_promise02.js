const contacts = [
    {
        name: 'John',
        email: 'john@gmail.com'
    },
    {
        name: 'Mary',
        email: 'mary@gmail.com'
    }
]

function getContacts() {
    // 利用setTimeout函數來模擬耗用時間去伺服器撈資料
        setTimeout(() => {
        let result = '<h4>聯絡人資料</h4>'
        contacts.forEach((contact) => {
            result += `<li>姓名：${contact.name}，電子郵件信箱：${contact.email}</li>`
        })

        document.body.innerHTML = result
    }, 2000
    )
}

function newContact(contact) {
    return new Promise((resolve, reject) => {
        // 利用setTimeout函數來模擬耗用時間去伺服器新增資料
        setTimeout(() => {
            contacts.push(contact)

            const error = true

            if (!error) {
                resolve()
            } else {
                reject('權限不足，無法新增聯絡人....')
            }
        })
    },3000)
}

// 接著透過呼叫 then() 來決定 promise 進入 resolved 時，要透過 then() 做什麼，
// 或是進入 rejected 時，要透過 catch() 方法要做什麼。
newContact({ name: 'Tom', email: 'tom@gmail.com' })
    // 印出實現值（fulfillment value）
    .then(getContacts)
    // 印出失敗訊息（rejection reason）
    .catch(error => console.log(error))