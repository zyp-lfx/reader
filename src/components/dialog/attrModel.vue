<template>
    <div class="dialog-mian">
      <div class="dialog-content">
        <div class="dialog-title">
          新增规格
          <i class="el-icon-close" ></i>
        </div>
        <div class="form-box">
            <el-form label-width="70px">
              <el-form-item label="规格名称">
                  <el-input v-model="attrName"></el-input>
              </el-form-item>
              <el-form-item label="规格类别">
                <el-input class="attrClass" v-model="attrClass">
                </el-input>
                <el-button type="primary" @click="sure">确认</el-button>
              </el-form-item>
            </el-form>
            <div class="attr-child">
              <span v-for="(item,index) in attrlist" :key="index">{{item.name}}<i class="el-icon-error" @click="delAttr(index)"></i></span>
            </div>
        </div>
        <div class="dialog-footer">
          <el-button type="primary" @click="submit()">确认</el-button>
          <el-button>取消</el-button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "attrModel",
        data(){
            return{
              attrName:'',
              attrClass:'',
              attrlist:[]
            }
        },
      methods:{
        closeDialog(){
          this.$emit('closeDialog',false)
        },
        sure(){
          if(!this.attrClass){
            this.$message.error('规格类别不能为空')
            return false
          }
          this.attrlist.push({name:this.attrClass,attrName:this.attrName})
          this.attrClass=''
        },
        submit(){
          console.log({
            name:this.attrName,
            attrList:this.attrlist
          })
          this.$api.POSTARR('/attr/add',{
            name:this.attrName,
            attrList:this.attrlist
          }).then(res=>{
              if(res.data.code==1){
                this.closeDialog()
                this.$message.success('新增成功！')
              }
          })
        },
        delAttr(idx){
          console.log(idx)
          this.attrlist.splice(idx,1)
        }
      }
    }
</script>

<style scoped lang="less">
  .attrClass{
    width: 196px;
  }
  .dialog-footer{
    text-align: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
  }
  .form-box{
    padding: 10px 30px;
  }

  .dialog-mian{
    position: absolute;
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 99;
    .attr-child{
      padding-left: 10px;
      color: #666;
      font-size: 0;
      span{
        padding: 5px;
        display: inline-block;
        font-size: 12px;

        border: 1px solid #1989fa;
        border-radius: 10px;
        position: relative;
        margin: 5px 10px 0 0;
        i{
         position: absolute;
          right: -5px;
          top: -5px;
        }
      }
    }
    .dialog-content{
      min-height: 300px;
      width: 400px;
      background: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      padding-bottom: 50px;
      margin-left: -200px;
      margin-top: -400px;
      border-radius: 10px;
      .dialog-title{
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        border-bottom: 1px solid #eee;
        .el-icon-close{
          float: right;
          padding-top: 5px;
          padding-right: 5px;
        }
      }
    }
  }
</style>
