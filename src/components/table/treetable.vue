<template>
    <div class="tree-content">
      <div class="treeTable">

      </div>
      <slot>
      </slot>
    </div>
</template>

<script>
    export default {
        name: "treetable",
        data() {
          return {
            colmus:[
              {text:'菜单名称',source:'name'},
              {text:'创建日期',source:'date'},
              {text:'菜单地址',source:'address'},
              {text:'操作',source:'name'}
            ],
            tableData: [{
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄',
              children:[
                { date: '2016-05-02',
                  name: '王小虎1',
                  address: '上海市普陀区金沙江路 1518 弄'
                },
                { date: '2016-05-02',
                  name: '王小虎2',
                  address: '上海市普陀区金沙江路 1518 弄'
                }
              ]
            }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1517 弄'
            }, {
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄'
            }]
          }
      }
    }
</script>

<style scoped lang="less">
  .treeTable{
    font-size: 0;
  }
  .colmus{
    display: inline-block;
    font-size: 16px;
    vertical-align: top;
  }
</style>
