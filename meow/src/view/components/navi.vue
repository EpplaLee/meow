<template>
    <div class="menu">
        <div class="portrait">
            <router-link :to="'/user/'+user" v-if="hasLog"><img src="../../assets/akumon.jpg" alt="" ></router-link>
            <router-link to="/login" v-else><img src="../../assets/notlog.png" alt="" ></router-link>
        </div>
        <Input v-model="value" class="input">
            <Select v-model="select" slot="prepend" style="width: 80px">
                <Option value="post">动态</Option>
                <Option value="aid">救助</Option>
                <Option value="adopt">领养</Option>
                <Option value="user">用户</Option>
            </Select>
            <Button slot="append" icon="ios-search"></Button>
        </Input>
        <router-link to="/push"><Button type="error" shape="circle" icon="plus-round" class="button"></Button></router-link>
    </div>
</template>s
<script>
export default {
  data () {
    return {
      value: '',
      select: 'post',
      hasLog: this.$store.state.logState,
      user: this.$store.state.user
    }
  }
}
</script>
<style scoped>
.menu {
    display: flex;
    justify-content: space-around;
    padding-top: 8px;
}
.portrait {
    width: 32px;
}
a > img {
    border-radius: 50%;
    width: 32px;
}
.input {
    width: auto;
}
.button {
    width: 32px !important;
    background-color: #CBDAC7;
    border-color: #CBDAC7;
}
</style>
