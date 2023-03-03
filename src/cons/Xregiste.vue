<template>
	<div id="registe">
		<div id="logo">
			<a class="logo_a"></a>
		</div>
		<div class="logo_f">
			<input class="input_t" type="text" name="username" id="user" placeholder="用户名" @keyup="hk" /><span class="tsxx">{{ts}}</span>
			<input class="input_t" type="password" name="password" id="pass" placeholder="密码" style="margin-top:15px;" @input="yzmm" />
			<span class="tsxx mmts">{{mmts}}</span><br/>
			<input type="text" name="yzm" id="yzm" @input="yzyzm" /><span class="yzm" @click="randomCode(6)" v-text="yzm"></span><span class="tsxx">{{yzmts}}</span>
		</div>

		<div class="logo_btn">
			<button class="btn1" @click="zc">注册</button>
		</div>
	</div>
</template>

<script>
	import $ from "jquery"
	export default {
		data() {
			return {
				yzm: "10456",
				ts: "请输入6-14位(字母,数字特殊字符)的用户名",
				yzmts: "",
				mmts: "请输入6-20位(字母和数字组合)的密码"
			}
		},
		methods: {
			randomCode(n) {
				var mycode = '';
				for(var i = 0; i < n; i++) {
					mycode += parseInt(Math.random() * 10);
				}
				console.log(mycode)
				this.yzm = mycode;
			},
			zc() {
				if($("#user").val() && $("#pass").val()) {
					if($("#yzm").val() === $(".yzm").text() && this.ts === "该用户名可以注册" && this.mmts !== "输入符合规则的密码") {
						$.ajax({
							type: "post",
							url: "http://localhost:9000/resite",
							data: {
								username: $("#user").val(),
								password: $("#pass").val()
							},
							success(data) {
								location.href="#/xlogin"
							}
						})
					} else {
						//					console.log("请输入验证码")
						this.yzmts = "请输入正确的完整的信息"
					}
				} else {
					this.ts = "请输入完整的信息"
				}

			},
			hk() {
				var reg = /^[\w\u4E00-\u9FA5]{4,15}$/
				if(reg.test($("#user").val())) {
					this.ts = "";
					var self = this;
					$.ajax({
						type: "get",
						url: "http://localhost:9000/yzyhm",
						async: true,
						data: {
							username: $("#user").val()
						},
						success(data) {
							console.log(data);
							if(data.length >= 1) {
								self.ts = "用户名已经被注册"
								//								$("#user").val("");
							} else {
								self.ts = "该用户名可以注册"
							}
						}
					})

				} else {
					this.ts = "输入符合规则的用户名"
				}

			},
			yzmm() {
				var reg = /^[a-zA-Z0-9_-]{6,20}$/
				if(reg.test($("#pass").val())) {
					this.mmts = ""
				} else {
					this.mmts = "输入符合规则的密码"

				}

			},
			yzyzm() {
				if($("#yzm").val() !== null) {
					this.yzmts = ""
				}
			}
		},
		mounted() {
			this.randomCode(6);

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
	
	#yzm {
		margin-top: 10px;
		border: 1px solid #e8e8e8;
		align-self: center;
		width: 50%;
		height: 25%;
		margin-right: 8px;
	}
	
	.yzm {
		margin-top: 10px;
		border: 1px solid #e8e8e8;
		align-self: center;
		width: 30%;
		height: 25%;
		text-align: center;
		line-height: 52px;
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
		margin-top: 50px;
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
	
	.tsxx {
		color: #666;
		font-size: 14px;
		text-align: left;
	}
	
	.mmts {
		display: block;
		margin-top: 10px;
		font-size: 14px;
		width: 100%;
		height: 20px;
		text-align: center;
		line-height: 14px;
	}
</style>