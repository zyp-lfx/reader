<template>
  <div class="userTab-main">
    <editUser @close="closeEdit" v-if="showEdit"></editUser>
    <el-breadcrumb class="breadcrumb">
      <el-breadcrumb-item v-for="(item,index) in routeList" :key="index">{{item.meta.title}}</el-breadcrumb-item>
  </el-breadcrumb>
  <div class="userInfo-tab">
    <div class="time">{{gettime}}</div>
    <img @click="showUserDialig" class="userPic" src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2477613277,471706849&fm=58"/>
  </div>
    <div class="user-do" v-show="showUserDo">
      <div class="trangle"></div>
      <div class="user-do-list">退出登录</div>
      <div  class="user-do-list" @click="showEditFn">修改信息</div>
    </div>
  </div>
</template>

<script>
  import editUser from './editUser'
    export default {
        name: "userTab",
      components:{
        editUser,
      },
      data(){
          return{
            showUserDo:false,
            showEdit:false,
            gettime:"",
          }
      },
      computed:{

        routeList:function () {
          var data=[]
          data= this.$route.matched
          console.log(this.$route.matched,'++++++++++++++++')
          return data
        }
      },
      created(){
          this.currentTime()
      },
      methods:{
        getTime:function(){
          var _this = this;
          let yy = new Date().getFullYear();
          let mm = new Date().getMonth()+1;
          let dd = new Date().getDate();
          let hh = new Date().getHours();
          let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
          let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
          _this.gettime = yy+'-'+mm+'-'+dd+' '+hh+':'+mf+':'+ss;
        },
        showUserDialig(){
          this.showUserDo=!this.showUserDo
          var _this =this
          setTimeout(function () {
            _this.showUserDo=false
          },5000)

        },
        currentTime(){
          setInterval(this.getTime,500)
        },
        showEditFn(){
          this.showEdit=true
          this.showUserDo=false
        },
        closeEdit(){
          this.showEdit=false
        }
      }
    }
</script>

<style scoped lang="less">

.userTab-main{
  background: #fff;
  height: 50px;
  border-bottom: 1px solid #ddd;
  line-height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: relative;
}
.time{
  color: #666;
  font-size: 14px;
  padding-right: 20px;
}
.userInfo-tab{
  display: flex;
  align-items: center;
}
  .userPic{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 30px;
    border:1px solid #ddd;
  }
  .user-do{
    position: absolute;
    right: 20px;
    width: 100px;
    height: 80px;
    background: #fff;
    z-index: 999;
    top: 60px;
    border-radius: 5px;
    box-shadow:  0px 0px 10px rgba(0, 0, 0, 0.25);
    font-size: 14px;
    text-align: center;
    line-height: 40px;
    color: #666;
    cursor: pointer;
  }
  .user-do-list:hover{
    color: #409EFF;
  }
  .trangle{
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid #fff;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    position: absolute;
    top: -16px;
    left: 42px;

  }
</style>
