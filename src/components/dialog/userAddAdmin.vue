<template>
    <div class="dialog">
      <div class="addUserAdmin-box">
        <h3>配置角色
          <i class="el-icon-close" @click="closeDialog()"></i>
        </h3>
        <div class="addUserAdmin-center">
          <el-radio-group v-model="adminId" @change="checkChange">
            <el-radio :label="item._id" v-for="item in checkArr" :key="item">{{item.name}}</el-radio>
          </el-radio-group>
        </div>
        <div class="btn-group">
          <span @click="showCheck">确认</span>
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
            adminName:'',
            checkArr:[],
            c:[]
          }
        },
      created(){
          this.$api.GET('/user/getAdminByUserId/',{id:this.userId}).then(res=>{
            console.log(res)
            this.checkArr=res.data.data
          })
      },
      methods:{
        checkChange(e){
          console.log(e)
        },
        showCheck(){
          this.checkArr.map(res=>{
            if(res._id==this.adminId){
              this.adminName=res.name
            }
          })
          this.$api.POST('user/updataById/',{id:this.userId,adminId:this.adminId ,adminName:this.adminName}).then(res=>{
            console.log(res)
          })
        }
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
</style>
