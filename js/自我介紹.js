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
        noteSelected:{
            name:'',
            content:''
        },
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
        },
        addNote(){
            if (this.newNote.name.trim().length == 0 || this.newNote.content.trim().length == 0) { //this指向物件
                alert('記得標題和內容都要填喔')
                return
            }
            const note ={
                name:this.newNote.name,
                content:this.newNote.content,
                created:new Date()
            }
            this.notes.push(note) //push()將數組末尾添加多個元素 note物件儲存到notes陣列
            this.newNote.name='' //add 後清除 name 和 content 裡面的值
            this.newNote.content=''
        },
        deleteNote(note){
            var found = false
            for(var i=0;i<=this.notes.length;i++){
                if(this.notes[i].name == note.name){
                    found = true;
                    break;
                }
            }
            if(found){
                this.notes.splice(i,1)
            }
            $('#exampleModal').modal('hide') //隱藏刪除視窗
        },
        saveNotes(){
            localStorage.setItem('notes',JSON.stringify(this.notes))
        }
    }
})
new Vue({
    el:"#app4",
    data:{
        textDecorations:[
            {
                name:'underline',
                title:'底線'
            },
            {
                name:'line-through',
                title:'中線'
            },
            {
                name:'overline',
                title:'頂線'
            }
        ],
        colorStyle:{
            color:'black',
        },
        textDecorationSelected:'',
        //-----------------------------------------------------------------------------------------------
        colorSelected:'',
        colors:[
            {
                id:'1',
                title:'紅色',
                name:'red'
            },
            {
                id:'2',
                title:'綠色',
                name:'green'
            },{
                id:'3',
                title:'藍色',
                name:'blue'
            }
        ],
        
    },
    methods:{
        selectColor(color){
            this.colorSelected = color.name
        },
        selecttextDecoration(textDecoration){
            this.textDecorationSelected = textDecoration.name
        }
    }
})