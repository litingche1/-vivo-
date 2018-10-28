<template>
	<header>
		<div class="header" v-show="ishow?false:true">
			<a href="#/xindex"><i class="iconfont">&#xe636;</i></a>
			<a href=""></a>
			<a href="javascript:;" @click="xs"><i class="iconfont">&#xe621;</i></a>
		</div>
		<div class="header1" v-show="ishow">
			<a href="#/xindex" class="h_l"><i class="iconfont1">&#xe605;</i></a>
			<p>
				<a href="javascript:;" @click="locateAt('app9')">商品</a>
				<a href="javascript:;" @click="locateAt('swiper-container1')">评价</a>
				<a href="javascript:;" @click="locateAt('qxtp')">详情</a>
				<a href="javascript:;" @click="locateAt('Service')">售后</a>
			</p>
			<a href="javascript:;" class="h_r" @click="xs"><i class="iconfont1">&#xe602;</i></a>

		</div>
	</header>
</template>

<script>
	import $ from "jquery"
	export default {
		data() {
			return {
				ishow: false,
			}
		},
		methods: {
			xs() {
				this.$store.state.shopping = !this.$store.state.shopping
			},
			locateAt(e) {
				var e = document.getElementById(e); /*以id命名的锚点*/
				var y = e.offsetTop;
				while(e = e.offsetParent) {
					y += e.offsetTop;
				};
				y -= 50; /*悬浮菜单的高度*/
				window.scrollTo(0, y);
			}
		},
		mounted() {
			var self = this
			$(window).scroll(function() {
				if($(window).scrollTop() > 2) {
					self.ishow = true;
				} else {
					self.ishow = false;
				}
			})
		}
	}
</script>

<style scoped>
	header {
		width: 100%;
		z-index: 1000;
	}
	
	.header {
		z-index: 1000;
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		width: 100%;
		height: 30px;
		flex-direction: row;
		padding-top: 8px;
		align-items: center;
		justify-content: space-around;
	}
	
	.header a {
		width: 10%;
		display: inline-block;
		height: 100%;
		text-align: center;
		color: #7a7a7a;
	}
	
	.header a:nth-child(1) {
		/*margin-top: 5px;*/
	}
	
	.header a:nth-child(2) {
		width: 65%;
	}
	
	.header1 {
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		width: 100%;
		height: 40px;
		background: #fff;
		z-index: 500;
		flex-direction: row;
		padding-top: 10px;
		border-bottom: 1px solid #ebebeb;
		/*align-items: center;*/
		justify-content: space-between;
	}
	
	.h_l,
	.h_r {
		flex: 1;
		display: inline-block;
		height: 100%;
		line-height: 30px;
		text-align: center;
		color: #7a7a7a;
	}
	
	.header1 p {
		line-height: 30px;
		flex: 5;
		display: flex;
		height: 30px;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	
	.header1 p a {
		display: inline-block;
		flex: 1;
		text-align: center;
		color: #b4b4b4;
	}
	
	@font-face {
		font-family: 'iconfont';
		/* project id 887743 */
		src: url('//at.alicdn.com/t/font_887743_w07hj4bjig.eot');
		src: url('//at.alicdn.com/t/font_887743_w07hj4bjig.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_887743_w07hj4bjig.woff') format('woff'), url('//at.alicdn.com/t/font_887743_w07hj4bjig.ttf') format('truetype'), url('//at.alicdn.com/t/font_887743_w07hj4bjig.svg#iconfont') format('svg');
	}
	
	.iconfont {
		font-family: "iconfont" !important;
		font-size: 30px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-webkit-text-stroke-width: 0.2px;
		-moz-osx-font-smoothing: grayscale;
		font-weight: 400;
	}
	
	.iconfont1 {
		font-family: "iconfont" !important;
		font-size: 25px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-webkit-text-stroke-width: 0.2px;
		-moz-osx-font-smoothing: grayscale;
		font-weight: 400;
	}
</style>