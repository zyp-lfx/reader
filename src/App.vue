<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

  export default {
  name: 'App',

}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
*{
  margin: 0;
  padding: 0;
}
.routeTab{
  height: 100%;
  width: 100%;
  display: inline-block;
  text-decoration: none;
}
html,body{
  height: 100%;
 min-width: 1920px;
}
.dialog{
  position: absolute;
  z-index: 99;
  background: rgba(0,0,0,0.4);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.clear:before,
.clear:after {
  content: "";
  display: table;
}

.clear:after {
  clear: both;
  overflow: hidden;
}

.clear {
  zoom: 1;
  /* for ie6 & ie7 */
}
</style>
