<template>
  <div class="detail-content">
    <addClass v-if="flagAdd" @closeAdd="closeAdd"></addClass>
    <div class="top-search">
      <span>分类名称:</span>
      <el-input    clearable placeholder="请输入内容"></el-input>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
      <el-button class="right" type="primary" icon="el-icon-plus" @click="showAdd()">新增</el-button>
    </div>
      <template>
        <el-table
          style="margin-top: 20px;text-align: center"
          :data="tableData"
          border
          lazy
          >
          <el-table-column prop="sort" label="排序"></el-table-column>
          <el-table-column prop="name" label="分类名称"></el-table-column>
          <el-table-column  label="级别">
            <template slot-scope="rowsData">
              {{rowsData.row.attachId?'级别二':'级别一'}}
            </template>
          </el-table-column>
          <el-table-column prop="unit" label="数量单位"></el-table-column>
          <el-table-column label="是否显示">
            <template slot-scope="rowsData">
              <el-switch :value="rowsData.row.show">
              </el-switch>

            </template>
          </el-table-column>
          <el-table-column label="设置">
            <template slot-scope="rowsData">
              <el-button v-show="!rowsData.row.attachId" @click="gotoNext(rowsData.row)">查看下级</el-button>
              <el-button v-show="rowsData.row.attachId" @click="gotoNext(rowsData.row)">{{rowsData.row.attachId?'返回上级':'查看下级'}}</el-button>
              <el-button v-if="rowsData.row.attachId">{{rowsData.row.attachId?'转移商品':''}}</el-button>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="rowsData">
              <el-button>编辑</el-button>
              <el-button>删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
      <!--<template>-->
        <!--<el-pagination-->
          <!--background-->
          <!--layout="prev, pager, next"-->
          <!--:total="1000">-->
        <!--</el-pagination>-->
      <!--</template>-->
  </div>
</template>

<script>
  import addClass from '@/components/dialog/addClass'
  export default {
    name: "goodsClass",
    components:{
      addClass,
    },
    data(){
      return{
        tableData:[],
        attachId:'',
        flagAdd:false,
        columns:[
          {text:'编号'},
          {text:'分类名称'},
          {text:'级别'},
          {text:'商品数量'},
          {text:'数量单位'},
          {text:'是否显示'},
          {text:'排序'},
          {text:'设置'},
          {text:'操作'}
        ],
        query:{
          pages:1,
          rows:10,
          name:'',
          attachId:""
        }
      }
    },
    created(){
      this.getList(this.query)
    },
    methods:{
      gotoNext(row){
        if(!row.attachId){
          this.query.attachId=row._id
        }else{
          this.query.attachId=""
        }
        this.getList(this.query)
      },
      getList(data){
        this.$api.GET('/goodClass/get',data).then(res=>{
          console.log(res)
          this.tableData=res.data.data.rows
        })
      },
      closeAdd(){
        this.flagAdd=false
      },
      showAdd(){
        this.flagAdd=true

      }
    }
  }
</script>

<style scoped lang="less">
  .table-box{
    padding: 20px;
    .el-button{
      margin-left: 10px;
    }
  }
  .detail-content{
    height:calc( 100% - 40px ) ;
    width: calc( 100% - 40px );
    padding: 20px;

    .el-input{
      width: 250px!important;
    }

  }
</style>
