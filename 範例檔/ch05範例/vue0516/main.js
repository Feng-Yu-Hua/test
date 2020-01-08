import App from './components/App.js'

// new Vue({
//     render: h => h(App),
// }).$mount(`#app`);
new Vue({
    el:'#app',
    components:{
        App
    },
    template:'<App/>'
})
