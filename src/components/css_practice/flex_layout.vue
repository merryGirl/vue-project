<template>
    <div class="flex-content">
        <h3>flex布局</h3>
        <hr>
        <div class="layout-item" v-for="(layoutItem, index) in layoutDate" :key="index">
            <h5>{{ layoutItem.name }}</h5>

            <div :class="layoutItem.className">
                <div v-for="index in 3" :key="index" class="index-item"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components:{},
    props:{},
    data() {
        return {
            layoutDate: [
                {
                    name: "上方左边",
                    className: "top-left"
                },
                {
                    name: "上方中间",
                    className: "top-center"
                },
                {
                    name: "上方右边",
                    className: "top-right"
                },
                {
                    name: "上方均分显示1",
                    className: "top-between"
                },
                {
                    name: "上方均分显示2",
                    className: "top-around"
                },
                {
                    name: "中心",
                    className: "center-center"
                },
                {
                    name: "右下角",
                    className: "bottom-right"
                },
                {
                    name: "垂直中间均分显示",
                    className: "center-between"
                },
                {
                    name: "倒三角",
                    className: "inverted-triangle"
                },
                {
                    name: "三角形",
                    className: "positive-triangle"
                },
            ]
        }
    },
    created(){},
    mounted(){},
    watch:{},
    computed:{},
    methods:{}
}
</script>

<style lang="less" scoped>
.flex-content {
    width: 800px;
    margin: 0 auto;
    background-color: #fff;

    .layout-item {
        padding-bottom: 10px;
        
        &>div {
            height: 100px;
        }
        &:not(:last-child) {
            border-bottom: 1px solid #000;
        }
        .index-item {
            width: 10px;
            height: 10px;
            margin: 10px;
            background-color: #000;
        }

        // 分类样式
        .top-left, 
        .top-center, 
        .top-right, 
        .top-between, 
        .top-around, 
        .center-center, 
        .bottom-right,
        .center-between,
        .inverted-triangle,
        .positive-triangle {
            display: flex
        }
        .top-center {
            justify-content: center
        }
        .top-right {
            justify-content: flex-end;
        }
        .top-between {
            justify-content: space-between;
        }
        .top-around {
            justify-content: space-around;
        }
        .center-center {
            justify-content: center;
            align-items: center;
        }
        .bottom-right {
            justify-content: flex-end;
            align-items: flex-end;
        }
        .center-between {
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        }
        .inverted-triangle {
            justify-content: space-between;

            div:nth-child(2) {
                align-self: flex-end;
            }
        }
        .positive-triangle {
            justify-content: space-between;
            align-items: flex-end;

            div:nth-child(2) {
                align-self: flex-start;
            }
        }
    }
}
</style>