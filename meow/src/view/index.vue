<template>
    <div class="index full-page">
        <navi></navi>
        <post></post>
        <mnu></mnu>    
    </div>
</template>
<script>
import navi from './components/navi.vue'
import post from './components/post.vue'
import mnu from './components/mnu.vue'
export default {
  components: {
    'mnu': mnu,
    'post': post,
    'navi': navi
  },
  data () {
    return {
      hasLoged: false
    }
  }
}
</script>
<style scoped>
    .index {
        background-color: #F7F7EF;
    }
    .index h1 {
        height: 150px;
    }

    .index h1 img {
        height: 100%;
    }

    .index h2 {
        color: #666;
        margin-bottom: 200px;
    }

    .index h2 p {
        margin: 0 0 50px;
    }

    .index .ivu-row-flex {
        height: 100%;
    }
</style>
