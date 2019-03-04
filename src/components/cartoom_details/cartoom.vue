<template>
    <div class="cartoom-recommend">
        <div cartoom-box>
            <img src="" alt="">
            {{showData}}
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    props: {
        menuIndex: {
            default: '',
            type: String
        },
        cartoomData: {
            default: {},
            type: Object
        }
    },
    data() {
        return {};
    },
    filters: {},
    created() {},
    mounted() {},
    watch: {},
    computed: {
        // toogle show the chinese cartooms part
        chinesePartShow() {
            return this.menuIndex == '1-1' ? true : false;
        },
        // data to the type of cartoom
        showData() {
            return this.cartoomData && this.chinesePartShow ? 
                    this.cartoomData.chineseCartoom : this.cartoomData.japaneseCartoom;
        }
    },
    methods: {}
};
</script>

<style lang="less" scoped>
</style>