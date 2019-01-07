<template>
  <div class="dialog" >
    <div class="admin-box">
      <div class="reg-tilte">新增角色
        <i class="el-icon-close" @click="closeDialog()"></i>
      </div>
      <el-form class="reg-form" :model="formData" :rules="rules" ref="ruleForm" label-width="80px">
        <el-form-item label="角色名" prop="name">
          <el-input v-model="formData.name"></el-input>
        </el-form-item>
        <el-form-item label="级别" prop="grade">
          <el-input v-model="formData.grade"></el-input>
        </el-form-item>
        <el-button type="primary" @click="subReg()">提交</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
    export default {
        name: "adminUser",
       data(){
          return{
            formData:{
              name:'',
              grade:''
            },
            rules:{
              name: [
                { required: true, message: '请输入用户名', trigger: 'blur' },
                { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
              ],
              grade:[
                {required: true, message: '请输入级别', trigger: 'blur' },
              ]
            }
          }
       },
      methods:{
        closeDialog(){
          console.log(111)
          this.$emit('showAdmin',false)
        },
        subReg() {
          var _this =this
          this.$refs.ruleForm.validate((valid) => {
            if (valid) {
              console.log(this.formData)
              _this.$api.POST('/adminUser/add',_this.formData).then(res=>{
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
  .admin-box{
    height: 280px;
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
