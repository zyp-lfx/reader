<template>
  <div class="dialog-mian">
    <skuBox></skuBox>
    <div class="dialog-box">
      <div class="title">新增商品
        <i class="el-icon-close" @click="closeDialog()"></i>
      </div>
      <el-form ref="form" class="form-box" label-width="120px">
        <el-form-item label="商品名称">
          <el-input v-model="formData.name"> </el-input>
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
          >
            <i class="el-icon-plus" ></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </el-form-item>
        <el-form-item label="商品价格">
          <el-input v-model="formData.price"> </el-input>
        </el-form-item>
        <el-form-item label="商品分类">
          <el-input v-model="formData.goodsClassId"> </el-input>
        </el-form-item>
        <el-form-item label="是否开启库存">
          <span></span>
          <el-switch v-model="delivery"></el-switch>
          <el-input class="kunc" v-model="formData.balance"> </el-input>
        </el-form-item>
        <el-form-item label="规格列表">
          <p class="addAttr"><i class="el-icon-plus"></i>添加规格</p>
          <p class="attrList">颜色:红，尺寸:175 <i class="el-icon-delete"></i></p>
          <p class="attrList">颜色:红，尺寸:175</p>
          <p class="attrList">颜色:红，尺寸:175</p>
          <p class="attrList">颜色:红，尺寸:175</p>
        </el-form-item>
        <el-form-item label="商品简介">
            <wangeditor :content="formData.goodsInfo" :catchData="catchData"></wangeditor>
        </el-form-item>
      </el-form>
      <div class="dialog-footer">
        <el-button type="primary" @click="submit()">确认</el-button>
        <el-button>取消</el-button>
      </div>
    </div>
  </div>
</template>

<script>
    import wangeditor from '../plugin/wangeditor'
    const uploadUrl='http://localhost:3000/upload/'
    import  skuBox from './skuDialog'
    export default {
        name: "goodsDetailModel",
        props:{
          editData:""
        },
        data() {
          return {
            dialogImageUrl: '',
            dialogVisible: false,
            formData:{
              name:'',
              imgList:[],
              price:'',
              goodsClassId:'',
              balance:'',
              goodsAttrId:'',
              goodsInfo:''
            },
            fileList:[],
            uploadBtn:true,
            delivery:true,
            deliattr:true,
            content:''
          };
        },
        components: {
          wangeditor,
          skuBox
        },
        created(){
          console.log(uploadUrl)
          this.formData=Object.assign({},this.editData)
          if(this.formData.imgList){
            this.formData.imgList=this.formData.imgList.split(',')
            this.formData.imgList.map(item=>{
              this.fileList.push({name:item,url:uploadUrl+item})
            })
          }else{
            this.formData.imgList=[]
          }

          console.log(this.formData)
        },
        methods: {
          closeDialog(){
            this.$emit('closeGoods',false)
          },
          catchData(value){
            this.formData.goodsInfo=value      //在这里接受子组件传过来的参数，赋值给data里的参数
          },
          handleRemove(file, fileList) {
            this.formData.imgList.map((e,index)=>{
              if(e==file.response.filename){
                console.log(index)
                this.formData.imgList.splice(index,1)
              }
            })
            console.log(this.formData.imgList)

          },
          handleSuccess(e,file,fileList){
            this.formData.imgList.push(file.response.filename)
            console.log(this.formData.imgList)
            console.log(file)
            console.log(fileList)
          },
          handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
          },
          handleBefore(){
            if(this.formData.imgList.length>=3){
              return false
            }
          },
          submit(){
            this.formData.imgList=this.formData.imgList.join(',')
            this.$api.POST('/goods/addGoods',this.formData).then(res=>{
              if(res.data.code==1){
                this.closeDialog()
                this.$message.success('新增成功！')
              }
            })

          }
        }
      }
</script>

<style scoped lang="less">

  .dialog-mian{
    position: absolute;
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 1;
    .kunc{
      width: 100px!important;
    }
    .form-box{
      max-height: 780px;
      margin-bottom: 10px;
      overflow: auto;
      border-bottom: 1px solid #d8d8d8;
    }
    .el-textarea{
      width: 500px!important;
      height: 100px!important;

    }
    .addAttr{
      color:#409EFF ;
      font-size: 16px;
      padding-left: 10px;
      width: 150px;
      cursor: pointer;
    }
    .dialog-footer{
      text-align: center;
    }
    .attrList{
      border-left: 2px solid #409EFF;
      line-height: 20px;
      margin: 10px;
      padding: 5px 10px;
      color: #333;
      background: linear-gradient(to right,  #d8d8d8, #fefefd);
      i{
        float: right;
        font-size: 18px;
      }
    }
    .avatar-uploader-icon {
      border: 1px dashed #d9d9d9!important;

      font-size: 28px;
      color: #8c939d;
      width: 150px;
      height: 150px;
      line-height: 150px;
      text-align: center;
    }
    .avatar {
      width: 150px;
      height: 150px;
      display: block;
      border: 1px dashed #d9d9d9 !important;
    }
    .dialog-box{
      height: 100%;
      width: 100%;
      position: absolute;
      background: #fff;

      .el-input{
        width: 300px;
      }
      .el-form{
        padding: 10px;
      }
      .title{
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #e8e8e8;
        color: #333;
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        .el-icon-close{
          float: right;
          padding-top: 5px;
          padding-right: 5px;
        }
      }
    }
  }
</style>
