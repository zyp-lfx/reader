<template>
  <div class="menu-box">
    <div class="menu-content">
      <div class="menu-top">
        <span>菜单名称:</span>
        <el-autocomplete
          class="inline-input"
          placeholder="请输入内容"
          clearable
        ></el-autocomplete>
        <span>菜单路径:</span>
        <el-input  clearable placeholder="请输入内容"></el-input>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </div>
      <div class="table-box">
        <tree-table
          :data="tableData"
        >
          <template slot-scope="rowData">
            <treeTableColumn :rowData="rowData.row" prop="name" label="菜单名称"></treeTableColumn>
            <treeTableColumn :rowData="rowData.row" prop="address" label="菜单路径"></treeTableColumn>
            <treeTableColumn :rowData="rowData.row" prop="date"  label="创建时间"></treeTableColumn>
            <treeTableColumn :rowData="rowData.row" label="操作"></treeTableColumn>
          </template>
        </tree-table>
      </div>

    </div>

  </div>
</template>

<script>
    export default {
        name: "index",

      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            children:[
              { date: '2016-05-02',
                name: '王小虎1',
                address: '上海市普陀区金沙江路 1518 弄',
                children:[
                  { date: '2016-05-02',
                    name: '王小虎1',
                    address: '上海市普陀区金沙江路 1518 弄'
                  },
                  { date: '2016-05-02',
                    name: '王小虎2',
                    address: '上海市普陀区金沙江路 1518 弄'
                  }
                ]
              },
              { date: '2016-05-02',
                name: '王小虎2',
                address: '上海市普陀区金沙江路 1518 弄'
              }
            ]
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
      methods:{
        showlog(){
          console.log(1111111111111111111)
        }
      }
    }
</script>

<style scoped lang="less">
  .menu-box{
    width: calc(100% - 40px);
    padding: 20px;
    height: calc(100% - 40px);
    .menu-content{
      background: #fff;
      width: 100%;
      height: 100%;
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
    .table-box{
      padding: 20px;
    }
  }
</style>
