<template>
	<div id="registe">
		<div id="logo">
			<a class="logo_a"></a>
		</div>
		<div class="logo_f">
			<input class="input_t" type="text" name="username" id="user" placeholder="手机号/邮箱号/用户名" />
			<input class="input_t" type="password" name="password" id="pass" placeholder="密码" style="margin-top:15px;" />
		</div>
		<div class="logo_zd">
			<div class="l_t">
				<input type="checkbox" class="shuk" @click="djCheck" /> 两周内自动登陆
			</div>
			<a href="javascript:;" class="mm">忘记密码?</a>
		</div>
		<div class="logo_btn">
			<button class="btn" @click="dl">登陆</button>
		</div>
		<div class="logo_btn">
			<button class="btn1" @click="zc">注册vivo账号</button>
		</div>
		<div class="third-ctn">

			<div class="text">其它方式登录</div>

			<div class="link-box">
				<a href="" v-for="a in imgArrs" :key="a.id"> <img :src="a" alt="" /></a>

			</div>
		</div>
	</div>
</template>

<script>
	import $ from "jquery"
	import common from "../lib/common.js"
	export default {
		data() {
			return {
				imgArrs: [require("../assets/imgs/qq.png"),
					require("../assets/imgs/zhifubao.png"),
					require("../assets/imgs/sina.png"),
					require("../assets/imgs/renren.png"),
				],
				toggle: true,
			}
		},
		methods: {
			dl() {
				var self = this;
				$.ajax({
					type: "get",
					url: "http://localhost:9000/dl",
					data: {
						username: $("#user").val(),
						password: $("#pass").val()
					},
					success(data) {
						console.log(data)
						if(data === "登陆成功") {
							self.$store.state.dl = !self.$store.state.dl;
							self.$store.state.zcdl = !self.$store.state.zcdl;
							console.log(this.toggle);
							if($(".shuk").attr("checked")){
								self.$store.state.dl = !self.$store.state.dl;
								self.$store.state.zcdl = !self.$store.state.zcdl;
								var da = new Date();
								da.setDate(da.getDate() + 14);
								//                          document.cookie="goodslist="+JSON.stringify(goodslist)+";expires="+da.toUTCString()+";Path="+escape('/');
								document.cookie = "username=" + $("#user").val() + ";expires=" + da.toUTCString();
							}else{
								self.$store.state.dl = !self.$store.state.dl;
								self.$store.state.zcdl = !self.$store.state.zcdl;
								document.cookie = "username=" + $("#user").val()
							}
//                           self.$store.state.dl = !self.$store.state.dl;
//								self.$store.state.zcdl = !self.$store.state.zcdl;
								//                          document.cookie="goodslist="+JSON.stringify(goodslist)+";expires="+da.toUTCString()+";Path="+escape('/');
								
							location.href = "#/xindex"

						}
					}
				})
			},
			zc() {

				location.href = "#/xregiste"
			},

			djCheck() {
				if(this.toggle) {
					$(".shuk").attr("checked", "checked")
				} else {
					$(".shuk").removeAttr("checked")
				}
				this.toggle = !this.toggle;
				console.log(this.toggle)
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
		height: 100px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	
	.input_t {
		border: 2px solid #e8e8e8;
		align-self: center;
		width: 80%;
		height: 40%;
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
	
	.btn {
		width: 80%;
		margin: 0 auto;
		height: 45px;
		background: #2899f7;
		color: #fff;
		font-size: 16px;
	}
	
	.btn1 {
		width: 80%;
		margin: 0 auto;
		height: 45px;
		background: #fff;
		border: 1px solid #d9d9d9;
		color: #666666;
		font-size: 16px;
	}
	
	.third-ctn {
		width: 100%;
		height: 60px;
		margin-top: 30px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
	}
	
	.text {
		width: 80%;
		margin: 0 auto;
		height: 20px;
		text-align: center;
		font-size: 12px;
		color: #999999;
	}
	
	.link-box {
		width: 60%;
		height: 40px;
		margin: 10px auto;
		display: flex;
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
	}
	
	.link-box a {
		display: inline-block;
		width: 20%;
		height: 40px;
		text-align: center;
		align-self: center;
	}
	
	.link-box a img {
		width: 60%;
		/*height: 40px;*/
	}
</style>