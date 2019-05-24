<template>
  <div class="detail-content">
    <div class="main-box clear">
      <div class="left">
        <div class="left-header">
          <el-button class="addClass" type="primary" icon="el-icon-plus">新增分类</el-button>
        </div>
        <ul class="left-container">
          <li>2525</li>
        </ul>
      </div>
      <div class="right">
        <div class="right-header">
          <el-button class="addClass" type="primary" icon="el-icon-plus">添加商品</el-button>
        </div>
        <ul class="right-container">
          <li>
            <img src="@/assets/logo.png" alt="">
            <p class="goods-info">
              <span class="goodsTitle">普通商品</span>
              <span class="goodsMoney">¥110</span>
            </p>
            <p >
              <span class="kuc">库存 100</span>
              <span class="goodsMoney">
                <!--<i class="el-icon-upload2"></i>-->
                <i class="el-icon-download" title="下架"></i>
                <i class="el-icon-delete" title="移除"></i>
              </span>
            </p>
          </li>

        </ul>
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    name: "goodsClass"
  }
</script>

<style scoped lang="less">
  .detail-content{
    height: 100%;
    width: 100%;
    padding: 20px;
    .main-box{
      height: 100%;
      overflow: auto;
      background: #fff;
      .right-header,.left-header{
        height: 60px;
        text-align: right;
        line-height: 60px;
      }
      .right-header{
        text-align: left;
      }
      .right-container,.left-container{
        border: 1px solid #d8d8d8;
        height: calc(100% - 62px);
        overflow: auto;
      }
      .right-container{
        height: calc(100% - 62px);
      }
      .left-container li{
        height: 50px;
        text-align: left;
        padding-left: 20px;
        line-height: 50px;
      }
      .right-container li{
        height: 300px;
        width: 210px;
        margin-left: 15px;
        margin-top: 15px;
        display: inline-block;
        float: left;
        box-shadow: 0 0 2px 2px #aaaaaa ;
        border-radius: 5px;
      }
      .goodsTitle{
        font-size: 16px;
        color: #333;
        padding-left: 10px;
      }
      .goods-info{
        height: 40px;
        line-height: 40px;
      }
      .kuc{
        font-size: 14px;
        color: #666;
        padding-left: 10px;
      }
      .goodsMoney{
        font-size: 16px;
        color: red;
        float: right;
        padding-right: 10px;
      }
      .right-container li img{
        width: 210px;
        height: 210px;
        border-bottom: 1px solid #d8d8d8;
      }
      .left{
        float: left;
        height: 100%;
        width: 280px;
        margin:0 10px;
      }
      .right{
        float: left;
        width: 1420px;
        height: 100%;
      }
    }
    .el-pagination{
      text-align: center!important;
      position: absolute;
      width: 1420px;
      bottom: 60px;
    }
  }
</style>
