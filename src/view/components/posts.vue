<template>
    <div class="content">      
        <div v-for="post in postList" class="v-post">
            <h6>{{ post.user }}</h6>
            <p>{{ post.time }}</p>
            <p>{{ post.content }}</p>
            <div>
                <img v-for="picUrl in post.pics" v-bind:src="picUrl" alt="图片失效">
            </div>
            <Button type="ghost" icon="thumbsup">{{ post.likes }}</Button>
            <Button type="ghost" icon="chatbubble-working">{{ post.comment.length }}</Button>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {

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
