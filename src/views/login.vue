<template>
    <div id="log-area">
        <label for="">帐号:</label>
        <Input v-model="value" placeholder="请输入..." style="width: 300px"></Input>
        <br>
        <label for="">密码:</label>
        <Input v-model="value" placeholder="请输入..." style="width: 300px"></Input>
        <Button type="primary" class="v-button">登录</Button>
        <router-link to="/signup"><Button type="success" class="v-button">注册</Button></router-link>
        <router-link to="/"><Button type="ghost" class="v-button">返回</Button></router-link>
    </div>
</template>
<style>
  .v-button {
      display: block !important;
      width: 80% !important;
      margin: 8px auto;
  }
  #log-area {
      position: relative;
      top: 20%;
      
  }
</style>