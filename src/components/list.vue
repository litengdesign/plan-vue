<template>
    <div class="task-wrapper">
        <div class="task-content">
            <task-item v-for="item in taskList" :key="item.taskId" v-bind:item="item"/>
        </div>
    </div>
</template>
<script>
    import taskItem from './taskItem.vue'
    export default{
        props: ['taskList'],
        data(){
            return{
            }
        },
        name:'list',
        components:{taskItem},
    }
</script>
<style>
</style>

