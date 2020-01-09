new Vue({
    el:"#app",
    data:{
        Home:'首頁',
        Feature:'自我介紹',
        Works:'作品',
        yourname:'你的名字',
        submit:'輸入',
        username:'',
    }
});
new Vue({
    el:"app3",
    data:{  //新增留言的物件
        Newnote:{
            name:'',
            content:''
        },
        notes:[] //儲存留言物件的陣列
    },methods:{
        addNote(){

        },deletNote(note){
            if (confirm('確定刪除這則留言嗎?')){

            }
        }
    }
})
