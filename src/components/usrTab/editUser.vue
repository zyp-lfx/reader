<template>
  <div class="edit-user-cantainer">
    <div class="dialog-content">
      <div class="title">编辑用户<i class="el-icon-close" @click="closeDialog"></i>
      </div>
      <el-form class="form" ref="form" :model="formData" :rules="rules" label-width="80px">
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="formData.userName"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-input v-model="formData.sex"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="formData.phone"></el-input>
        </el-form-item>

        <el-form-item label="商品图片">
          <el-upload
            action="base/imgUpload"
            list-type="picture-card"
            :file-list="fileList"
            :on-preview="handlePictureCardPreview"
            :on-success="handleSuccess"
            :on-remove="handleRemove"
            :before-upload="handleBefore"
            :on-exceed="exceed"
            :limit="1"
          >
            <i class="el-icon-plus" ></i>
          </el-upload >
          <el-dialog >
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </el-form-item>
      </el-form>
      <div class="btn-group">
        <el-button  >取消</el-button>
        <el-button type="primary" >确认</el-button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "editUser",
      data(){
          return{
            dialogImageUrl: '',
            dialogVisible: false,
            showUpload:false,
            formData:{
              userName:"",
              sex:"",
              phone:""
            },
            fileList:[{
              name:'sda',
              url:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2477613277,471706849&fm=58',
            }],
            rules:{
              userName:[{ required: true, message: '请输入用户名', trigger: 'blur' }],
              sex:[{ required: true, message: '请选择性别', trigger: 'blur' }],
              phone:[{ required: true, message: '请输入手机号', trigger: 'blur' }]
            }
          }
      },
      computed:{

      },
      methods:{
        closeDialog(){
          this.$emit('close')
        },
        handleRemove(file, fileList) {
          this.dialogImageUrl = "";
          this.showUpload= false;

        },
        handleSuccess(e,file,fileList){
          this.showUpload= true;
          this.formData.avatar=fileList.filename.response.filename
        },
        handlePictureCardPreview(file) {
          this.dialogImageUrl = file.url;
        },
        handleBefore(){
          console.log(this.dialogImageUrl)
        },
        exceed(){
        }
      }
    }
</script>

<style scoped>
  .el-icon-close{
    position: absolute;
    top: 10px;
    right: 10px;
  }
  .btn-group{
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .sure{
    background:#409EFF;
    color: #fff;
  }

  .form{
    padding-top: 20px;
  }
  .title{
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    color: #333;
    border-bottom: 1px solid #ddd;
  }
  .dialog-content .el-input{
    width: 300px;
  }
  .dialog-content{
    width: 430px;
    height: 530px;
    background: #fff;
    position: absolute;
    left: 50%;
    top:50%;
    margin-left: -250px;
    margin-top: -300px;
    border-radius: 10px;
  }
  .edit-user-cantainer{
    position: fixed;
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,0.3);
    z-index:1000;
    top: 0;
    left: 0;
  }
</style>
