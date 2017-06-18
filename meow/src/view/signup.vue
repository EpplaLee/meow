<template>
    <div class="v-sign">
    <label for="">帐号：</label>
    <Input v-model="username" placeholder="请输入..." style="width: 70%"></Input>
    <br/>
    <label for="">密码：</label>
    <Input v-model="password" placeholder="请输入..." type="password" style="width: 70%"></Input>
    <br/>
    <label for="">确认：</label>
    <Input v-model="reInput" placeholder="请输入..." type="password" style="width: 70%"></Input>
    <br/>
    <Button class="v-button" v-on:click="signup">注册</Button>
    <router-link to="/"><Button class="v-button">返回</Button></router-link>
    </div>
</template>
<script>
import api from '../api'
export default {
  data () {
    return {
      username: '',
      password: '',
      reInput: ''
    }
  },
  methods: {
    signup () {
      if (this.password !== this.reInput) {
        return alert('两次输入密码不一致')
      }
      api.signup(this.username, this.password).then(res => {
        if (res.data.signupSuccess) {
          alert('注册成功')
        } else {
          alert('用户名已存在')
        }
        this.username = ''
        this.password = ''
        this.reInput = ''
      })
    }
  }
}
</script>
<style scoped>
.v-sign {
    position: relative;
    top: 20%;
}
.v-button {
    display: inline-block;
    margin-top: 20px;
    width: 25%;
}
</style>
