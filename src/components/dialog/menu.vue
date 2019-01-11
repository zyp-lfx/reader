<template>
    <div class="dialog">
        <div class="menudialog-box" >
          <h3>新增菜单
            <i class="el-icon-close" @click="closeDialog()"></i>
          </h3>
          <el-form class="reg-form" ref="ruleForm" :model="formData" label-width="80px" :rules="rules">
            <el-form-item label="菜单名" prop="name" >
              <el-input v-model="formData.name"></el-input>
            </el-form-item>
            <el-form-item label="菜单路径" prop="router" >
              <el-input v-model="formData.router"></el-input>
            </el-form-item>
            <el-button type="primary" @click="addMenu">提交</el-button>
          </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "menus",
      props:{
        attachId:String
      },
      created(){
          console.log(this.attachId)
      },
      data(){
          return {
            formData:{
              name:'',
              router:'',
              attachId: ''
            },
            rules: {
              name: [
                { required: true, message: '请输入菜单名', trigger: 'blur' },
              ],
              router:[
                { required: true,message: '请输入菜单路径', trigger: 'blur' }
              ],
            }
          }
      },
      methods:{
        addMenu(){
          var _this =this
          this.$refs.ruleForm.validate((valid) => {
            if (valid) {
              this.formData.attachId=this.attachId
              _this.$api.POST('/menu/addMenu',_this.formData).then(res=>{
               _this.$emit('closeadd',{code:1})
              })
            }
          })
        },
        closeDialog(){
          this.$emit('closeadd',{code:0})
        }
      }
    }
</script>

<style scoped lang="less">
  .menudialog-box{
    height: 260px;
    width: 400px;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -250px;
    margin-left: -250px;
    border-radius: 10px;
    .el-input{
      width: 250px;
    }
    .el-icon-close{
      float: right;
      padding-top: 5px;
      padding-right: 5px;
    }
    .el-form{
      padding: 20px;
      text-align: center;
    }
    .el-button{
      width: 330px;
    }
    h3{
      text-align: center;
      padding: 10px;
      font-size: 18px;
      color: #333;
      border-bottom: 1px solid #d8d8d8;
    }
  }
</style>
