<template>
    <div class="main">
      <tab></tab>
      <router-view ></router-view>
    </div>
</template>

<script>
    import tab from '@/components/tab'
    export default {
        name: "home",
        components:{'tab':tab}
    }
</script>

<style scoped lang="less">
  .main{
    height: 100%;
    background: #eee;
  }
</style>
