<template>
  <div class="main-goods">
      <goodsDetailModel v-if="showGoodBtn"  @closeGoods="closeGoods"></goodsDetailModel>
    <div class="mian-header">
      <span>商品名称:</span>
      <el-input    clearable placeholder="请输入内容"></el-input>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
      <el-button class="right" type="primary" icon="el-icon-plus" @click="showGoods()">新增</el-button>
    </div>
    <ul class="goods-ul">
      <li>
        <img src="@/assets/logo.png" alt=""  >
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
</template>

<script>
  import goodsDetailModel from '@/components/dialog/goodsDetailModel'
    export default {
        name: "goodsDetail",
        components:{
          goodsDetailModel:goodsDetailModel
        },
      data(){
          return{
            showGoodBtn:false
          }
      },
      methods:{
        showGoods(){
          console.log(1)
          this.showGoodBtn=true
        },
        closeGoods(){
          this.showGoodBtn=false
        }
      }
    }
</script>

<style scoped lang="less">
  .main-goods{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .mian-header{
    padding: 20px;
  }
  .el-input{
    width: 250px!important;
  }

  .goods-ul{
    height: calc(100% - 200px);
    padding: 0 10px;
  }
  .goods-ul li{
    height: 300px;
    width: 220px;
    margin-left: 25px;
    margin-top: 20px;
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
  .goods-ul li img{
    width: 220px;
    height: 220px;
    border-bottom: 1px solid #d8d8d8;
  }
  .el-pagination{
    text-align: center;
  }
</style>
