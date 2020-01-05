Vue.component('balance',{
    template:
    `<div>
        <show @show-balance="show_balance=true"></show>
        <div v-if="show_balance">餘額為$100元</div>
    </div>`,
    data:function(){
        return{
            show_balance:false,
        }
    }
});
Vue.component('show',{
    template:'<button @click="on_click()">顯示餘額</button>',
    methods:{
        on_click(){
            this.$emit('show-balance',{a: 1,b: 2});
        }
    }
});
new Vue({
    el:"#app",
});