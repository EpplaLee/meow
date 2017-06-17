<template>
    <div class="v-log">
    <label for="">帐号：</label>
    <Input v-model="user" placeholder="请输入..." style="width: 70%"></Input>
    <br/>
    <label for="">密码：</label>
    <Input v-model="psw" placeholder="请输入..." style="width: 70%"></Input>
    <br/>
    <Button class="v-button" v-on:click="login">登录</Button>
    <router-link to="/signup"><Button class="v-button">注册</Button></router-link>
    <router-link to="/"><Button class="v-button">返回</Button></router-link>
    </div>
</template>
<script>
export default {
  data () {
    return {
      user: '',
      psw: ''
    }
  },
  methods: {
    login () {
      return this.$store.dispatch('login', {
        username: this.user,
        password: this.psw
      })
    }
  }
}
</script>
<style scoped>
.v-log {
    position: relative;
    top: 20%;
}
.v-button {
    display: inline-block;
    margin-top: 20px;
    width: 25%;
}
</style>
