<template>
    <Menu mode="horizontal" theme="dark" active-name="post" class="menu" @on-select='changeMenu'>
        <Menu-item name="adopt"  class="menu-item">
            <i class="fa fa-heart" aria-hidden="true"></i>
            领养
        </Menu-item>
        <Menu-item name="post"  class="menu-item">
            <i class="fa fa-star" aria-hidden="true"></i>
            日常
        </Menu-item>
        <Menu-item name="aid"  class="menu-item">
            <i class="fa fa-medkit" aria-hidden="true"></i>
            救助
        </Menu-item>
    </Menu>  
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
    }
  },
  mounted () {
    this.$store.dispatch('getAllPosts')
  },
  methods: {
    ...mapMutations({
      changeSection: 'CHANGE_SECTION'
    }),
    // ...mapActions([
    //   'getAllPosts'
    // ]),
    changeMenu (activeName) {
      console.log(activeName)
      this.changeSection(activeName)
      this.$store.dispatch('getAllPosts')
    }
  }
}
</script>
<style scoped>
.menu {
    position: fixed;
    bottom: 0;
    width: 100%;
    max-width: 414px;
    display: flex;
    justify-content: space-around;
    background-color: #CBDAC7;
    
}
</style>
