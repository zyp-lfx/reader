<template>
    <div class="userAdmin">
      <div class="userAdmin-content">
          <div class="userAdmin-top">
            <span>角色名称:</span>
            <el-autocomplete
              class="inline-input"
              v-model="state1"
              :fetch-suggestions="querySearch"
              placeholder="请输入内容"
              @select="handleSelect"
              clearable
            ></el-autocomplete>
            <span>用户名称:</span>
            <el-input  clearable placeholder="请输入内容"></el-input>
            <span>手机号:</span>
            <el-input    clearable placeholder="请输入内容"></el-input>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
            <el-button class="right" type="primary" icon="el-icon-plus">新增</el-button>
            <el-button class="right" type="primary" icon="el-icon-upload2">导入</el-button>
            <el-button class="right" type="primary" icon="el-icon-download">导入</el-button>
          </div>
          <div class="table-box">
            <el-table
              :data="tableData"
              border
              style="width: 100%">
              <el-table-column
                prop="date"
                label="日期"
                sortable
                >
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                sortable
                >
              </el-table-column>
              <el-table-column
                prop="name"
                label="性别"
              >
              </el-table-column>
              <el-table-column
                prop="address"
                label="手机">
              </el-table-column>
              <el-table-column
                prop="address"
                label="角色"
                sortable
              >
              </el-table-column>
              <el-table-column
                label="操作">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type="primary"
                    icon='el-icon-edit-outline'
                    ></el-button>
                  <el-button
                    size="mini"
                    type="primary"
                    icon='el-icon-view'
                  ></el-button>
                  <el-button
                    size="mini"
                    type="danger" icon='el-icon-delete'
                   ></el-button>

                </template>
              </el-table-column>
            </el-table>
          </div>
          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
      </div>
    </div>
</template>

<script>
   const arrData= [
     { "value": "系统管理员", "id": "1" },
     { "value": "角色一", "id": "2" },
     { "value": "角色二一", "id": "4" },
     { "value": "角色三", "id": "3" },
     { "value": "角色四", "id": "5" },
     { "value": "角色五", "id": "6" }
   ]
    export default {
        name: "index",
      data(){
          return {
            state1:'',
            restaurants:arrData,
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
            }, {
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄'
            }, {
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄'
            }, {
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄'
            }, {
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄'
            }, {
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄'
            }, {
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄'
            }, {
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄'
            }]
          }
      },
      methods:{
        querySearch(queryString, cb) {
          var restaurants = this.restaurants;
          var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
          // 调用 callback 返回建议列表的数据
          cb(results);
        },
        createFilter(queryString) {
          return (restaurant) => {
            return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
          };
        },
        handleSelect(item) {
          console.log(item);
        }
      }
    }
</script>

<style scoped lang="less">
  .userAdmin{
    width: calc(100% - 40px);
    padding: 20px;
    height: calc(100% - 40px);
    .userAdmin-content{
      width: 100%;
      height: 100%;
      background: #fff;
    }
    .el-input{
      width: 220px;
    }
    .el-pagination{
      text-align: center;
      padding-top: 20px;
    }
    .table-box{
      padding: 20px;
    }
    .userAdmin-top{
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
  }
</style>
