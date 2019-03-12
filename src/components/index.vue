<template>
    <div class="index-content">
        <div class="header"> 
            <div class="header-title">优质漫画推荐</div>
            <div class="user-info">
                <img src="../assets/img/head_picture.png" alt="">
            </div>
        </div>
        <div class="content">
            <!-- left nav -->
            <div class="left-menu">
                <el-menu default-active="2" @select="handleSelect">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-view"></i>
                            番剧
                        </template>
                        <el-menu-item index="1-1">国漫</el-menu-item>
                        <el-menu-item index="1-2">日漫</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-star-off"></i>
                        豆瓣评分
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-info"></i>
                        个人信息
                    </el-menu-item>
                </el-menu>
            </div>

            <!-- right content -->
            <div class="right-content">
                <component 
                    :is="templateShow" 
                    :menuIndex="menuIndex"
                    :cartoomData="cartoomData">
                </component>
            </div>
        </div>
    </div>
</template>

<script>
import detailLists from './cartoom_details/detail_Lists.vue';
import cartoom from './cartoom_details/cartoom.vue';
import userInfo from './user.vue';

export default {
    components: {
        detailLists,
        userInfo,
        cartoom
    },
    props: {},
    data() {
        return {
            templateShow: 'detailLists',  //component name
            menuIndex: '1-1',
            cartoomData: {}, //main cartoom data 
        };
    },
    created() {
        this.init();
    },
    mounted() {},
    watch: {},
    computed: {},
    methods: {
        init() {
            this.axios
                .get('/cartoom')
                .then(
                    response => {
                        const data = response.data;

                        if (data.code == 0) {
                            this.cartoomData = data.result
                        } else {
                            this.$message.error('接口请求错误');
                        }
                    },
                )
                .catch(error => {
                    console.log(error);
                });
        },

        // dynamic components skip
        handleSelect(key) {
            const contentMap = new Map([
                ["1-1", "cartoom"],
                ["1-2", "cartoom"],
                ["2", "detailLists"],
                ["3", "userInfo"]
            ]);
            this.menuIndex = key;
            this.templateShow = contentMap.get(key);
        }
    }
};
</script>

<style lang="less">
.index-content {
    .content {
        ul.el-menu {
            height: 100%;
            .el-submenu .el-menu-item {
                min-width: 180px;
            }
        }
    }
}
</style>

<style lang="less" scoped>
.index-content {
    .header {
        height: 60px;
        width: 100%;
        position: fixed;
        top: 0;
        z-index: 99;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: @white;
        border-bottom: 1px solid gray;

        .header-title {
            margin-left: 30px;
        }
        .user-info {
            img {
                width: 50px;
                margin-right: 30px;
            }
        }
    }

    .content {
        .left-menu {
            width: 180px;
            height: 100%;
            position: fixed;
            left: 0;
            top: 61px;
        }

        .right-content {
            width: calc(100% - 180px);
            padding-left: 180px;
        }
    }
}
</style>

