<template>
<form>
  <el-input v-model="name" placeholder="name"/>
  <el-input v-model="password" placeholder="password" :type="type"/>
  <el-radio v-on:click="swithcType" type="radio">hide/show</el-radio>
  <el-button type="primary">Sign In</el-button>
  <router-link to="/signup">Go to sign up</router-link>
</form>
</template>

<script>
export default {
  name: 'sign-in',
  props: ['initialName', 'initialPassword'],
  // data: () => ({
  //   name: this.initialName,
  //   password: this.initialPassword
  // })
  data () {
    return {
      name: this.initialName,
      password: this.initialPassword,
      type: 'password'
    }
  },
  methods: {
    swithcType: function () {
      if (this.type === 'password') {
        this.type = 'text'
      } else {
        this.type = 'password'
      }
    }
  }
}
</script>
<style scoped>
.el-header {
    text-align: center
}

</style>
