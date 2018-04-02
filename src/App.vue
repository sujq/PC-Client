<template>
  <el-container>
    <el-header>{{name}}</el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      name: 'Zhidan System'
    }
  },
  methods: {
    // TODO: write your methods here.
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.el-header {
  text-align: center
}
.el-container {
  width: 400px
}
</style>
