<template>
    <div class="v-push">
    <Input v-model="content" type="textarea" :rows="6" style="width: 70%" placeholder="请输入推送内容" class="v-input"></Input>
    <br>
    <label for="">图片：</label>
    <Input v-model="url" placeholder="请输入正确的URL..." style="width: 60%" class="v-input"></Input>
    <br/>
    <Radio-group v-model="type" type="button" size="large" class="v-radio">
        <Radio label="adapt">领养</Radio>
        <Radio label="post">日常</Radio>
        <Radio label="aid">救助</Radio>
    </Radio-group>
    <br>
    <Button class="v-button" v-on:click="pushPost">发表</Button>
    <router-link to="/"><Button class="v-button">返回</Button></router-link>
    </div>
</template>
<script>
import api from '../api'
export default {
  data () {
    return {
      content: '',
      url: '',
      type: ''
    }
  },
  methods: {
    pushPost () {
      if (this.$store.state.user === '') {
        alert('请先登录')
      } else {
        if (this.content !== '' && this.type !== '') {
          api.pushPost(this.content, this.url, this.type, this.$store.state.user).then(res => {
            if (res.data.postSuccess === true) {
              alert('发表成功')
              this.$router.push('/')
            }
          })
        } else {
          alert('推送内容和类型不能为空')
        }
      }
    }
  }
}
</script>
<style scoped>
.v-push {
    position: relative;
    top: 20%;
}
.v-button {
    display: inline-block;
    margin-top: 20px;
    width: 25%;
}
.v-input {
    margin-top: 10px;
}
.v-radio {
    margin-top: 10px;
}
</style>
