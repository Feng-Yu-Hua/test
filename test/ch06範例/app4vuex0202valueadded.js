Vue.component("vue-pagination", {
    computed: {
        // ...Vuex.mapState(["currentPage"]),// app4vuex04.js用此敘述取得state
        ...Vuex.mapGetters({ currentPage: "getCurrentPage" }),// app4vuex04.js沒有此getter函數來取得state
        ...Vuex.mapGetters(["pageCount"]),
        pageNumbers() {
            console.log('pageNumbers....pageCount = ', this.pageCount)
            console.log('pageNumbers....currentPage = ', this.currentPage)
     
            if (this.pageCount < 4) {
                console.log('this.pageCount < 4')
                console.log('return value = ', [...Array(this.pageCount + 1).keys()].slice(1))
                return [...Array(this.pageCount + 1).keys()].slice(1)
                // 會依this.pageCount的值分別產產生[1],[1,2],[1,2,3]的陣列
            } else if (this.currentPage < 4) {
                console.log('this.currentPage <= 4')
                console.log('return value = ', [1, 2, 3, 4, 5])
                return [1, 2, 3, 4, 5];
            } else if (this.currentPage > this.pageCount - 4) {
                console.log('this.currentPage > this.pageCount - 4')
                console.log('return value = ',[...Array(5).keys()].reverse().map(v => this.pageCount - v))
                // 從 this.pageCount 開始取 5 個值構成的陣列
                return [...Array(5).keys()].reverse().map(v => this.pageCount - v);
            } else {
                console.log('else')
                console.log('return value = ', [this.currentPage - 1, this.currentPage,this.currentPage + 1])
                return [this.currentPage - 1, this.currentPage, this.currentPage + 1];
            }
        }
    },
    methods: {
        ...Vuex.mapMutations(["setCurrentPage", "setPageSize"]),
        changePageSize($event) {
            this.setPageSize(Number($event.target.value));
        }
    },
    template: '#pageComponent'
})
Vue.component("todo-list", {
    computed: {
        ...Vuex.mapGetters({todos:"processedTodos"})
    },
    methods: {
        toggleTodo(id) {
            this.$store.dispatch("toggleTodo", id);
        },
        deleteTodo(id) {
            this.$store.data.dispatch("deleteTodo", id);
        }
    },
    template: `
    <div>
     <div class="row" v-for="todo in todos" v-bind:key='todo.id'>
        <div class="col" @click="toggleTodo(todo.id)" @dblclick="deleteTodo(todo.id)">{{todo.task}}</div>
        <div class="col-2">
            <input type="checkbox" v-model="todo.done" class="form-check-input" />
                <span :class='{undone:!todo.done}' >{{todo.done?'完成':'未完'}}</span>
        </div>
    </div>
    </div>
    `
})
const dataModule = {
    state: {
        // 實際業務資料
        todos: [
            {
                id: 10,
                task: "準備新書發表",
                done: false
            },
            {
                id: 11,
                task: "參加銀髮路跑",
                done: true
            },
            {
                id: 12,
                task: "健康餐飲研習",
                done: true
            }
            ,
            {
                id: 13,
                task: "出席研討會議",
                done: true
            },
            {
                id: 14,
                task: "提報教學計畫",
                done: true
            }
            ,
            {
                id: 15,
                task: "前往新車試乘",
                done: false
            },
            {
                id: 16,
                task: "聯絡房屋仲介",
                done: false
            }
            ,
            {
                id: 17,
                task: "好友五十大壽",
                done: true
            },
            {
                id: 2,
                task: "提報教學計畫",
                done: false
            }
            ,
            {
                id: 1,
                task: "好友五十大壽",
                done: true
            },
            {
                id: 2,
                task: "提報教學計畫",
                done: false
            }
            ,
            {
                id: 1,
                task: "好友五十大壽",
                done: true
            },
            {
                id: 2,
                task: "提報教學計畫",
                done: false
            }
            ,
            {
                id: 1,
                task: "好友五十大壽",
                done: true
            },
            {
                id: 2,
                task: "提報教學計畫",
                done: false
            }
            ,
            {
                id: 1,
                task: "好友五十大壽",
                done: true
            },
            {
                id: 2,
                task: "提報教學計畫",
                done: false
            }
            ,
            {
                id: 1,
                task: "好友五十大壽",
                done: true
            },
            {
                id: 2,
                task: "提報教學計畫",
                done: false
            }
            ,
            {
                id: 1,
                task: "好友五十大壽",
                done: true
            },
            {
                id: 2,
                task: "提報教學計畫",
                done: false
            }
            ,
            {
                id: 1,
                task: "好友五十大壽",
                done: true
            },
            {
                id: 2,
                task: "提報教學計畫",
                done: false
            }
            ,
            {
                id: 1,
                task: "好友五十大壽",
                done: true
            },
            {
                id: 2,
                task: "提報教學計畫",
                done: false
            }
            ,
            {
                id: 1,
                task: "好友五十大壽",
                done: true
            },
            {
                id: 2,
                task: "提報教學計畫",
                done: false
            }
            ,
            {
                id: 1,
                task: "好友五十大壽",
                done: true
            },
            {
                id: 2,
                task: "提報教學計畫",
                done: false
            }
            ,
            {
                id: 1,
                task: "好友五十大壽",
                done: true
            },
            {
                id: 2,
                task: "提報教學計畫",
                done: false
            }
            ,
            {
                id: 1,
                task: "好友五十大壽",
                done: true
            },
            {
                id: 2,
                task: "提報教學計畫",
                done: false
            }
            ,
            {
                id: 1,
                task: "好友五十大壽",
                done: true
            },
            {
                id: 1,
                task: "好友五十大壽",
                done: true
            },
            {
                id: 1,
                task: "好友五十大壽",
                done: true
            },
            {
                id: 2,
                task: "提報教學計畫",
                done: false
            }
            ,
            {
                id: 1,
                task: "好友五十大壽",
                done: true
            },
            {
                id: 2,
                task: "提報教學計畫",
                done: false
            }
            ,
            {
                id: 1,
                task: "好友五十大壽",
                done: true
            },
            {
                id: 2,
                task: "提報教學計畫",
                done: false
            }
            ,
            {
                id: 1,
                task: "好友五十大壽",
                done: true
            },
            {
                id: 2,
                task: "提報教學計畫",
                done: false
            }
            ,
            {
                id: 1,
                task: "好友五十大壽",
                done: true
            },
            {
                id: 1,
                task: "好友五十大壽",
                done: true
            },
            {
                id: 2,
                task: "提報教學計畫",
                done: false
            }
            ,
            {
                id: 1,
                task: "好友五十大壽",
                done: true
            },
            {
                id: 3,
                task: "提報教學計畫",
                done: false
            }
        ],
    },
    getters: {
        // 計算指定分頁時，原始資料如何只顯示屬於該頁的部份
        processedTodos(state, getters, rootState, rootGetters) {
            console.log('processedTodos ....',rootGetters.getTodos)
            console.log('processedTodos pageSize = ',rootState.page.pageSize)
            let index = (rootState.page.currentPage - 1) * rootState.page.pageSize
            console.log('processedTodos .... index = ',index)
            console.log('processedTodos@Vuex.Store....new length = ', (rootGetters.getTodos.slice(index, index + rootState.page.pageSize)).length)
            console.log('processedTodos@Vuex.Store....data = ', rootGetters.getTodos.slice(index, index + rootState.page.pageSize))
            return state.todos.slice(index, index + rootState.page.pageSize)
        },
        // 將資料取出
        getTodos: state => state.todos,

    },
    mutations: {
        // 實際資料處理
        ADD_TODO: (state, payload) => {
            console.log('ADD_TODO....')
            var newTask = {
                id: payload.newId,
                task: payload.task,
                done: false
            }

            state.todos.unshift(newTask);
        },
        TOGGLE_TODO: (state, payload) => {
            var item = state.todos.find(todo => todo.id === payload);
            item.done = !item.done;
        },
        DELETE_TODO: (state, payload) => {
            var index = state.todos.findIndex(todo => todo.id === payload);
            state.todos.splice(index, 1);
        }
    },
    actions: {
        addTodo: (context, payload) => {
            context.commit("ADD_TODO", payload)
        },
        toggleTodo: (context, payload) => {
            context.commit("TOGGLE_TODO", payload)
        },
        deleteTodo: (context, payload) => {
            context.commit("DELETE_TODO", payload)
        }
    }
}
const pageModule ={
    state: {
        // 分頁處理用資料
        currentPage: 1,
        pageSize: 4,
    },
    getters: {
        // 算出目前資料若依指定的頁面呈現量限制計算時，目前資料需要幾頁
        pageCount(state, getters, rootState, rootGetters) {
            console.log('pageCount... getTodos.length = ', rootGetters.getTodos.length)
            console.log('pageCount... pageSize = ',rootState.page.pageSize)
            console.log('pageCount... pageCount = ', Math.ceil(rootGetters.getTodos.length / rootState.page.pageSize))
                       return Math.ceil(rootGetters.getTodos.length / rootState.page.pageSize)
        },
        getCurrentPage(state){ // app4vuex04.js沒有此getter函數
            return state.currentPage
        }
     },
    mutations: {
        // 分頁處理
        setCurrentPage(state, page) {
            console.log('setCurrentPage@Vuex.Store.... page = ', page)
            console.log('setCurrentPage@Vuex.Store.... currentPage = ', state.currentPage)
            state.currentPage = page
        },
        setPageSize(state,size) {
            console.log('setPageSize...size = ', size)
            state.pageSize = size
            state.currentPage = 1
        }
    }
}
const vuexPersist = new window.VuexPersistence.VuexPersistence({
    key: 'my-app4vuex0202valueadded',
    storage: localStorage
})
var store = new Vuex.Store({
    // strict: true,
    modules:{
        data:dataModule,
        page:pageModule
    },
    plugins: [vuexPersist.plugin]
})
var app = new Vue({
    el: '#app',
    store,
    data: {
        task: "",
        newId: 3
    },
    computed: {
        todos() {
            console.log('Vue instance todos...', this.$store.getters.getTodos)
            return this.$store.getters.getTodos;
        }
    },
    methods: {
        addTodo() {
            this.$store.dispatch("addTodo", this);
            this.newId++;
            this.task = "";
        }
    }
});

