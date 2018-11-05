//导入样式表
import bootstrap from './css/bootstrap.css'
//公用样式
import common from './css/common.css' 
//本程序样式
import css from './css/app.css'
//导入iscroll
import iscroll from './vendor/iscroll'
//导入vue
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
//导入axios
import axios from 'axios'
//导入组件
import appFooter from './components/appFooter.vue'
import task from './components/task.vue'
import overView from './components/overView.vue'
import readtask from './components/readtask.vue'
import unReadtask from './components/unReadtask.vue'
//配置router
Vue.use(VueRouter);
//设置全局axios
axios.defaults.headers.post['Content-Type'] = "application/json; charset=utf-8";
Vue.prototype.$axios = axios;
//配置router
const routes = [
    { path: '/task', component: task },
    { path: '/overView', component: overView },
    { path: '/readtask', component: readtask },
    { path: '/unReadtask', component: unReadtask }
];
const router = new VueRouter({routes});
//默认router
router.push('/task');
new Vue({
    el: '#app',
    //把store 对象提供给store选项，这可以把store 的实例注入所有的子组件
    store,
    router,
    data(){
        return{
           showOverView:this.$store.state.ctrl.userDeptCount>0?true:false
        }
    },
    components: { appFooter},
    //组件完成之后执行请求
    created() {
        //获取用户id
        if (!localStorage.getItem(this.$store.state.ctrl.loginUserID) && localStorage.getItem(this.$store.state.ctrl.loginUserID)==null){
            this.getUserId(this.getUserInfo);
        }else{
            this.$store.state.ctrl.userId = localStorage.getItem(this.$store.state.ctrl.loginUserID);
        }
    },
    //组件一些操作方法
    methods:{
        //获取用户id
        getUserId: function (callback){
            var code = oaSign.getCode();
            var params = {
                code: code,
                sys_type: '4'
            };
            this.$axios.get(this.$store.state.Config.Role_url, params).then(function (data){
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
        //获取用户详细信息
        getUserInfo:function(){
            
        },
    }
})
