<template>
    <div class="dialog-mian">
      <div class="dialog-content">
        <div class="dialog-title">
          新增规格
          <i class="el-icon-close" ></i>
        </div>

        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "skuDialog"
    }
</script>

<style scoped lang="less">
  .dialog-mian{
    position: absolute;
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 99999;
    .dialog-content{
      width: 500px;
      height: 700px;
      background: #fff;
      border-radius: 10px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -400px;
      margin-left: -250px;
    }
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
</style>
