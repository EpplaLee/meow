<template>
    <div class="v-push">
    <Input v-model="content" type="textarea" :rows="6" style="width: 70%" placeholder="请输入推送内容" class="v-input"></Input>
    <br>
    <label for="">图片1：</label>
    <Input v-model="url1" placeholder="请输入正确的URL..." style="width: 60%" class="v-input"></Input>
    <br/>
    <label for="">图片2：</label>
    <Input v-model="url2" placeholder="请输入正确的URL..." style="width: 60%" class="v-input"></Input>
    <br/>
    <Radio-group v-model="type" type="button" size="large">
        <Radio label="领养"></Radio>
        <Radio label="日常"></Radio>
        <Radio label="救助"></Radio>
    </Radio-group>
    <br>
    <Button class="v-button">发表</Button>
    <router-link to="/"><Button class="v-button">返回</Button></router-link>
    </div>
</template>
<script>
export default {
  data () {
    return {
      content: '',
      url1: '',
      url2: '',
      type: ''
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
</style>
