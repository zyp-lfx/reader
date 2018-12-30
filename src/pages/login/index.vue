<template>
  <div class="main">
    <div class="content">
      <h3>WELCOME</h3>
      <div class="">
        <el-row>
          <el-col :span="5">
            <span>用户名：</span>
          </el-col>
          <el-col :span="19">
            <el-input v-model="formData.username" auto-complete="off"  placeholder="请输入用户名"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="5">
            <span>密&nbsp;&nbsp;&nbsp;&nbsp;码：</span>
          </el-col>
          <el-col :span="19">
            <el-input  auto-complete="off"  placeholder="请输入密码" type="password">
              <i slot="suffix" class="el-input__icon el-icon-view"></i>
            </el-input>
          </el-col>
        </el-row>
        <div class="more">
          <el-checkbox v-model="holdpass">记住密码</el-checkbox>
          <span>忘记密码</span>
          <span>注册</span>
        </div>
        <el-button type="primary" @click="login">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "index",
        data(){
          return{
            holdpass:false,
            formData:{
              username:'',
              password:'',
            }
          }
      },
      methods:{
        login(){
          console.log('登陆成功！')
          this.$router.push({path: 'home'})
        }
      }
    }
</script>

<style scoped lang="less">
  .main{
    background: url('../../assets/bg.jpg') center center no-repeat;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: relative;
    .content{
      height:260px ;
      width: 400px;
      padding: 15px;
      position: fixed;
      top: 50%;
      left: 50%;
      margin-top: -150px;
      margin-left: -200px;
      border-radius: 10px;
      background: rgba(0,0,0,0.3);
      h3{
        font-size: 24px;
        color: #fff;
        text-align: center;
        padding: 10px;
      }
      .el-col{
        span{
          color: #fff;
          text-align: right;
          display: inline-block;
        }
      }
      .el-button{
        width: 95%;
        margin-top: 5px;
        margin-left: 2.5%;
      }
      .more{
        padding: 10px 20px;
        text-align: center;
        font-size: 14px;
        color: #333;
        vertical-align: middle;
        .el-checkbox{
          vertical-align: middle;
        }
        span{
          line-height: 19px;
          color: #606266;
          vertical-align: middle;
          display: inline-block;
        }
        span:hover{
          color: #409EFF;
        }
      }
      .el-row{
        vertical-align: middle;
        padding: 10px;
        line-height: 40px;
      }
    }
  }
</style>
