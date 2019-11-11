<template>
  <div class="cut-dialog">
    <i class="el-icon-close close-cut" @click="closeDialog()"></i>
    <div class="cut-img">
      <vueCropper
        ref="cropper"
        :img="file.url"
        :outputSize="1"
        outputType="png"
        :autoCrop="true"
        :fixed="true"
        :fixedNumber="[375,200]"
      ></vueCropper>
    </div>
    <div class="dom-cut">
      <i>↻</i>
      <i>↺</i>
      <i class="el-icon-plus"></i>
      <i class="el-icon-minus"></i>
      <span class="cut-button" @click="uoload">上传</span>
    </div>
  </div>
</template>

<script>
  import { VueCropper }  from 'vue-cropper'

  export default {
    name: "cropper",
    data(){
      return{}
    },
    props:{
      file:{}
    },
    components:{
      VueCropper,
    },
    methods:{
      uoload(){
        var _this=this
        this.$refs.cropper.getCropBlob(data => {
          console.log(data)
          let formData = new FormData();
          formData.append('file', data, this.file.name);
          _this.$api.POST('/imgUpload',formData).then(res=>{
            console.log(res)
          })
        });
      },
      dataURItoBlob(base64Data) {
        let byteString;
        if (base64Data.split(',')[0].indexOf('base64') >= 0) { byteString = atob(base64Data.split(',')[1]); } else { byteString = unescape(base64Data.split(',')[1]); }
        let mimeString = base64Data.split(',')[0].split(':')[1].split(';')[0];
        let ia = new Uint8Array(byteString.length);
        for (let i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ia], { type: mimeString });
      },
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
</style>
