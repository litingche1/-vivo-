<template>
	<div id="header" class="clearfix">
		<div class="h_left" @click="dj">
			<i class="iconfont" v-show="ishows">&#xe629;</i>
			<i class="iconfont icon" v-show="ishow">&#xe85c;</i>
		</div>
		<div class="h_img">
			<a href="//www.vivo.com.cn/"><img src="../assets/imgs/2018-10-17_155856.jpg" alt="" /></a>
		</div>
		<div class='h_r'>
			<i class="iconfont iconfont1" @click="isbool">&#xe62a;</i>
			<i class="iconfont iconfont2" @click="isxr">&#xe627;</i>
		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				ishows: true,
				ishow: false,
			}
		},
		props: ["title"],
		methods: {
			dj() {
				this.$store.state.shows = !this.$store.state.shows
				// console.log(this.$store.state.shows)

			},
			isbool() {
				this.$store.state.bool = !this.$store.state.bool
				// console.log(this.$store.state.bool);
			},
			isxr() {
				this.$store.state.xr = !this.$store.state.xr
				// console.log(this.$store.state.xr);
			}

		},
		mounted() {
			// if(this.title="g"){
			//   // this.ishows = !this.ishows;
			//   // this.ishow = !this.ishow;
			// }
			if(this.title === "t") {

				this.ishows = !this.ishows;
				this.ishow = !this.ishow;
				console.log(this.ishows);
				console.log(this.ishow);
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
		align-self: center;
		text-align: center;
		display: flex;
		flex-direction: row;
	}
	
	#header .logo-container {
		position: absolute;
		left: 50%;
		top: 0;
		display: flex;
		-webkit-box-pack: center;
		align-items: center;
		width: 2.82rem;
		height: 100%;
		margin-left: -1.41rem;
		opacity: 1;
	}
	
	.iconfont {
		color: #fff;
	}
	
	@font-face {
		font-family: 'iconfont';
		/* project id 485561 */
		src: url('https://at.alicdn.com/t/font_485561_d0sp9l2powe.eot');
		src: url('https://at.alicdn.com/t/font_485561_d0sp9l2powe.eot?#iefix') format('embedded-opentype'), url('https://at.alicdn.com/t/font_485561_d0sp9l2powe.woff') format('woff'), url('https://at.alicdn.com/t/font_485561_d0sp9l2powe.ttf') format('truetype'), url('https://at.alicdn.com/t/font_485561_d0sp9l2powe.svg#iconfont') format('svg');
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