<template>
    <div class="bubbling-content">
        <div class="outer">
            <div class="inner"></div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    props: {},
    data() {
        return {};
    },
    filters: {},
    created() {},
    mounted() {},
    watch: {},
    computed: {},
    methods: {}
};
</script>

<style lang="less" scoped>
.bubbling-content {
    .outer {
        width: 500px;
        height: 500px;
        background-color: aqua;
        display: inline-block;
        border: 1px solid;

        .inner {
            width: 200px;
            height: 200px;
            display: inline-block;
            background-color: #fff;
        }
    }
}
</style>