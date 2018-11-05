<template>
    <footer id="footer" class="app-footer">
        <div class="row">
            <div class="col-xs-3" v-if="showOverView">
                <router-link active-class="active" exact to="overview">
                    <span class="icon-wrap">
                        <i class="icon fa fa-overview"></i>
                    </span>
                    <span>总览</span>
                </router-link>  
            </div>
            <div class="col-xs-4" v-bind:class="{'col-xs-3':showOverView}">
                <router-link active-class="active" to="/task">
                    <span class="icon-wrap">
                        <i class="icon fa fa-task"></i>
                    </span>
                    <span>任务</span>
                </router-link>
            </div>
            <div class="col-xs-4" v-bind:class="{'col-xs-3':showOverView}">
                <router-link active-class="active" exact to="unReadTask">
                    <span class="icon-wrap">
                        <i class="icon fa fa-unReadTask"></i>
                    </span>
                    <span>待阅</span>
                </router-link>
            </div>
            <div class="col-xs-4" v-bind:class="{'col-xs-3':showOverView}">
                <router-link active-class="active" exact to="readTask">
                    <span class="icon-wrap">
                        <i class="icon fa fa-readTask"></i>
                    </span>
                    <span>已阅</span>
                </router-link>
            </div>
        </div>    
    </footer>
</template>

<script>
export default {
  name: 'appFooter',
  props:["showOverView"],
  data(){
    return {

    }
  },
  created(){
  }
}
</script>