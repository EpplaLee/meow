<template>
    <div class="content">     
        <router-link v-for="item in postList" :to="'post/'+item.post_id"><div  class="v-post">
            <h6>{{ item.user }}</h6>
            <p>{{ item.updatedAt }}</p>
            <p>{{ item.content }}</p>
            <div>
                <img v-bind:src="item.url" alt="图片失效">
            </div>
            <!--<Button type="ghost" icon="thumbsup">{{ item.likes }}</Button>
            <Button type="ghost" icon="chatbubble-working">{{ item.comment.length }}</Button>-->
        </div></router-link>
    </div>
</template>
<script>
// import { mapGetters } from 'vuex'
export default {
  computed: {
    postList () {
      return this.$store.state.posts
    }
  }
}

</script>
<style>
.content {
    padding: 3px;
    height: 100vh;
    overflow: scroll;
}
.content > a {
    text-decoration: none;
}
.v-post {

    text-align: left;
    background: white;
    border-radius: 5px;
    margin-top: 5px;
}
.v-post * {
    margin-left: 2px;
}
</style>
