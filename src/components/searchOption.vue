<template>
    <div class="search-option bg-white  m-bottom-10">
        <div class="row option-wrap">
            <div class="col-xs-3">
                <b>任务类型</b>
            </div>
            <div class="col-xs-9">
                <span v-for="p in TaskType" v-bind:key="p.id">
                    {{p.value}} 
                </span>
            </div>
        </div>
        <div class="row  option-wrap">
            <div class="col-xs-3">
                <b>完成情况</b>
            </div>
            <div class="col-xs-9">
                <span v-for="p in isFinishList" v-bind:key="p.id">
                    {{p.value}} 
                </span>
            </div>
        </div>
        <div class="row option-wrap">
            <div class="col-xs-3">
                <b>时间</b>
            </div>
            <div class="col-xs-9">
                <div class="pull-left">
                    <input type="text" id="yearSelect" data-field="year" ng-model="year" readonly>
                    <span>
                        年
                    </span>
                </div>
                <div class="pull-left m-left-5 m-right-5">
                    <input type="text" id="monthSelect" data-field="month" ng-modal="month" readonly>
                    <span>
                        月
                    </span>
                </div>
                <div class="pull-left" >
                    <input type="text" id="weekSelect" readonly ng-disabled="!month || !weekSelect">
                    <span>
                        周
                    </span>
                </div>
            </div>
        </div>     
        <!-- hide option search -->
        <i class="icon icon-up" @click="showSearchOption"></i>
    </div>
</template>
<script>
    export default{
        name:'searchOption',
        data(){
            return {
                isClickSearch:false,
                TaskType:[
                    {
                        id: '0',
                        value: '全部',
                        active: true
                    },
                    {
                        id: '1',
                        value: '周计划'
                    },
                    {
                        id: '2',
                        value: '月计划'
                    },
                    {
                        id: '3',
                        value: '其   它'
                    }
                ],
                isFinishList : [
                    {
                        id: '0',
                        value: '全部',
                        active: true
                    },
                    {
                        id: '1',
                        value: '进行中'
                    },
                    {
                        id: '2',
                        value: '已完成'
                    }
                ],
            }
        },
        methods:{
            showSearchOption:function(){
                this.$emit("hide-search-option",false);
            }
        },
       
    }
</script>
<style>
    /* search option style */
    .search-option{
        position: relative;
        padding: 0.64rem 1.285rem 1.7rem;
        color: #0A0A0A;
        border-radius:4px;
    }
    .option-wrap .col-xs-3,
    .option-wrap .col-xs-9{
        padding: 0.714rem 0.714rem;
    }
    .option-wrap .col-xs-3{
        text-align: center;
        text-align-last: justify;
    }
    .option-wrap .col-xs-9{
        border-bottom:1px solid #F0F1F6;
        color: #8E8E93;
    }
    .option-wrap .col-xs-9:last-child{
        border-bottom: 0;
    }
    .option-wrap .col-xs-9 span{
        padding-right: 20px;
    }
    .option-wrap .col-xs-9 span:last-child{
        padding-right: 0;
    }
    .option-wrap:last-child .col-xs-9{
        border-bottom: 0;
    }
    .option-wrap input {
        width: 40px;
        height: 20px;
        background-color: #F0F1F6;
        border-color: transparent;
        border-radius: 3px;
        color: #007AFF;
        text-align: center;
        margin-right: 2px;
    }
    .fa {
        margin-left: 0;
        margin-right: 0;
        line-height: 26px;
        width: 24px;
        text-align: center;
    }
    .search-content span:last-child {
        display: inline-block;
    }
    .icon-up{
        position: absolute;
        width: 3.14rem;
        height: 1.57rem;
        bottom:0;
        left:50%;
        margin-left: -1.57rem;
        background: url('../images/icon-up.png') no-repeat center;
        background-size: contain;
    }
</style>

