<template>
  <div class="menu-box">
    <addMenu v-if="menuBtn" :attachId="attachId" @closeadd="closeAdd"></addMenu>
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
        <el-button class="right" type="primary"  icon="el-icon-plus" @click="addMenu()">新增</el-button>
      </div>
      <div class="table-box">
        <tree-table
          :data="tableData"
          :columns="columns"
        >
          <template slot-scope="rowData">
            <treeTableColumn :rowData="rowData.row" prop="name" ></treeTableColumn>
            <treeTableColumn :rowData="rowData.row" prop="router" ></treeTableColumn>
            <treeTableColumn :rowData="rowData.row" prop="createTime"></treeTableColumn>
            <treeTableColumn :rowData="rowData.row">
              <template >
                <el-button
                  size="mini"
                  type="primary"
                  icon='el-icon-plus'
                  @click="addMenu(rowData.row._id)"
                ></el-button>
                <el-button
                  size="mini"
                  type="primary"
                  icon='el-icon-edit-outline'
                ></el-button>
              </template>
            </treeTableColumn>
          </template>
        </tree-table>
      </div>
    </div>
  </div>
</template>
<script>
  import addMenu from '@/components/dialog/menu.vue'
    export default {
        name: "index",
      components:{
        addMenu:addMenu
      },
      data() {
        return {
          menuBtn:false,
          tableData:[],
          attachId:'',
          columns:[
            {text:'菜单名称'},
            {text:'菜单路径'},
            {text:'创建日期'},
            {text:'操作'}
          ]
        }
      },
      created(){
        this.getData()
      },
      methods:{
        getData(){
          this.$api.GET('/menu/getMenu').then(res=>{
            console.log(res)
            if(res.data.code==1){
              this.tableData=res.data.data
            }
          })
        },
        showlog(){
          console.log(1111111111111111111)
        },
        closeAdd(data){
          if(data.code==1){
            this.$message.success('新增成功！')
            this.getData()
          }
          this.attachId='';
          this.menuBtn = false;
        },
        addMenu(data){
          console.log(data)
          this.attachId=data;
          this.menuBtn = true;
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
      .el-button{
        margin-left: 10px;
      }
    }
  }
</style>
