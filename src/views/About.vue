<template>
  <div @click="target">
    <h1 data-methods="111">This is an about page</h1>
    <el-button @click="btn">111</el-button>
    <router-view>aa</router-view>
  </div>
</template>

<script>
export default {
  methods: {
    // btn () {
    //   // this.$router.push('/hello')
    //   console.log(this)
    //   this.$http.post('/get').then(result => {
    //     console.log(result)
    //     var { data: res } = result
    //     console.log(res)
    //   })
    //   console.log(this.$http.post('/get'))
    // },
    async btn () {
      var { data: result } = await this.$http.post('/get')
      console.log(result)
    },
    target (ev) {
      this.$message.error('出错了')
      console.log(ev)
      console.log(ev.target)
      console.log(ev.target.dataset.methods)
    }
  }
}
</script>
