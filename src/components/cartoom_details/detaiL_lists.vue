<template>
    <div class="list-content">
        <div v-for="(cartoomItem, cartoomForm) in cartoomData" :key="cartoomForm">
            <div class="list-table">
                <div class="title">{{cartoomForm|country}}</div>

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
    props: {},
    data() {
        return {
            cartoomData: {} //all data
        };
    },
    filters: {
        country: function(val) {
            return val == 'chineseCartoom' ? '国漫番剧' : '日漫番剧';
        }
    },
    created() {
        this.init();
    },
    mounted() {},
    watch: {},
    computed: {},
    methods: {
        // get init data
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

        skip(id) {
            // 路由跳转，并且带上id
            // console.log(id);
            this.axios({
                url: '/detail',
                method: 'get',
                data: { id: 22 }
            }).then(
                    response => {
                        const data = response.data;

                        if (data.code == 0) {
                         
                        }
                    },
                )
                .catch(error => {
                    console.log(error);
                });
        }
    }
};
</script>

<style lang="less" scoped>
.list-content {
    .title {
        height: 80px;
        line-height: 80px;
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
