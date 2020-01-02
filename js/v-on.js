var app = new Vue({
    el:"#app",
    data:{
        klass:'btn btn-default',
    },
    methods:{
        onClick:function() {
            console.log('clicked');
        },
        onEnter:function() {
            console.log('mouse enter');
        },
        onOut:function() {
            console.log('mouse leave');
        },
        onSubmit:function() {
            console.log('submitted');
        },
        onKeyupenter:function(){
            console.log('entered');
        },
    }
});