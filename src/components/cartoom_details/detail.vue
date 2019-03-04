<template>
    <div class="detail">
        <img :src="require(`../../assets/img/${imgSrc}.jpg`)" alt="">
        <!-- <img :src="require(`../../assets/img/${imgSrc}.jpg`)" alt=""> -->

        <div class="detail-box">
            <div 
                v-for="(detailValue, name) in detailData"
                v-if="name!='cartoomId' && name!='srcName'" 
                :key="name" 
                class="detail-content">
                <label for="">{{name|nameFilters}}:&nbsp;&nbsp;</label>
                <div class="detail-value">{{detailValue}}</div>
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
            detailData: {},  //对应番详情
        };
    },
    filters: {
        nameFilters(val) {
            let nameMap = new Map([
                ['cartoomName', '番剧名'],
                ['score', '豆瓣评分'],
                ['direactor', '导演'],
                ['cv', '声优'],
                ['language', '语言'],
                ['abstract', '简介']
            ]);
            return nameMap.get(val);
        }
    },
    created() {
        // bug:created -> 页面舒心，数据没请求 
        this.init();
    },
    mounted() {},
    watch: {
        $route: {
            handler(nv, ov) {
                this.init();
            },
            immediate: true,
            deep: true
        }
    },
    computed: {
        detailId() {
            return this.$route.query.id;
        },
        imgSrc() {
            return this.detailData && this.detailData.srcName;
        }
    },
    methods: {
        init() {
            this.axios({
                url: '/detail',
                method: 'get',
                params: { id: this.detailId }
            }).then(
                    response => {
                        const data = response.data;

                        if (data.code == 0) {
                            this.detailData = data.result;
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
.detail {
    img {
        width: 140px;
        height: 200px;
    }
    .detail-box {
        width: 60%;
        margin: 0 auto;
        .detail-content {
            display: flex;
            margin: 8px 0;
            label {
                width: 180px;
                display: inline-block;
                text-align: right;
            }
            .detail-value {
                display: inline-block;
                width: calc(~'100% - 180px');
                text-align: left;
            }
        }
    }
}
</style>