<template>
    <div class="task-wrapper">
        <div class="task-content">
            <task-item v-for="item in taskList" :key="item.taskId" v-bind:item="item"/>
        </div>
    </div>
</template>
<script>
    import taskItem from './taskItem.vue'
    import Config from '../global'
    export default{
        props: ['taskList'],
        data:{
            taskList:null
        },
        name:'list',
        components:{taskItem},
    }
</script>
<style>
</style>

