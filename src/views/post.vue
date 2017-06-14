<template>
    <div id="post-area">
        <Input class="v-input" v-model="value6" type="textarea" :rows="6" placeholder="请输入..."></Input>
        <Button type="success" class="v-button">发表</Button>
        <router-link to="/"><Button type="ghost" class="v-button">返回</Button></router-link>
    </div>
</template>
<style>
  .v-button {
      display: block !important;
      width: 80% !important;
      margin: 8px auto;
  }
  .v-input {
      width: 80% !important;
      opacity: 0.5;
  }
  #post-area {
      position: relative;
      top: 20%;
      
  }
</style>