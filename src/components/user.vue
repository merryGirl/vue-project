<template>
    <div class="user-info-content">
        <div v-for="(userItem, name) in userInfo" :key="name">
            <label for="">{{name|nameFilters}}:&nbsp;&nbsp;</label>
            <div class="detail-value">{{userItem}}</div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    props: {},
    data() {
        return {
            userInfo: {}
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
                            this.userInfo = data.result
                        } else {
                            this.$message.error('接口请求错误');
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
</style>