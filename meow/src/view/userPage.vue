<template>
    <div>
        <router-link to="/"><Button icon="chevron-left" long></Button></router-link>
        <div>
            <img src="" alt="">
            <table class="pure-table">
                <tbody>
                    <tr class="pure-table-odd">
                        <td>昵称</td>
                        <td>{{ userInfo.name }}</td>
                    </tr>
                    <tr>
                        <td>性别</td>
                        <td>{{ userInfo.gender }}</td>
                    </tr>
                    <tr class="pure-table-odd">
                        <td>生日</td>
                        <td>{{ userInfo.birthday }}</td>
                    </tr>
                    <tr>
                        <td>电话</td>
                        <td>{{ userInfo.phoneNum }}</td>
                    </tr>
                    <tr class="pure-table-odd">
                        <td>邮箱</td>
                        <td>{{ userInfo.mail }}</td>
                    </tr>
                    <tr>
                        <td>城市</td>
                        <td>{{ userInfo.city }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <router-link :to="'/edit/'+self" v-if="self!==''"><Button icon="compose" long>编辑个人资料</Button></router-link>
        <Card v-for="post in postList">
                <p slot="title">{{ post.createdAt }}</p>
                <p>{{ post.content }}</p>
                <img src="" alt="">
            </Card>
    </div>
</template>
<script>
import api from '../api'
export default {
  data () {
    return {
      userInfo: {},
      postList: [],
      self: this.$store.state.user
    }
  },
  mounted () {
    api.getUser(this.$route.params.username).then(res => {
      this.userInfo = res.data.userInfo
      this.postList = res.data.posts
    })
  }
}
</script>
