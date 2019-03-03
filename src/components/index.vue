<template>
    <div class="index-content">
        <div class="header"> 
            <div class="header-title">优质漫画推荐</div>
            <div class="user-content">
                <img src="../assets/img/head_picture.png" alt="">
            </div>
        </div>
        <div class="content">
            <el-row>
                <!-- left nav -->
                <el-col :span="5">
                    <el-menu default-active="1" @select="handleSelect">
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
                </el-col>

                <!-- right content -->
                <el-col :span="19">
                    <!-- <component v-bind:is="templateShow"></component> -->
                    <detail-lists></detail-lists>
                </el-col>
            </el-row>
        </div>

        <!-- <router-link :to="{ name: 'cssflex'}">
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
        </router-link> -->
    </div>
</template>

<script>
import detailLists from './cartoom_details/detail_Lists.vue';

export default {
    components: {
        detailLists
    },
    props: {},
    data() {
        return {};
    },
    created() {},
    mounted() {},
    watch: {},
    computed: {},
    methods: {
        handleSelect(key) {
            const contentMap = {
                "2": "detailLists"
            }
            console.log(contentMap.get(key));
        }
    }
};
</script>

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
        border-bottom: 1px solid gray;

        .header-title {
            margin-left: 30px;
        }
        .user-content {
            img {
                width: 50px;
                margin-right: 30px;
            }
        }
    }
}
</style>