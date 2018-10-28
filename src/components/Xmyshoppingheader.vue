<template>
	<div id="header" class="clearfix">
		<div class="h_left">
			<a href="#/xindex"><i class="iconfont" v-show="ms">&#xe605;</i><i class="iconfont" v-show="xs">&#xe602;</i></a>
		</div>
		<div class="h_img">
			<p class="wz" v-text="shows"></p>
		</div>
		<div class="h_r" @click="showshopping">
			<i class="iconfont iconfont1">&#xe67a;</i>
		</div>
	</div>

</template>

<script>
	export default {
		props: ["title"],
		data() {
			return {
				ishows: true,
				ishow: false,
				shows: "我的商城",
				xs: false,
				ms:false,
			}
		},

		methods: {
			dj() {
				location.href = "#/xindex"

			},
			showshopping() {
				this.$store.state.shopping = !this.$store.state.shopping
				// console.log(this.$store.state.bool);
			}

		},
		mounted() {
			if(this.title === "car") {
				this.shows = "购物车";
				this.ms=true
			}
			if(this.title==="my"){
			this.xs=true
			}
		}

	}
</script>

<style scoped>
	#header {
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		height: 56px;
		/*margin-bottom: 50px;*/
		flex-direction: row;
		background: #212121;
		justify-content: space-between;
		z-index: 600;
	}
	
	.h_left {
		flex: 1;
		align-self: center;
		text-align: center;
	}
	
	.h_img {
		flex: 4;
		align-self: center;
		text-align: center;
	}
	
	.h_r {
		flex: 1.5;
		line-height: 45px;
		/*align-self: center;*/
		text-align: center;
		display: flex;
		flex-direction: row;
	}
	
	.iconfont {
		color: #fff;
	}
	
	.wz {
		font-size: 18px;
		color: #fff;
	}
	
	@font-face {
		font-family: 'iconfont';
		/* project id 887743 */
		src: url('//at.alicdn.com/t/font_887743_ng0cbmpjuxg.eot');
		src: url('//at.alicdn.com/t/font_887743_ng0cbmpjuxg.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_887743_ng0cbmpjuxg.woff') format('woff'), url('//at.alicdn.com/t/font_887743_ng0cbmpjuxg.ttf') format('truetype'), url('//at.alicdn.com/t/font_887743_ng0cbmpjuxg.svg#iconfont') format('svg');
	}
	
	.iconfont {
		font-family: "iconfont" !important;
		font-size: 25px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-webkit-text-stroke-width: 0.2px;
		-moz-osx-font-smoothing: grayscale;
		font-weight: 400;
	}
	
	.iconfont1 {
		margin-top: 3px;
		font-size: 20px;
		font-style: normal;
		margin-left: 5px;
		flex: 1;
	}
	
	.iconfont2 {
		flex: 2;
		font-size: 28px;
		font-style: normal;
		color: #646464;
	}
</style>