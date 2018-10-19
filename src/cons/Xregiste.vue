<template>
	<div id="registe">
		<div id="logo">
			<a class="logo_a"></a>
		</div>
		<div class="logo_f">
			<input class="input_t" type="text" name="username" id="user" placeholder="用户名" />
			<input class="input_t" type="password" name="password" id="pass" placeholder="密码" style="margin-top:15px;" />
			<input type="text" name="yzm" id="yzm" /><span class="yzm"></span>
		</div>

		<div class="logo_btn">
			<button class="btn1">注册</button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
              imgArrs:[require("../assets/imgs/qq.png"),
              require("../assets/imgs/zhifubao.png"),
              require("../assets/imgs/sina.png"),
              require("../assets/imgs/renren.png"),
              ]
			}
		}
	}
</script>

<style scoped>
	#registe {
		width: 100%;
	}
	
	#logo {
		margin-top: 15px;
		width: 100%;
		height: 50px;
	}
	
	#logo a {
		display: block;
		width: 40%;
		height: 38px;
		margin: 0 auto;
		background: url(../assets/imgs/vivo-logo.jpg) no-repeat center center;
		background-size: 90px;
	}
	
	.logo_f {
		margin-top: 30px;
		width: 100%;
		height: 200px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
	}
	
	.input_t {
		border: 1px solid #e8e8e8;
		align-self: center;
		width: 80%;
		height: 22%;
	}
	#yzm{
		margin-top:20px;
	    border: 1px solid #e8e8e8;
		align-self: center;
		width: 50%;
		height: 25%;
		margin-right: 8px;
	}
	.yzm{
	margin-top:20px;
	 border: 1px solid #e8e8e8;
		align-self: center;
		width: 30%;
		height: 25%;	
	}
	::-webkit-input-placeholder {
		color: #d5d5d5;
	}
	
	.logo_zd {
		width: 100%;
		height: 30px;
		margin-top: 30px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	
	.l_t {
		flex: 1;
		text-align: center;
		font-size: 12px;
		color: #787878;
	}
	
	.mm {
		flex: 1;
		text-align: center;
		font-size: 12px;
		color: #787878;
	}
	
	.logo_btn {
		width: 100%;
		margin-top: 20px;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	
	.btn1 {
		width: 80%;
		margin: 0 auto;
		height: 45px;
		background: #2899f7;
		color: #fff;
		font-size: 16px;
	}
	
	
</style>