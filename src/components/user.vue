<template>
    <div class="user-info-content">
        <img src="../assets/img/head_picture.png" alt="">

        <!-- signature -->
        <canvas id="signature-pic"></canvas>

        <div v-for="(userItem, name) in userInfo" :key="name">
            <label for="">{{name|nameFilters}}:&nbsp;&nbsp;</label>
            <span class="detail-value">{{userItem}}</span>
        </div>
    </div>
</template> 

<script>
export default {
    components: {},
    props: {},
    data() {
        return {
            userInfo: {},
        };
    },
    filters: {
        nameFilters(val) {
            let nameMap = new Map([
                ['name', '姓名'],
                ['sex', '性别'],
                ['age', '年龄'],
                ['interests', '兴趣']
            ]);
            return nameMap.get(val);
        }
    },
    created() {
        this.initUser();
    },
    mounted() {},
    watch: {},
    computed: {},
    methods: {
        initUser() {
            this.axios
                .get('/userInfo')
                .then(
                    response => {
                        const data = response.data;

                        if (data.code == 0) {
                            this.userInfo = data.result;
                        } else {
                            this.$message.error('接口请求错误');
                        }
                    },
                )
                .catch(error => {
                    console.log(error);
                });
        },
    }
};
</script>

<style lang="less" scoped>
.user-info-content {
    img {
        width: 120px;
    }

    #signature-pic {
        width: 300px;
        height: 100px;
        border: 1px solid @blue;
    }
}
</style>