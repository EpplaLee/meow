<template>
    <Menu mode="horizontal" theme="dark" active-name="1" class="menu">
        <Menu-item name="1" class="menu-item">
            <i class="fa fa-heart" aria-hidden="true"></i>
            领养
        </Menu-item>
        <Menu-item name="2" class="menu-item">
            <i class="fa fa-star" aria-hidden="true"></i>
            日常
        </Menu-item>
        <Menu-item name="3" class="menu-item">
            <i class="fa fa-medkit" aria-hidden="true"></i>
            救助
        </Menu-item>
    </Menu>  
</template>
<script>
export default {
  data () {
    return {

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
