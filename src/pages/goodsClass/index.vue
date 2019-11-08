<template>
  <div class="detail-content">
    <div class="top-search">
      <span>分类名称:</span>
      <el-input    clearable placeholder="请输入内容"></el-input>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
      <el-button class="right" type="primary" icon="el-icon-plus" @click="showGoods()">新增</el-button>
    </div>
    <div class="type-list">
      <template>
        <el-table
          :data="tableData"
          class="attr-table"
          style="width: 100%"
          :default-sort = "{prop: 'date', order: 'descending'}"
        >
          <el-table-column
            prop="name"
            label="分类名称"
            sortable
            width="180">
          </el-table-column>
          <el-table-column
            label="规格属性"
            sortable
          >
            <template slot-scope="scope">
            </template>
          </el-table-column>
          <el-table-column
            label="分类标签"
            width="180"
          >
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                icon='el-icon-edit-outline'
              ></el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
      <template>
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </template>
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
    .el-input{
      width: 250px!important;
    }

  }
</style>
