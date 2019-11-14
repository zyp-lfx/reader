<template>
  <div class="addClass-content">
    <div class="title">新增分类
      <i class="el-icon-close" @click="close"></i>
    </div>
    <div>
      <el-form ref="form" class="form-box" v-model="formData" label-width="120px">
        <el-form-item label="分类名称" prop="name">
            <el-input v-model="formData.name"></el-input>
        </el-form-item>
        <el-form-item label="上级分类">
          <el-select v-model="formData.attachId"  filterable placeholder="请选择">
            <el-option
              v-for="(item,index) in classData"
              :key="index"
              :label="item.name"
              :value="item._id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="数量单位">
          <el-input v-model="formData.unit"></el-input>
        </el-form-item>
        <el-form-item label="排序">
          <el-input v-model="formData.sort"></el-input>
        </el-form-item>
        <el-form-item label="是否显示">
          <el-switch v-model="formData.show">
          </el-switch>
        </el-form-item>
        <el-form-item label="筛选属性">
          <div v-for="item in screen" style="padding-bottom: 20px"> +
            <!--<el-cascader></el-cascader>  -->
            <el-button  style="margin-left: 20px" @click="addScreent(-1)">删除</el-button></div>
          <div><el-button  type="primary" @click="addScreent(1)">添加</el-button></div>
        </el-form-item>
        <el-form-item label="关键词">
          <el-input v-model="formData.keyword"></el-input>
        </el-form-item>
        <el-form-item >
          <el-button type="primary" @click="subMit">提交</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
    export default {
        name: "addClass",
      data(){
          return{
            screen:1,
            classData:[],
            formData:{
              name:'',
              attachId:'',
              sort:"",
              show:false,
              screen:"",
              keyword:"",
            }
          }
      },
      created(){
        this.$api.GET('/goodClass/get',{}).then(res=>{
          this.classData=res.data.data.rows
        })
      },
      methods:{
        subMit(){
          console.log(this.formData)
          this.close()
          this.$api.POST('/goodClass/add',this.formData).then(res=>{

          })
        },
        close(){
          this.$emit('closeAdd')
        },
        addScreen(num){
          if(num<0&&this.screen==1)return
          this.screen+=num
        }
      }
    }
</script>

<style scoped>
  .form-box{
    width: 800px;
    border: 1px solid #ddd;
    margin: 20px auto;
    padding: 50px;
  }
  .title{
    height: 50px;
    line-height: 50px;
    color: #333;
    font-size: 16px;
    text-align: center;
    font-weight: bold;
  }
.addClass-content{
  position: absolute;
  z-index: 999;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #fff;
}
</style>
