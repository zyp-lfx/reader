<template>
    <div class="tree-content">
      <div class="treeTable" style="">
        <div class="treeTabletr">
          <div v-for="item in colmus" class="box-cell">
            <div class="node-box">{{item}}</div>
          </div>
        </div>
      </div>
      <div>
        <div v-for="item in data" class="table-box" >
          <div class="treeTabletr" >
            <slot :row="data[0]">
            </slot>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "treetable",
        props:{
          data:{}
        },
        mounted(){
          var result=[]
          var num=0
          function treeToArr(data,parent){
            var parent =Object.assign({},parent)
            parent.show=false
            delete parent.parent
            num++
            console.log(data)
            data.map(res=>{
              var newRes =Object.assign({},res)
              console.log(newRes)
              newRes.lev=num
              newRes.parent=parent
              result.push(newRes)
              if(newRes.children){
                treeToArr(newRes.children,newRes)
              }
            })
            num--
          }
          treeToArr(this.tableData)
          console.log(result)
          console.log(this.tableData)
          for (var i=0;i<this.$children.length;i++){
            // this.colmus.push(this.$children[i].$attrs.label)
            var flg= false
            this.colmus.map(res=>{
              if(res==this.$children[i].$attrs.label){
                flg=true
              }
            })
            if(!flg){
              this.colmus.push(this.$children[i].$attrs.label)
            }
          }
          console.log(this.colmus)
        },
        data() {
          return {
            colmus:[],
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
    .node-box{
      line-height: 23px;
      padding-left: 20px;
    }
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
