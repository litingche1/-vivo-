<template>
	<div id="header1">
		<div class="h_left" @click="dj">
			<i class="iconfont icon">&#xe85c;</i>
		</div>
		<div class="h_img">
			<input type="text" placeholder="Z3" id="shuk">
		</div>
		<div class='h_r'>
			<i class="iconfont iconfont1">&#xe62a;</i>
		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			dj() {
				this.$store.state.bool = !this.$store.state.bool
			}
		},
		mounted() {

		}
	}
</script>

<style scoped>
	#header1 {
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		height: 56px;
		flex-direction: row;
		background: #212121;
		justify-content: space-between;
		z-index: 1000;
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
	
	#shuk {
		width: 100%;
		background: #212121;
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