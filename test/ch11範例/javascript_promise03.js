fetch('https://jsonplaceholder.typicode.com/users')
    // .then((response) => {
    //     // console.log(response)
    //     response.json().then((val)=>{
    //         console.log(val)
    //     })
    // })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch((error) => {
        console.log('資料取得異常:', error)
    })