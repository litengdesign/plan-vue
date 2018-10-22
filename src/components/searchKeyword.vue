<template>
    <div class="search-content bg-white m-bottom-10">
        <form>
            <span class="icon icon-search pull-left"></span>
            <input type="text" class="search-input" placeholder="全站搜索" v-model="keyword"  @keyup.enter="sendKeyword" @click="showSearchOption">
            <span class="icon icon-clear pull-right" @click="keyword=''"></span>
        </form>
    </div>
</template>
<script>
  export default {
    name: 'searchKeyword',
    data(){
      return{
        keyword:'',
        isClickSearch:false,
      }
    },
    components:{},
    computed:{},
    methods:{
        sendKeyword:function(){
            this.$emit("get-keyword",this.keyword);
        },
        showSearchOption:function(){
            this.isClickSearch = true;
            this.$emit("active-search-option",this.isClickSearch);
        }
    }
  }
</script>
<style scoped>
    /* css for search keyword */
    .search-wrap{
        width: 100%;
        position: relative;
        color: #8E8E93;
        overflow: hidden;
    }
    .search-wrap .icon{
        display: inline-block;
        vertical-align: middle;
        margin-top: 4px;
        
    }
    .search-wrap .icon-search{
        width: 17px;
        height: 17px;
        background: url('../images/icon-search.png') no-repeat center;
        background-size: contain;
    }
    .search-wrap .icon-clear{
        width: 0.714rem;
        height: 12px;
        margin-top: 7px;
        background: url('../images/icon-clear.png') no-repeat center;
        background-size: contain;
    }
    .search-wrap .search-input{
        width: 85%;
        border-color: transparent;
    }
    .search-wrap .search-content {
        display: inline-block;
        padding: 0.5rem 0.857rem;
        width: 100%;
        border-radius:4px;
    }
    .search-wrap .fa {
        margin-left: 0;
        margin-right: 0;
        line-height: 26px;
        width: 24px;
        text-align: center;
    }
    .search-wrap .search-content span:last-child {
        display: inline-block;
    }
    .search-wrap .icon-up{
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
