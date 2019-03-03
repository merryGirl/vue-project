<template>
  <div class="bfc-grail-content">
	
	<div>内层</div>

	<!-- 三种方式实现（flex实现的时候，left和middle调换位置） -->
	<div class="grail-content">
		<h3>圣杯布局</h3>
		<div v-for="(grailItem, index) in grailData" :key="index" :class="grailItem">
			<div class="header">{{ grailItem|grailName }}</div>
			<div class="container">
				<div class="middle"></div>
				<div class="left"></div>
				<div class="right"></div>
			</div>
			<div class="footer"></div>
		</div>
	</div>
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
		grailData: ["float-realized", "flex-realized"]
    }
  },
  filters: {
	  grailName(val) {
			const grailMap = new Map([
                ["float-realized", "浮动实现"],
                ["flex-realized", "flex布局实现"]
            ]);
			return grailMap.get(val);
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
.bfc-grail-content {

    .grail-content {
		.float-realized, .flex-realized, .grid-realized {
			margin: 10px 0;
		}

		.header, .footer {
			height: 20px;
			background-color: antiquewhite;
		}
		.container {
			.left, .middle, .right {
				width: 100px;
				height: 200px;
			}
			.left {
				background-color: aqua;
			}
			.middle {
				background-color: red;
				width: 100%;
			}
			.right {
				background-color: chartreuse;
			}
		}
		.footer {
			margin-top: 200px;
		}

		// 浮动实现圣杯布局
		.float-realized {
			.container {
				.left, .middle, .right {
					float: left;
				}
				.left {
					margin-left: -100%;
				}
				.right {
					margin-left: -100px;
				}
			}
		}

		// flex实现圣杯布局
		.flex-realized > .container{
			display: flex;
		}
    }
}
</style>