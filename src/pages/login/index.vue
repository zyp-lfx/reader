<template>
  <div class="main">
    <reg   @showreg="cShowreg" v-if="regBtn"></reg>
    <div class="content">
      <h3>WELCOME</h3>
      <div class="">
        <el-row>
          <el-col :span="5">
            <span>手机号：</span>
          </el-col>
          <el-col :span="19">
            <el-input v-model="formData.phone" auto-complete="off"  placeholder="请输入手机号"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="5">
            <span>密&nbsp;&nbsp;&nbsp;&nbsp;码：</span>
          </el-col>
          <el-col :span="19">
            <el-input v-model="formData.password"  auto-complete="off"  placeholder="请输入密码" type="password">
              <i slot="suffix" class="el-input__icon el-icon-view"></i>
            </el-input>
          </el-col>
        </el-row>
        <div class="more">
          <el-checkbox v-model="holdpass">记住密码</el-checkbox>
          <span>忘记密码</span>
          <span @click="showReg">注册</span>
        </div>
        <el-button type="primary" @click="login">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState,mapGetters,mapActions} from 'vuex'; //先要引入

  import reg from '@/components/dialog/reg.vue'
    export default {
        name: "index",
        data(){
          return{
            holdpass:false,
            formData:{
              phone:'',
              password:'',
            },
            regBtn:false,
          }
      },
      computed: {
        ...mapState({  //这里的...是超引用，ES6的语法，意思是state里有多少属性值我可以在这里放多少属性值
          ROUTER_MENU: state => state.ROUTER.routerMenu //注意这些与上面的区别就是state.footerStatus,
          //里面定义的showFooter是指footerStatus.js里state的showFooter
        })
      },
      components:{
        reg:reg
      },
      created(){
          console.log(this.$api)

      },
      methods:{
        login(){
          console.log('登陆成功！')
          this.$api.POST('/login',this.formData).then(res=>{
            console.log(res)
            if(res.data.code==1){
              this.$message.success('登录成功！')
              this.$router.push({path: 'home'})
            }else{
              this.$message.error(res.data.msg)
            }
          })
        },
        cShowreg(data){
          console.log(data)
          this.regBtn=data
        },
        showReg(){
          this.regBtn=true
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
      margin-top: -145px;
      margin-left: -215px;
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
