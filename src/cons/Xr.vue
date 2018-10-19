<template>
	<div id="app3" v-show="isxrs">
		<ul>
			<li>
				<a href="" class="app3_a1">购物车</a>
			</li>
			<li>
				<a href="" class="app3_a2">我的订单</a>
			</li>
			<li>
				<a href="" class="app3_a3">我的商城</a>
			</li>
			<li>
				<a  class="app3_a4" @click="dz">登陆/注册</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		computed: {
			isxrs() {
				return this.$store.state.xr;
			}
		},
		methods:{
			dz(){
				location.href="#/xreight"
			}
		}
	}
</script>

<style scoped>
	#app3 {
		width: 40%;
		height: 26%;
		position: absolute;
		top: 56px;
		left: 56%;
		background: #fff;
		z-index:700;
	}
	
	#app3 ul {
		height:100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	
	#app3 ul li {
		width: 100%;
		flex: 1;
		align-self: center;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
	
	#app3 ul li a {
		display: block;
		width: 70%;
		align-self: center;
		/*padding-right: 10px;*/
		text-align: center;
		font-size: 14px;
		line-height: 43px;
		color: #8b8b8b;
		background-size: 14px;
	}
	
	.app3_a1 {
		background: url(https://shopstatic.vivo.com.cn/vivoshop/wap/dist/images/common/m-vivo-shopcar_610a52e.png) no-repeat left center;
	}
	
	.app3_a2 {
		background: url(https://shopstatic.vivo.com.cn/vivoshop/wap/dist/images/common/m-vivo-myorder_322287d.png) no-repeat left center;
	}
	
	.app3_a3 {
		background: url(https://shopstatic.vivo.com.cn/vivoshop/wap/dist/images/common/m-vivo-mybag_66124c2.png) no-repeat left center;
	}
	
	.app3_a4 {
		background: url(https://shopstatic.vivo.com.cn/vivoshop/wap/dist/images/common/m-vivo-my_d5a33d6.png) no-repeat left center;
	}
</style>