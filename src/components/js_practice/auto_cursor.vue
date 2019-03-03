<template>
  <div class="auto-cursor-content">
	  	<h3 v-if="showChangeInput">{{inputContent}}</h3>
		<!-- 1.focus()方法 -->
		<el-input id="control-cursor" autofocus="autofocus" v-if="!showChangeInput" v-model="inputContent" placeholder="Please input content"></el-input>
		
		<!-- 2.autofocus属性,页面加载时候自动获取焦点 -->
		<!-- <el-input autofocus="autofocus" v-if="!showChangeInput" v-model="inputContent" placeholder="Please input content"></el-input> -->
		<i class="el-icon-edit" @click="showChangeInput=!showChangeInput"></i>
  </div>
</template>

<script>
export default {
    components: {},
    props: {},
    data() {
        return {
			inputContent: "the content could be change in here with click the edit-icon!",
			showChangeInput: true,//toggle show the input and h3
        };
    },
    filters: {},
    created() {},
    mounted() {},
    watch: {
		// move cursor to the end of input box
		showChangeInput: {
            handler:function(nv){
                if (!nv) {
					this.$nextTick(() =>{
						document.getElementById("control-cursor").focus();
					});
                } 
            },
        },
	},
    computed: {},
    methods: {}
};
</script>

<style lang="less" scoped>
.auto-cursor-content {
    width: 800px;
	margin: 0 auto;
	
	h3 {
		display: inline-block;
		margin-right: 20px;
	}
}
</style>

<style lang="less">
.auto-cursor-content {
    .el-input{
        width: 20%;
        margin-right: 20px;
	}
	i {
		font-size: 24px;
		cursor: pointer;
	}
}
</style>
