<template>
    <div id="body">
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            };
        },
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {

        }
    };
</script>
<style scoped>
    #body {
        position: relative;
        flex-direction: column;
        justify-content: space-between;
        margin: 0 auto;
        width: 100vh;
        height: 100vh;
        max-width: 414px;
        max-height: 736px;
        text-align: center;
        background-color: #F7F7EF;
    }
</style>