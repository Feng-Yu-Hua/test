//全局組件
Vue.component('alert',{
    template: '<button @click="on_click">全局組件</button>',
    methods:{
        on_click: function(){
            alert('全局組件');
        }
    }
});
new Vue({
    el:"#seg1"
});
new Vue({
    el:"#seg2"
});
//局部組件1
new Vue({
    el:"#seg3",
    components:{
        alert:{
            template: '<button @click="on_click">局部組件1</button>',
            methods:{
                on_click: function(){
                    alert('局部組件1');
                }
            }            
        }
    }
});
//局部組件2
var alert_component = {
    template: '<button @click="on_click">局部組件2</button>',
    methods:{
        on_click: function(){
            alert('局部組件2');
        }
    }
}
new Vue({
    el:"#seg4",
    components:{
        alert:alert_component 
    }
});