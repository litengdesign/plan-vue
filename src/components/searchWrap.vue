<template>
  <!-- 搜索区域 -->
  <div class="search-wrap" id="search">
    <div class="row">
      <div class="col-xs-12">
        <search-keyword v-on:active-search-option="showSearchOption"></search-keyword>
        <search-option  v-on:hide-search-option="hideSearchOption" v-show="isClickSearch" ></search-option>
      </div>
    </div>
  </div>
  <!--end-->
</template>
<script>
    import searchKeyword from './searchKeyword.vue'
    import searchOption from './searchOption.vue'
    export default {
        name: 'search',
        data(){
            return{
                isClickSearch:false,
                keyword:''
            }
        },
        components:{searchKeyword ,searchOption },
        computed:{},
        methods:{
            sendKeyword:function(){
                this.$emit("get-keyword",this.keyword);
            },
            showSearchOption:function(){
                this.isClickSearch = true;
            },
            hideSearchOption:function(){
                this.isClickSearch = false;
            }
        }
    }
</script>
<style scoped>
/* css for search */
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

</style>
