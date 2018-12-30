<template>
    <div>
      <tab></tab>
      <router-view></router-view>
    </div>
</template>

<script>
    import tab from '@/components/tab'
    export default {
        name: "home",
        components:{'tab':tab}
    }
</script>

<style scoped>

</style>
