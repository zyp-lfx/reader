<template>
    <div class="dialog">
        <div class="dialog-treebox">
          <h3>菜单配置
            <i class="el-icon-close" @click="closeDialog()"></i>
          </h3>
          <el-tree
            :data="data"
            :show-checkbox="true"
            node-key="_id"
            ref="tree"
            default-expand-all
            :default-checked-keys="checkNode"
            :props="defaultProps">
          </el-tree>
          <div class="btn-group">
            <span @click="showCheck">确认</span>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "treeMenu",
        props:{
            data:'',
            checkTree:''
        },
      data(){
          return{
            defaultProps: {
              children: 'children',
              label: 'name'
            },
            checkNode:[]
          }
      },
      mounted(){
        console.log(this.checkTree)
        this.checkTree.map(res=>{
          this.checkNode.push(res._id)
        })
        this.$refs.tree.setCheckedKeys(this.checkNode)
        console.log(this.checkNode)

      },
      methods:{
        closeDialog(){
          this.$emit('showtree')
        },
        showCheck(){
          var checkTree = this.$refs.tree.getCheckedNodes()
          console.log(checkTree)

          this.$emit('showtree',{data:checkTree})
          // this.$api.POST('/adminUser/uptateAdminById')
        }
      }
    }
</script>

<style scoped lang="less">
  .dialog-treebox{
    width: 400px;
    height: 600px;
    position: absolute;
    top:50%;
    left: 50%;
    margin-top: -350px;
    margin-left: -200px;
    background: #fff;
    overflow-y: auto;
    border-radius: 10px;
    h3{
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-bottom: 1px solid #d8d8d8;
      i{
        position: absolute;
        top: 10px;
        right: 10px;
      }
    }
    .el-tree{
      margin: 20px;
      max-height: 450px;
      overflow-y: auto;
    }
    .btn-group{
      height: 60px;
      width: 100%;
      position: absolute;
      bottom: 0;
      text-align: center;
      border-top: 1px solid #d8d8d8;
      span{
        width: 70%;
        height: 40px;
        display: inline-block;
        border-radius: 5px;
        background: #1064e1;
        line-height: 40px;
        margin-top: 10px;
        font-size: 16px;
        color: #fff;
      }
      span:hover{
        background: #148de1;
      }
    }
  }
</style>
