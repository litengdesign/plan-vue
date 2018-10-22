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
                //任务状态类型
                dataStatusObj:[
                    {
                        id: '2',
                        name: '提交',
                        active: true,
                        taskList: []
                    },
                    {
                        id: '1',
                        name: '草稿',
                        active: false,
                        taskList: []
                    },
                    {
                        id: '3',
                        name: '归档',
                        active: false,
                        taskList: []
                    }
                ],
                pageSize:10,
                pageIndex:0,
                dataStatus:null,
                taskList:null
            }

        },
        name:'task',
        components:{
            //加载的各种组件
            searchWrap,list
        },
        methods:{
            //搜索方法
            getKeyword(data){
                this.keyword = data;
            },
        },
        created(){
            let params = {
                userId: this.Ctrl.userId,
                dataStatus: this.dataStatus,
                pageSize: this.pageSize,
                pageIndex: this.pageIndex,
            };
            //获取当前页面的页码以及对应的类型id
            this.dataStatusObj.forEach((item,index)=>{
                if (item.active) {
                    if (index == 0) {
                        sessionStorage.setItem(this.Config.isDraft, 'false');
                    }
                    params.dataStatus = item.id;
                    params.pageIndex = item.pageIndex || 0;
                    this.Ctrl.pageIndex = params.pageIndex;
                }
            })
            this.$axios.get(
                this.Config.GetTaskInfoList_url,{
                    params:params
                }
            ).then(
                (response)=>{
                    if(response.data.errcode =='0'){
                        this.dataStatusObj.forEach((item,index)=>{
                            if(item.active){
                                item.taskList = response.data.data.taskInfoData1s;
                            }
                        })
                    }  
                }).catch(function(error){
                console.log(error);
            })
        },
    }
</script>
<style scoped>
</style>
