<template>
    <div id="wrapper">
        <div id="scroller">
            <div id="top-section" class="m-bottom-10">
                <!--搜索区域-->
                <searchWrap v-on:get-keyword="getKeyword"></searchWrap>
                <!--任务操作按钮-->
                <div class="btn-wrapper clearfix m-bottom-10" id="btn-wrapper">
                    <span class="btn btn-lg bg-orange border-radius-4">任务报送</span>
                    <span class="btn btn-lg bg-green color-white border-radius-4">任务分派</span>
                </div>
                <div class="task-nav bg-white border-radius-4">
                    <span v-for="p in dataStatusObj" :key="p.id" class="task-nav-tab" v-bind:class="{'active':p.active}">{{p.name}}</span>
                </div>
            </div>
            <list v-for="item in dataStatusObj" :key='item.id' v-bind:taskList="item.taskList" v-show="item.active"></list>
        </div>
    </div>
</template>
<script>
    import searchWrap from './searchWrap.vue'
    import list from './list.vue'
    export default{
        data(){
            return {
                taskList:null,
                StatusObj:this.$store.state.ctrl.dataStatusObj
            }
        },
        name:'task',
        components:{
            //加载的各种组件
            searchWrap,list
        },
        // 计算属性
        computed:{
            dataStatusObj(){
                return this.$store.state.ctrl.dataStatusObj
            }
        },
        methods:{
            //搜索方法
            getKeyword(data){
                this.keyword = data;
            },
            //测试state
            setCount(){
                this.$store.commit('increment');
            }
        },
        created(){
            //获取部门数
            this.$store.dispatch('getUserDept');
            //获取任务状态列表
            this.$store.dispatch('getDataStatusList');
            // 初始化iscroll
            
        },
    }
</script>
<style scoped>
</style>
