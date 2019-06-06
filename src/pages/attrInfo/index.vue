<template>
  <div class="attr">
    <attrModel v-if="showDialogBtn"   @closeDialog="closeDialog"></attrModel>
    <div class="menu-content">
      <div class="menu-top">
        <span>规格名称:</span>
        <el-autocomplete
          class="inline-input"
          placeholder="请输入内容"
          clearable
        ></el-autocomplete>

        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <el-button class="right" type="primary"  icon="el-icon-plus" @click="showDialog">新增</el-button>
      </div>
      <template>
        <el-table
          :data="tableData"
          class="attr-table"
          style="width: 100%"
          :default-sort = "{prop: 'date', order: 'descending'}"
        >
          <el-table-column
            prop="name"
            label="规格名称"
            sortable
            width="180">
          </el-table-column>
          <el-table-column
            label="规格类别"
            sortable
           >
            <template slot-scope="scope">
              <span class="attrList" v-for="item in scope.row.children">{{item.name}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="操作"
            width="180"
          >
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                icon='el-icon-edit-outline'
              ></el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
      <template>
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
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
          showDialogBtn:false,
          tableData:[]
        }
      },
      created(){
          this.$api.GET('/attr/getAttr',{}).then(res=>{
            this.tableData=res.data.data
            console.log(this.tableData)
          })
      },
      methods:{
        showDialog(){
          this.showDialogBtn=true
        },
        closeDialog(){
          this.showDialogBtn=false
        }
      }
    }
</script>
 i<style scoped lang="less">
  .attr-table{
    padding: 20px;
  }
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
  .attrList{
    padding: 5px;
    display: inline-block;
    font-size: 14px;
  }

</style>
