var state = {
    todos: [
        {
            id: 0,
            task: "健康餐飲研習",
            done: false
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
    ]
}
var getters = {
    getTodos: state => state.todos
}
var mutations = {
    AddTodo: (state, payload) => {
        var newTask = {
            id: payload.newId,
            task: payload.task,
            done: false
        }
        state.todos.unshift(newTask);
    },
    ToggleTodo: (state, payload) => {
        var item = state.todos.find(todo => todo.id === payload);
        item.done = !item.done;
    },
    DeleteTodo: (state, payload) => {
        var index = state.todos.findIndex(todo => todo.id === payload);
        state.todos.splice(index, 1);
    }
}
var actions = {
    addTodo: (context, payload) => {
        context.commit("AddTodo", payload)
    },
    toggleTodo: (context, payload) => {
        context.commit("ToggleTodo", payload)
    },
    deleteTodo: (context, payload) => {
        context.commit("DeleteTodo", payload)
    }
}
Vue.component("todo-list", {
    data(){
        return {
            todos:this.$store.getters.getTodos
        }
    },
    methods: {
        toggleTodo(id) {
            this.$store.dispatch("toggleTodo", id);
        },
        deleteTodo(id) {
            this.$store.dispatch("deleteTodo", id);
        }
    },
    template: `
        <div class='container'>
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

var store = new Vuex.Store({
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
})
var app = new Vue({
    el: "#app",
    store,
    data:{
        task: "",
        newId: 3
    },
    methods: {
        addTodo() {
            this.$store.dispatch("addTodo", this);
            this.newId++;
            this.task = "";
        }
    },
    template: "#app-template"
})

