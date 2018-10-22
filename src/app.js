//导入样式表
import bootstrap from './css/bootstrap.css'
import common from './css/common.css'
import css from './css/app.css'
//导入常量
import global_ from './global'
//导入vue
import Vue from 'vue'
import VueRouter from 'vue-router'
//导入axios
import axios from 'axios'
//导入组件
import appFooter from './components/appFooter.vue'
import task from './components/task.vue'
import overView from './components/overView.vue'
import readtask from './components/readtask.vue'
import unReadtask from './components/unReadtask.vue'

//配置router
Vue.use(VueRouter)
//设置全局axios
axios.defaults.headers.post['Content-Type'] = "application/json; charset=utf-8";
Vue.prototype.$axios = axios;
//设置全局变量
Vue.prototype.Config = global_.Config;
Vue.prototype.Ctrl = global_.Ctrl;
const routes = [
    { path: '/task', component: task },
    { path: '/overView', component: overView },
    { path: '/readtask', component: readtask },
    { path: '/unReadtask', component: unReadtask }
];
const router = new VueRouter({
    routes
})
//默认router
router.push('/task');
var dataSource = {
    msg: '',
};
new Vue({
    el: '#app',
    router,
    data: dataSource,
    components: { appFooter},
    created() {
        //获取用户id
        if (!localStorage.getItem(this.Config.loginUserID) && localStorage.getItem(this.Config.loginUserID)==null){
            this.getUserId(this.getUserInfo);
        }else{
            this.Ctrl.userId = localStorage.getItem(this.Config.loginUserID);
        }
    },
    methods:{
        //获取用户信息
        getUserId: function (callback){
            var code = oaSign.getCode();
            var params = {
                code: code,
                sys_type: '4'
            };
            this.$axios.get(Config.Role_url, params).then(function (data){
                if (data.errcode == 0) {
                    localStorage.setItem(Config.loginUserId, data.userid);
                    this.Ctrl.userId = data.userid;
                    if (callback && typeof callback == 'function') {
                        this.getUserInfo(callback)
                    } else {
                        this.getUserInfo()
                    }
                }
            })
        },
        getUserInfo:function(){

        }
    }
})
