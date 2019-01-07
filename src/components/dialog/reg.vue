<template>
    <div class="dialog" >
        <div class="reg-box">
            <div class="reg-tilte">注册
              <i class="el-icon-close" @click="closeDialog()"></i>

            </div>
            <el-form class="reg-form" :model="formData" :rules="rules" ref="ruleForm" label-width="80px">
              <el-form-item label="用户名" prop="name">
                <el-input v-model="formData.name"></el-input>
              </el-form-item>
              <el-form-item label="手机号" prop="phone">
                <el-input v-model="formData.phone"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="formData.password"></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="repassword">
                <el-input type="password" v-model="formData.repassword"></el-input>
              </el-form-item>
                <el-button type="primary" @click="subReg()">提交</el-button>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "reg",
        data(){
          var phoneCheck = (rule,value,callback)=>{
            var reg = /^[1][3-9][0-9]{9}$/;
            if (value === '') {
              callback(new Error('请输入手机号'));
            } else if (!reg.test(value)) {
              callback(new Error('请输入正确的手机号'));
            } else {
              callback();
            }
          }
          var validatePass2 = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请再次输入密码'));
            } else if (value !== this.formData.password) {
              callback(new Error('两次输入密码不一致!'));
            } else {
              callback();
            }
          };
          return{
            formData:{
              name:'',
              phone:'',
              password:'',
              repassword:'',
            },
          rules: {
            name: [
              { required: true, message: '请输入用户名', trigger: 'blur' },
              { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ],
            phone: [
              {required: true, validator: phoneCheck, trigger: 'blur' }
            ],
            password:[
              {required: true, message: '请输入密码', trigger: 'blur' },
            ],
            repassword:[
              { required: true,validator: validatePass2, trigger: 'blur' }
            ],
          }

        }
        },
      created(){
      },
        methods:{
          closeDialog(){
            console.log(111)
            this.$emit('showreg',false)
          },
          subReg() {
            var _this =this
            this.$refs.ruleForm.validate((valid) => {
              if (valid) {
                console.log(this.formData)
                _this.$api.POST('/reg',_this.formData).then(res=>{
                  console.log(res)
                  if(res.data.code==1){
                    _this.$message.success('注册成功！')
                    _this.closeDialog()
                  }else{
                    this.$message.error(res.data.msg)
                    return false;
                  }
                })
              } else {
                console.log('error submit!!');
                return false;
              }
            })
          }
        }
    }
</script>

<style scoped lang="less">
  .reg-box{
    height: 400px;
    width: 400px;
    background: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -200px;
    margin-top: -250px;
    border-radius: 10px;
    .el-icon-close{
      float: right;
      padding-top: 5px;
      padding-right: 5px;
    }
    .reg-tilte{
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #d8d8d8;
      color: #333;
      font-size: 18px;
      font-weight: bold;
      text-align: center;
    }
    .reg-form{
      padding:  20px;
      text-align: center;
    }
    .el-input{
      width: 270px;
    }
    .el-button{
      width: 350px;
      margin-top: 10px;
    }
    label{
      width: 50px!important;
    }
  }
</style>
