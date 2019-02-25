<template>
    <div class="index-content">
        <router-link :to="{ name: 'cssflex'}">
            <span>flex布局</span>
        </router-link>
        <br>
        <router-link :to="{ name: 'bfcandgrail'}">
            <span class="blue-text">bfc</span>
        </router-link>
        <br>
        <router-link :to="{ name: 'autocursor'}">
            <span>光标自动定位到input框结尾</span>
        </router-link>
        <br>
        <router-link :to="{ name: 'bubbling'}">
            <span>冒泡</span>
        </router-link>
    </div>
</template>

<script>
export default {
    components: {},
    props: {},
    data() {
        return {};
    },
    created() {},
    mounted() {},
    watch: {},
    computed: {},
    methods: {}
};
</script>

<style lang="less" scoped>

</style>