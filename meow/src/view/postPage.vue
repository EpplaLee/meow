<template>
    <div>
    <div  class="v-post">
            <h6>{{ post.user }}</h6>
            <p>{{ post.updatedAt }}</p>
            <p>{{ post.content }}</p>
            <div>
                <img v-bind:src="post.url" alt="图片失效">
            </div>
            <!--<Button type="ghost" icon="thumbsup">{{ item.likes }}</Button>
            <Button type="ghost" icon="chatbubble-working">{{ item.comment.length }}</Button>-->
    </div>
    <div v-for="cmt in comments">
        <h6>{{ cmt.user }}</h6>
        <p>{{ cmt.content }}</p>
    </div>
    <Input v-model="comment">
        <Button slot="append" icon="ios-search" v-on:click="pushComment"></Button>
    </Input>
    </div>
</template>
<script>
import api from '../api'
export default {
  data () {
    return {
      post: {},
      comments: [],
      comment: ''
    }
  },
  mounted () {
    api.getPost(this.$route.params.id).then(res => {
      this.post = res.data.post
      this.comments = res.data.comments
    })
  },
  methods: {
    pushComment () {
      api.pushComment(this.comment, this.$store.state.user, this.$route.params.id).then(res => {
        if (res.data.commentSuccess === true) {
          api.getPost(this.$route.params.id).then(res => {
            this.comments = res.data.comments
            alert('评论成功')
          })
        } else {
          alert('评论失败')
        }
      })
    }
  }
}
</script>
