<template>
    <div class="list-content">
        <div v-for="(cartoomItem, cartoomForm) in cartoomData" :key="cartoomForm">
            <div class="list-table">
                <div class="title" :class="[cartoomForm == 'chineseCartoom' ? 'chinese-title' : 'japanese-title']">{{cartoomForm|country}}</div>

                <el-table :data="cartoomItem" style="width: 80%" stripe border>
                    <el-table-column prop="cartoomName" label="番剧名"></el-table-column>
                    <el-table-column prop="score" label="豆瓣评分"></el-table-column>
                    <el-table-column prop="direactor" label="导演"></el-table-column>
                    <el-table-column prop="cv" label="CV"></el-table-column>
                    <el-table-column label="查看更多">
                        <i slot-scope="scope" class="el-icon-search" @click="skip(scope.$index, scope.row)"></i>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    props: {
        cartoomData: {
            default: {},
            type: Object
        }
    },
    data() {
        return {};
    },
    filters: {
        country: function(val) {
            return val == 'chineseCartoom' ? '国漫番剧' : '日漫番剧';
        }
    },
    created() {},
    mounted() {},
    watch: {},
    computed: {},
    methods: {
        // skip with cartoomId
        skip(index, data) {
            router.push({ 
                path: '/detail',
                query: {
                    id: data.cartoomId
                }    
            });
        }
    }
};
</script>

<style lang="less" scoped>
.list-content {
    .list-table {
        .title {
            height: 80px;
            line-height: 80px;
        }
        .chinese-title {
            background-color: blue;
        }
        .japanese-title {
            background-color: red;
        }
    }

}
</style>
<style lang="less">
.list-content {
    .el-table {
        margin: 0 auto;
    }
}
</style>
