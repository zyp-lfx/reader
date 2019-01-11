<template>
    <div class="tree-content">
      <div class="treeTable" style="">
        <div class="treeTabletr">
          <div v-for="item in columns" class="box-cell">
            <div class="node-box">{{item.text}}</div>
          </div>
        </div>
      </div>
      <div>
        <!--<div v-for="item in tableData" class="table-box" >-->
          <!--<span @click="showChildren(item)" v-if="item.children&&item.children.length&&(item.lev == 1||(item.parent&&item.parent.show))" :class="item.show?'haschildren show':'haschildren disshow'" :style="{'left':item.show?(item.lev*20-18+'px'):(item.lev*20-12+'px')}"></span>-->
          <!--<div  class="treeTabletr">-->
            <!--<slot :row="item">-->
            <!--</slot>-->

          <!--</div>-->

        <!--</div>-->
        <div v-for="(item,index) in dataress" class="table-box" >
          <span @click="showChildren(index)" v-if="item.children&&item.children.length&&(item._level == 1||(item.parent&&item.parent._expanded&&item.parent._show))" :class="item._expanded?'haschildren show':'haschildren disshow'" :style="{'left':item._expanded?(item._level*20-18+'px'):(item._level*20-12+'px')}"></span>
          <div v-if="item.parent?(item.parent._expanded && item.parent._show):true" class="treeTabletr">
            <slot :row="item">
            </slot>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import  treeToArray from './eq.js'
    export default {
        name: "treetable",
        props:{
          data:{},
          columns:''
        },
      computed: {
        // 格式化数据源

        dataress: function() {
          let tmp
          if (!Array.isArray(this.data)) {
            tmp = [this.data]
          } else {
            tmp = this.data
          }
          const func = treeToArray
          const args = Array.concat([tmp, this.expandAll])
          return func.apply(null, args)
        }
      },
        created(){
          console.log(this.colmuns)
        },
        mounted(){
          console.log(this.$children)
          console.log(this.dataress)

        },
        data() {
          return {
            datares:[],
            expandAll:false,
            tableData: [{
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄',
              children:[
                { date: '2016-05-02',
                  name: '王小虎1',
                  address: '上海市普陀区金沙江路 1518 弄',
                  children:[
                    { date: '2016-05-02',
                      name: '王小虎1',
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
                    },
                    { date: '2016-05-02',
                      name: '王小虎2',
                      address: '上海市普陀区金沙江路 1518 弄'
                    }
                  ]
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
      },
      methods:{
        showChildren(index){
          this.dataress[index]._expanded=!this.dataress[index]._expanded
        },

      }
    }
</script>

<style scoped lang="less">
  .tree-content{
    border-left: 1px solid #ebeef5;
    border-top: 1px solid #ebeef5;
    font-size: 14px;
    color: #606266;
  }
  .node-box{
    line-height: 23px;
    padding-left: 10px;
  }
  .haschildren{
   display: inline-block;
    position: absolute;
    width: 0px;
    height: 0px;

    /*border-style: solid;*/
    /*border-width: 0 0 10px 10px;*/
    /*border-color: transparent transparent #666666 transparent;*/
  }
  .disshow{
    top: 18px;

    border-width: 8px 0 8px 8px;
    border-style:solid;
    border-color:transparent#666666   transparent #666666;
  }
  .show{
    top: 22px;

    border-width:8px 8px 0  8px;
    border-style:solid;
    border-color: #666666 transparent #666666  transparent ;
  }
  .treeTable{
    display: table;
    table-layout:fixed;
    width: 100%;
    text-align: left;
  }
  .table-box{
    display: table;
    table-layout:fixed;
    width: 100%;
    text-align: left;
    position: relative;

  }
  .treeTabletr:hover{
    background: #eee;
  }

  .treeTabletr{
    display:table-row ;
    .box-cell{
      padding: 14px 0;
      border-bottom: 1px solid #ebeef5;
      border-right: 1px solid #ebeef5;
      display: table-cell;
    }
  }

</style>
