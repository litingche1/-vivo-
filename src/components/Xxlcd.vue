<template>
	<div id="app3" v-show="showshopping">
		<ul>
			<li>
				<a href="#/xindex" @click="hidden" >商城首页</a>
			</li>
			<li>
				<a href="#/xmyshopping" @click="hidden"  >个人中心</a>
			</li>
			<li>
				<a href="" class="app3_a3" @click="hidden" >选购手机</a>
			</li>
			<li>
				<a href="" class="app3_a4" @click="hidden" >全部分类</a>
				
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				
			}
		},
		computed: {
			showshopping(){
				return this.$store.state.shopping;
			}
		},
		methods:{
           hidden(){
           	this.$store.state.shopping=!this.$store.state.shopping;
           }
		}
	}
</script>

<style scoped>
	#app3 {
		width: 40%;
		height: 26%;
		position: flex;
		top: 56px;
		left: 56%;
		background: #fff;
		z-index:1000;
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
	
	
</style>