<template>
  <div class="content">
    <div class="clear">
      <div class="userInfo shadow">
        <div class="content-box clear">
          <div class="left">
            <img class="userPic" src="@/assets/logo.png" alt="">
          </div>
          <div  class="left usermsg">
            <p>用户名：张三</p>
            <p>手机号：13136533662</p>
            <p>角&nbsp;&nbsp;&nbsp;&nbsp;色：系统管理员</p>
          </div>
        </div>
        <div>
          <p class="time">16:15:30</p>
          <p class="day">2018年12月28日 星期五</p>
        </div>
        <div class="clear info-num">
          <div class="left">
            <p class="p-num">10</p>
            <p class="p-tip">未处理订单</p>
          </div>
          <div class="left">
            <p class="p-num">10</p>
            <p class="p-tip">未处理消息</p>
          </div>
        </div>
      </div>
      <div class="chartInfo shadow">
        <h3>图形报表</h3>
      </div>
      <div class="tableInfo shadow">
        <h3>表格信息</h3>
      </div>
    </div>
    <div class="clear">
      <div class="msgInfo shadow">
        <h3>订单信息</h3>
      </div>
      <div class="msgInfo shadow">
        <h3>消息信息</h3>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped lang="less">
  .content{
    height: calc(100% - 120px);
    width: calc(100% - 60px);
    margin: 30px;
  }
  .userPic{
    height: 100px;
    width: 100px;
    border-radius: 50%;
    display: inline-block;
    margin:10px;
  }
  .userInfo{
    height: 420px;
    width: 400px;
    background: #fff;
    float: left;
  }
  .info-num{
    padding-top: 30px;
    div:nth-of-type(1){
      border-right: 1px solid #999;
      margin-right: -1px;
    }
    div{
      width: 50%;
      margin-top: 20px;
      text-align: center;
      .p-num{
        font-size: 50px;
        color: #333;
      }
      .p-tip{
        padding: 10px;
        color: #666;
      }
    }
  }
  .content-box{
    margin: 20px 20px 0;
    border-bottom: 1px solid #d8d8d8;
    .usermsg{
      padding-top: 10px;
      p{
        padding: 10px  0 0 20px;
        color: #333;
      }
    }
  }
  .time{
    font-size: 36px;
    text-align: center;
    font-weight: bold;
    padding: 25px 0 15px;
    color: #f04a57;
  }
  .day{
    font-size: 22px;
    color: #148de1;
    text-align: center;
  }
  .left{
    float: left;

  }
  .shadow{
    box-shadow: 0 0 2px 2px #aaaaaa ;
    border-radius: 10px;
    h3{
      height: 50px;
      border-bottom: 1px solid #d8d8d8;
      font-size: 18px;
      line-height: 50px;
      text-align: center;
      color: #333;
    }
  }
  .shadow:hover{
    box-shadow: 0 0 2px 2px #148de1;
  }
  .chartInfo{
    width: 870px;
    height:420px ;
    margin: 0 20px;
    background: #fff;
    float: left;
  }
  .tableInfo{
    width: 540px;
    height:420px ;
    background: #fff;
    float: left;
  }
  .msgInfo{
    width: 915px;
    height: 380px;
    margin-right: 20px;
    margin-top: 20px;
    background: #fff;
    float: left;
  }
  .msgInfo:nth-of-type(2){
    margin-right: 0;

  }
</style>
