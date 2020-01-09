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
    el:"#app3",
    data:{  //新增留言的物件
        newNote:{
            name:'',
            content:''
        },
        notes:JSON.parse(localStorage.getItem('notes')) || [] //儲存留言物件的陣列
    },watch:{
        notes:{
            handler:'saveNotes', //處理程序的名稱設定
            deep:true //監看資料變化層次
        }
    },methods:{
        selectNote(note){
            this.noteSelected.name =  note.name
            this.noteSelected.content = note.content
        },addNote(){
            if (this.newNote.name.trim().length == 0 || this.newNote.content.trim().length == 0) { //this指向物件
                alert('記得標題和內容都要填喔')
                return
            }
            const note ={
                name:this.newNote.name,
                content:this.newNote.content,
                created:new Date()
            }
            this.notes.push(note) //push()將數組末尾添加多個元素
            this.newNote.content='' //清除多個元素
            this.newNote.name=''
        },deletNote(note){
            if(confirm('確定刪除?')){
                const ndx = this.notes.indexOf(note)
                if(ndx !==-1){
                    this.notes.splice(ndx,1)
                }
            }
        },saveNotes(){
            localStorage.setItem('notes',JSON.stringify(this.notes))
        }
    }
})
