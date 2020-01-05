Vue.component('balance',{
    template:
    `<div>
        <show @show-balance="show_balance"></show>
        <div v-if="show">餘額為$100元</div>
    </div>`,
    methods :{
        show_balance :function(data){
            this.show = true;
            console.log('data:',data);
        }
    },
    data:function(){
        return{
            show:false,
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