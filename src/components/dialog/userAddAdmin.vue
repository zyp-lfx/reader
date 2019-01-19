<template>
    <div class="dialog">
      <div class="addUserAdmin-box">
        <h3>配置角色
          <i class="el-icon-close" @click="closeDialog()"></i>
        </h3>
        <div class="addUserAdmin-center">
          <el-radio-group v-model="adminId">
            <el-radio :label="item._id" v-for="item in cheackArr">{{item.name}}</el-radio>

          </el-radio-group>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "userAddAdmin",
        props:{
          userId:''
        },
        data(){
          return{
            adminId:'',
            cheackArr:[]
          }
        },
      created(){
          this.$api.GET('/user/getAdminByUserId/',{id:this.userId}).then(res=>{
            console.log(res)
            this.cheackArr=res.data.data
          })
      }
    }
</script>

<style scoped lang="less">
  .addUserAdmin-box{
    width: 400px;
    height: 600px;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -350px;
    margin-left: -200px;
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
    .addUserAdmin-center{
      height: 450px;
      overflow-y: auto;
      padding: 10px;
      .el-radio{
        display: block;
        margin: 10px;
      }
    }
  }
</style>
