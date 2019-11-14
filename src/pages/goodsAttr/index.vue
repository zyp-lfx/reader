<template>
  <div class="goodsAttr-content"><div class="top-search">
    <span>类型名称:</span>
    <el-input    clearable placeholder="请输入内容"></el-input>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
    <el-button class="right" type="primary" icon="el-icon-plus" @click="showAdd()">新增</el-button>
  </div></div>
</template>

<script>
    export default {
        name: "goodsAttr"
    }
</script>

<style scoped lang="less">

  .goodsAttr-content{
    height:calc( 100% - 40px ) ;
    width: calc( 100% - 40px );
    padding: 20px;

  .el-input{
    width: 250px!important;
  }

  }
</style>
