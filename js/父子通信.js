Vue.component('alert',{
    template:'<button @click="on_click()">彈彈彈</button>',
    props:['msg'],
    methods:{
        on_click: function(){
            alert(this.msg);
        }
    }
});
Vue.component('user',{
    template:'<a :href="\'/user/\' + username ">{{username}}</a>',
    props:['username'],
    methods:{},
});
new Vue({
    el:"#app",
});