<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
#app {
        position: relative;
        flex-direction: column;
        justify-content: space-between;
        margin: 0 auto;
        width: 100vh;
        height: 100vh;
        max-width: 414px;
        max-height: 736px;
        text-align: center;
        background-color: #F7F7EF;
}
</style>
