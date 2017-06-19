<template>
    <div class="v-form">
        <Form :model="info" label-position="right" :label-width="80" >
        <Form-item label="性别">
            <Input v-model="info.gender"></Input>
        </Form-item>
        <Form-item label="生日">
            <Input v-model="info.birthday"></Input>
        </Form-item>
        <Form-item label="电话">
            <Input v-model="info.phoneNum"></Input>
        </Form-item>
        <Form-item label="邮箱">
            <Input v-model="info.mail"></Input>
        </Form-item>
        <Form-item label="城市">
            <Input v-model="info.city"></Input>
        </Form-item>
    </Form>  
    <Button type="success" v-on:click="submitEdit">提交</Button>
    <router-link to="/"><Button >返回</Button> </router-link> 
    </div>
</template>
<script>
import api from '../api'
export default {
  data () {
    return {
      info: {
        gender: '',
        birthday: '',
        phoneNum: '',
        mail: '',
        city: ''
      }
    }
  },
  methods: {
    submitEdit () {
      api.pushInfo(this.$store.state.user, this.info).then(res => {
        alert('修改成功')
        this.$router.push('/')
      })
    }
  }
}
</script>
<style scoped>
.v-form {
    margin-right: 50px;
}
</style>
