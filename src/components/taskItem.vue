<template>
    <div class="task-item bg-white border-radius-4 m-bottom-10">
        <div class="row">
            <div class="col-xs-2 task-option">
                <span class="icon icon-radio"></span>
            </div>
            <div class="col-xs-8 task-description bg-white p-left-0">
                <div class="task-title">
                    {{item.taskTitle}}
                </div>
                <div class="task-category m-top-10">
                    <span class="task-date ng-binding">{{item.regtDate | dateFormatter}}</span>
                    <span class="btn btn-mini">{{item.taskType}}</span>
                </div>
            </div>
            <div class="col-xs-2 p-right-0 p-left-0 text-center">
                <!--已完成-->
                <div class="task-status bg-blue"  v-show="item.isFinish=='1'">
                    <div class="task-icon">
                    <i class="icon icon-status-close"></i>
                    </div>
                    <div class="task-status-description">
                       已完成
                    </div>
                </div>
                <!-- 进行中 -->
                <div class="task-status bg-yellow" v-show="item.isFinish=='0'">
                    <div class="task-icon">
                        <i class="icon icon-status-ing"></i>
                    </div>
                    <div class="task-status-description">
                        进行中
                    </div>
                </div>
            </div>
        </div> 
    </div>              
</template>
<script>
    export default{
        props:['item'],
        name:'taskItem',
        filters:{
            dateFormatter:function (value) {
                if (value) {
                    var date = new Date(value.replace(/\-/g, "/"));
                    var getMinutes = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
                    return (date.getMonth() + 1) + '月' + date.getDate() + '日' + '  ' + date.getHours() + ':' + getMinutes;
                } else {
                    return "";
                }
            }
            
        }
    }
</script>
<style>

</style>

