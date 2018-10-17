//导入样式表
import bootstrap from './css/bootstrap.css'
import common from './css/common.less'
import css from './css/app.css'
import less from './css/app.less'
import sass from './css/app.scss'
//导入vue
import Vue from 'vue'
import VueRouter from 'vue-router'
//导入组件
import appFooter from './components/appFooter.vue'
import task from './components/task.vue'
import overView from './components/overView.vue'
import readtask from './components/readtask.vue'
import unReadtask from './components/unReadtask.vue'

//配置router
Vue.use(VueRouter);
const routes = [
    { path: '/task', component: task },
    { path: '/overView', component: overView },
    { path: '/readtask', component: readtask },
    { path: '/unReadtask', component: unReadtask }
];
const router = new VueRouter({
    routes
});

new Vue({
    el: '#app',
    router,
    data:{
        msg:''
    },
    components: { appFooter}
})
