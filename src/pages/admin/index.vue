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
        <div id="barChart" class="charts" ></div>
        <div id="pieChart" class="charts" ></div>
      </div>
      <div class="tableInfo shadow">
        <h3>表格信息</h3>
        <el-table
          :data="tableData3"
          class="tablemsg"
          max-height="500"
          border
          >
          <el-table-column
            prop="date"
            label="日期"
            width="130">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="130">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="clear">
      <div class="msgInfo shadow">
        <h3>订单信息</h3>
        <p class="msg-p first">
          <span>1</span>
          <span>用360预览的时候正常的 在IE8上面就显示成这样了</span>
          <span>2018.10.28 10:22:10</span>
          <span>来源于xxxxx</span>
          <span class="newMsg">new</span>
        </p>
        <p class="msg-p first">
          <span>2</span>
          <span>用360预览的时候正常的 在IE8上面就显示成这样了</span>
          <span>2018.10.28 10:22:10</span>
          <span>来源于xxxxx</span>
          <span class="newMsg">new</span>

        </p>
        <p class="msg-p first">
          <span>3</span>
          <span>用360预览的时候正常的 在IE8上面就显示成这样了</span>
          <span>2018.10.28 10:22:10</span>
          <span>来源于xxxxx</span>
          <span class="newMsg">new</span>
        </p>
        <p class="msg-p first">
          <span>4</span>
          <span>用360预览的时候正常的 在IE8上面就显示成这样了</span>
          <span>2018.10.28 10:22:10</span>
          <span>来源于xxxxx</span>
          <span class="newMsg">new</span>
        </p>
        <p class="msg-p read">
          <span>5</span>
          <span>用360预览的时候正常的 在IE8上面就显示成这样了</span>
          <span>2018.10.28 10:22:10</span>
          <span>来源于xxxxx</span>
        </p>
        <p class="msg-p read">
          <span>6</span>
          <span>用360预览的时候正常的 在IE8上面就显示成这样了</span>
          <span>2018.10.28 10:22:10</span>
          <span>来源于xxxxx</span>
        </p>
        <p class="msg-p read">
          <span>7</span>
          <span>用360预览的时候正常的 在IE8上面就显示成这样了</span>
          <span>2018.10.28 10:22:10</span>
          <span>来源于xxxxx</span>
        </p>
      </div>
      <div class="msgInfo shadow">
        <h3>消息信息</h3>
        <p class="msg-p first">
          <span>1</span>
          <span>用360预览的时候正常的 在IE8上面就显示成这样了</span>
          <span>2018.10.28 10:22:10</span>
          <span>来源于xxxxx</span>
          <span class="newMsg">new</span>
        </p>
        <p class="msg-p first">
          <span>2</span>
          <span>用360预览的时候正常的 在IE8上面就显示成这样了</span>
          <span>2018.10.28 10:22:10</span>
          <span>来源于xxxxx</span>
          <span class="newMsg">new</span>

        </p>
        <p class="msg-p first">
          <span>3</span>
          <span>用360预览的时候正常的 在IE8上面就显示成这样了</span>
          <span>2018.10.28 10:22:10</span>
          <span>来源于xxxxx</span>
          <span class="newMsg">new</span>
        </p>
        <p class="msg-p first">
          <span>4</span>
          <span>用360预览的时候正常的 在IE8上面就显示成这样了</span>
          <span>2018.10.28 10:22:10</span>
          <span>来源于xxxxx</span>
          <span class="newMsg">new</span>
        </p>
        <p class="msg-p read">
          <span>5</span>
          <span>用360预览的时候正常的 在IE8上面就显示成这样了</span>
          <span>2018.10.28 10:22:10</span>
          <span>来源于xxxxx</span>
        </p>
        <p class="msg-p read">
          <span>6</span>
          <span>用360预览的时候正常的 在IE8上面就显示成这样了</span>
          <span>2018.10.28 10:22:10</span>
          <span>来源于xxxxx</span>
        </p>
        <p class="msg-p read">
          <span>7</span>
          <span>用360预览的时候正常的 在IE8上面就显示成这样了</span>
          <span>2018.10.28 10:22:10</span>
          <span>来源于xxxxx</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "index",
        data(){
          return{
            barOption:'',
            pieOption:'',
            tableData3: [{
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-08',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-06',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-07',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }]
          }
        },
      mounted(){
        this.barOption={
          title: {
            text: '在Vue中使用echarts',
              x:'center',
              top:'10px',
              textStyle :{
              color:'#148de1',
                align:'right'
            }
          },
          tooltip: {},
          xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          legend:{
            bottom:'10px'
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        }
        this.pieOption = {
          title : {
            text: '某站点用户访问来源',
            x:'center',
            top:'10px',
            textStyle :{
              color:'#148de1',
              align:'right'
            }
          },
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            bottom: 10,
            left: 'center',
            data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
          },
          series : [
            {
              name: '访问来源',
              type: 'pie',
              radius : '50%',
              center: ['50%', '48%'],
              data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        };
        this.drawLine()
      },
      created(){


      },
      methods:{
        cellFn(){
          // return 'border-bottom: 1px solid #e8e8e8'
        },
        drawLine(){
          // 基于准备好的dom，初始化echarts实例
          let barChart = this.$echarts.init(document.getElementById('barChart'))
          let pieChart = this.$echarts.init(document.getElementById('pieChart'))
          // 绘制图表
          barChart.setOption(this.barOption);
          pieChart.setOption(this.pieOption);
        }
      }
    }
</script>

<style scoped lang="less">
  .content{
    height: calc(100% - 70px);
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
    height: 460px;
    width: 380px;
    background: #fff;
    float: left;
  }
  .charts{
    width: 480px;
    height: 360px;
    display:inline-block;
  }
  .charts:nth-of-type(2){
    width: 420px;
  }
  .info-num{
    padding-top: 40px;
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
    padding: 50px 0 0px;
    color: #f04a57;
  }
  .day{
    font-size: 22px;
    padding-top: 10px;
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
    width: 910px;
    height:460px ;
    margin: 0 20px;
    background: #fff;
    float: left;
  }
  .tableInfo{
    width: 520px;
    height:460px ;
    background: #fff;
    float: left;

    .tablemsg{
      width: 500px;
      margin: 10px;
    }
  }
  .msgInfo{
    width: 915px;
    height: 340px;
    margin-right: 20px;
    margin-top: 20px;
    background: #fff;
    float: left;
    .msg-p.read{
      color: #666;
    }
    .msg-p.first{
      color: #0d36cf;
    }
    .msg-p.sed{
      color: #0d36cf;
    }
    .msg-p.thr{
      color: #0d36cf;
    }
    .msg-p{
      padding: 10px;
      height: 20px;
      line-height: 20px;
      vertical-align: middle;
      position: relative;
      .newMsg{
        display: inline-block;
        font-size: 10px;
        height: 16px;
        line-height: 16px;
        width: 22px;
        text-align: center;
        color: #fff;
        background: #21cf08;
        border-radius: 5px;
        position: relative;
      }
      span:nth-of-type(1){
        font-size: 16px;
        padding-left: 30px;
        padding-right: 20px;
        vertical-align: middle;
      }
      span:nth-of-type(2){
        font-size: 16px;
        display: inline-block;
        max-width: 420px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        vertical-align: middle;
      }
      span:nth-of-type(3){
        float: right;
        padding-right: 60px;
        vertical-align: middle;
      }
      span:nth-of-type(4){
        float: right;
        padding-right: 50px;
        vertical-align: middle;

      }
    }
    .msg-p:hover{
      color: #e13005;
    }
  }
  .msgInfo:nth-of-type(2){
    margin-right: 0;

  }
</style>
