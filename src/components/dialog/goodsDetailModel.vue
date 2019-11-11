<template>
  <div class="dialog-mian" >
    <!--<skuBox></skuBox>-->
    <cropper :file="file" v-if="showCut"></cropper>
    <div class="dialog-box">
      <div class="form-box-left">
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
              :auto-upload="false"
              list-type="picture-card"
              :file-list="fileList"
              :on-remove="handleRemove"
              :on-change="handleCrop"
            >
              <i class="el-icon-plus" ></i>
            </el-upload>
            <el-dialog >
              <img width="100%"  alt="">
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
      </div>
      <div class="flex-right">
          <div>
            <div class="phone">
              <div class="phone-content">
                <div class="block">
                  <el-carousel height="150px">
                    <el-carousel-item v-for="(item,index) in fileList" :key="index">
                      <img class="phone-img" :src="item.url" alt="">
                    </el-carousel-item>
                  </el-carousel>
                </div>
              </div>
            </div>
            <div class="dialog-footer">
            <el-button type="primary" @click="submit()">确认</el-button>
            <el-button>取消</el-button>
          </div>
          </div>
      </div>
    </div >
  </div>
</template>

<script>
  import cropper from  '../cropper.vue'
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
            showCut:false,
            file:"",
            formData:{
              name:'',
              imgList:[],
              price:'',
              goodsClassId:'',
              balance:'',
              goodsAttrId:'',
              goodsInfo:''
            },
            dialogImageUrl: '',
            fileList:[],
            uploadBtn:true,
            delivery:true,
            deliattr:true,
            content:''
          };
        },
        components: {
          wangeditor,
          skuBox,
          cropper,
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
          handleCrop (file, files) {
            this.showCut = true;
            this.file = file;
            console.log(files)
            console.log(file)
          },
          handleRemove(file, fileList) {
            this.formData.imgList.map((e,index)=>{
              if(e==file.response.filename){
                console.log(index)
                this.formData.imgList.splice(index,1)
              }
            })
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
  .close-cut{
    position: absolute;
    top: 5px;
    right: 5px;
  }
  .dom-cut{
    padding-top: 10px;
    i{
      font-style: normal;
      color: #fff;
      background: #409EFF;
      display: inline-block;
      height: 30px;
      width: 30px;
      text-align: center;
      line-height: 30px;
      margin: 10px;
      border-radius: 5px;

    }
    .cut-button{
      height: 30px!important;
      line-height: 30px!important;
      text-align: center;
      display: inline-block;
      width: 60px;
      color: #fff;
      background: #409EFF;
      font-size: 14px;
      margin: 10px;
      border-radius: 5px;
    }
  }
  .cut-dialog{
    height: 450px;
    padding: 40px 30px 20px;
    width: 375px;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -200px;
    margin-left: -200px;
    background: #fff;
    z-index: 99999;
    box-shadow:  0px 0px 10px rgba(0, 0, 0, 0.25);
  }
  .cut-img{
    height: 400px;
    width: 375px;
    flex-shrink: 0;
  }
  .phone-img{
    width: 100%;
    object-fit: cover;
  }
  .phone{
    background: url("/static/images/phone-back.png") center no-repeat;
    background-size: 100%;
    width: 330px;
    height:730px;
    margin: auto;
    text-align: center;
    margin-bottom: 30px;
  }
  .phone-content{
    height: 520px;
    width: 310px;
    background: #fff;
    margin:auto;
    display: inline-block;
    margin-top: 100px;
  }
  .flex-right{
    flex: 0.5;
  }
  .form-box-left{
    flex: 0.5;
    overflow: auto;

  }
  .form-box-left::-webkit-scrollbar {
    width: 0.2rem;
  background-color: #fff;
    opacity: 0.4;
  }
  .form-box-left::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
    border-radius: 2rem;
    background-color: #fff;
    opacity: 0.1;
  }
  .form-box-left::-webkit-scrollbar-thumb {
  border-radius: 2rem;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #666;

  }
  .dialog-mian{
    position: absolute;
    height: 100%;
    width: 100%;
    background: #fff;
    z-index: 1;
    top: 0;
    .kunc{
      width: 100px!important;
    }
    .form-box{
      margin-bottom: 40px;
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
      background: #fff;
      display: flex;
      .el-input{
        width: 300px;
      }
      .el-form{
        padding: 10px;
      }
    }
  }
  .title{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #e8e8e8;
    color: #333;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    background: #fff;
    .el-icon-close{
      float: right;
      padding-top: 5px;
      padding-right: 5px;
    }
  }

</style>
