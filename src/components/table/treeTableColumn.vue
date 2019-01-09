<template >
    <div class=" box-cell">
      <slot>
        <div class="node-box" :style="{'paddingLeft':1*20+'px'}">{{rowData[prop]}}</div>
      </slot>
    </div>
</template>

<script>
    export default {
      name: "treeTableColumn",
      props:{
        rowData:{
        },
        prop:''
      },
      created(){
          // console.log(this.$props)
      }
    }
</script>

<style scoped lang="less">
  .node-box{
    line-height: 23px;
  }

</style>
