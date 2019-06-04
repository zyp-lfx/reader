<template>
  <div class="attr">
    <attrModel></attrModel>
    <div class="menu-content">
      <div class="menu-top">
        <span>规格名称:</span>
        <el-autocomplete
          class="inline-input"
          placeholder="请输入内容"
          clearable
        ></el-autocomplete>

        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <el-button class="right" type="primary"  icon="el-icon-plus" >新增</el-button>
      </div>
      <template>
        <el-table
          :data="tableData"
          style="width: 100%"
          :default-sort = "{prop: 'date', order: 'descending'}"
        >
          <el-table-column
            prop="attrName"
            label="规格名称"
            sortable
            width="180">
          </el-table-column>
          <el-table-column
            prop="attrList"
            label="规格类别"
            sortable
           >
          </el-table-column>

        </el-table>
      </template>
    </div>
  </div>
</template>

<script>
  import  attrModel from '@/components/dialog/attrModel'
    export default {
        name: "index",
      components:{
        attrModel,
      },
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      },
    }
</script>

<style scoped lang="less">
  .menu-content{
    background: #fff;
  }
  .el-input{
    width: 220px;
  }
  .el-pagination{
    text-align: center;
    padding-top: 20px;
  }
  .menu-top{
    padding: 20px;
    border-bottom: 1px solid #d8d8d8;
    span{
      font-size: 16px;
      padding:0 10px;
      color: #333;
    }
    .right{
      float: right;
    }
  }

</style>
