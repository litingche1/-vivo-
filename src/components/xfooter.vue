<template>
	<footer class="clearfix">
		<div class="f_t clearfix">
			<a href="javascript:;">特色服务</a>
			<a href="javascript:;">小v客服</a>
			<a href="javascript:;"><span v-show="zc">登陆/注册</span><span v-show="dl" @click="removeDl">退出登陆</span></a>
			<a href="javascript:;">选购手机</a>
		</div>
		<div class="copyright">
			<p>©2017shop.vivo.com.cn</p>
			<a class="gdgs-hd" href="http://wljg.gdgs.gov.cn/corpsrch.aspx?key=441900000425711">
				<img src="https://shopstatic.vivo.com.cn/vivoshop/wap/dist/images/common/gssw-icon_db0a7f6.png" alt="">
			</a>
		</div>
	</footer>
</template>

<script>
	export default {
		data() {
			return {
				dl: false,
				zc: true
			}
		},
		methods: {
			getCookie(data) {
				var kk = document.cookie;
				var gg = kk.split("; ");
				var res;
				gg.forEach(function(item) {
					var arr = item.split("=");
					if(arr[0] == data) {
						res = arr[1];
					}
				})
//				console.log(res);
				return res;
			},
			removeDl(){
				var data=new Date();
				data.setDate(data.getDate()-15);
//			
				document.cookie="username=x" + ";expires=" + data.toUTCString();
			
				location.reload();
			}

		},
		mounted() {
			console.log(this.toggle);
			var ll = this.getCookie("username");
			if(ll) {
				this.dl = !this.dl;
				this.zc = !this.zc;
			}
		}
	}
</script>

<style>
	footer {
		width: 100%;
		height: 100px;
		/*margin: 0 auto;*/
		/*display:flex;
		flex-direction:row;*/
		/*justify-content: space-around;*/
	}
	
	.f_t {
		width: 100%;
		height: 25px;
		/*margin: auto;*/
		margin-top: 20px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
	
	.f_t a {
		box-sizing: border-box;
		position: relative;
		display: inline-block;
		flex: 1;
		font-size: 12px;
		color: #b3b3b3;
		align-self: center;
		text-align: center;
	}
	
	.copyright {
		width: 50%;
		height: 20px;
		margin: 0 auto;
		margin-top: 10px;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	
	.copyright p {
		color: #b8b8b8;
		flex: 8;
		height: 20px;
		text-align: right;
		line-height: 20px;
		font-size: 12px;
		align-self: center;
	}
	
	.copyright a {
		display: inline-block;
		height: 20px;
		color: #333;
		margin-left: 3px;
		flex: 1;
		font-size: 12px;
		align-self: center;
	}
	
	.copyright a img {
		width: 100%;
	}
	
	.aside {
		display: block;
		position: fixed;
		right: 0;
		bottom: 0;
		height: 50px;
		width: 50px;
		margin-right: 10px;
		z-index: 99;
		border-radius: 50%;
	}
	
	.aside a {
		/*border-radius:50%;*/
		display: block;
		width: 100%;
		height: 30px;
		background: green;
		background: url(../assets/imgs/bg-sidebar_7abaa02.png) no-repeat center -70px;
	}
</style>