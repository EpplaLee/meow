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
          postList: [
              {
                  user: "再胖也是小仙女",
                  time: "6-17 12:30",
                  content: "啵哩啵哩啵哩啵哩啵哩啵哩啵哩啵哩啵哩啵哩啵哩啵哩啵哩啵哩",
                  pics: ["",""],
                  comment: [
                      {

                      },
                      {

                      }
                  ],
                  likes: 6 
              },
              {
                  user: "网黄猫日",
                  time: "6-17 12:12",
                  content: "你皮你皮你皮你皮你皮你皮你皮你皮你皮你皮你皮你皮你皮你皮你皮你皮你皮你皮你皮你皮v",
                  pics: ["",""],
                                    comment: [
                      {

                      },
                      {

                      }
                  ],
                  likes: 6 
              },
               {
                  user: "再胖也是小仙女",
                  time: "6-17 12:30",
                  content: "啵哩啵哩啵哩啵哩啵哩啵哩啵哩啵哩啵哩啵哩啵哩啵哩啵哩啵哩",
                  pics: ["",""],
                                    comment: [
                      {

                      },
                      {

                      }
                  ],
                  likes: 6 
              },
              {
                  user: "过期网黄猫日",
                  time: "6-17 12:12",
                  content: "你皮你皮你皮你皮你皮你皮你皮你皮你皮你皮你皮你皮你皮你皮你皮你皮你皮你皮你皮你皮v",
                  pics: ["",""],
                                    comment: [
                      {

                      },
                      {

                      }
                  ],
                  likes: 6 
              }, {
                  user: "再胖也是小仙女",
                  time: "6-17 12:30",
                  content: "啵哩啵哩啵哩啵哩啵哩啵哩啵哩啵哩啵哩啵哩啵哩啵哩啵哩啵哩",
                  pics: ["",""],
                                    comment: [
                      {

                      },
                      {

                      }
                  ],
                  likes: 6 
              },
              {
                  user: "过期网黄猫日",
                  time: "6-17 12:12",
                  content: "你皮你皮你皮你皮你皮你皮你皮你皮你皮你皮你皮你皮你皮你皮你皮你皮你皮你皮你皮你皮v",
                  pics: ["",""],
                                    comment: [
                      {

                      },
                      {

                      }
                  ],
                  likes: 6 
              }
          ]
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