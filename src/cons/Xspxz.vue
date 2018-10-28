<template>
	<div id="myapp2">
		<!--头部-->
		<header>
			<div class="header_l">
				<img :src="arrData[0].imgUrl[0]" alt="" />
			</div>
			<div class="header_r">
				<p class="price">{{"￥"+price}}</p>
				<p class="versions">
					<i>已选:</i>
					<span class="v1">{{v11}}</span>
					<span class="bb">{{bb1}}</span>
					<span class="pz">{{pz1}}</span>
				</p>
				<i class="iconfont" @click="gb">&#xe85c;</i>
			</div>
		</header>
		<!--内容-->
		<div class="content">
			<div class="edition">
				<p class="v2">版本</p>
				<ul class="v2_ul">
					<li v-for="(a,index) in v2Arr" v-text="a" ref="tit" @click="dj(index)"></li>
				</ul>
			</div>
			<div class="edition1">
				<p class="v3">颜色</p>
				<ul class="v3_ul">
					<li v-for="(b,index) in v3Arr" v-text="b" ref="tit1" @click="dj1(index)"></li>

				</ul>
			</div>
			<div class="edition2">
				<p class="v4">套餐</p>
				<ul class="v4_ul">
					<li v-for="(c,index) in v4Arr" v-text="c" ref="tit2" @click="dj2(index)"></li>
				</ul>
			</div>
			<div class="spsl">
				<p class="v4">数量</p>
				<p class="sl"><i class="iconfont1" @click="remove">&#xe613;</i><input type="text" v-model="spsl" class="gs" /><i class="iconfont1" @click="add">&#xe910;</i></p>

			</div>
			<!--加入购物车按钮-->
			<div class="qd" v-if="kk">
				<a href="javascript:;" @click="qd">确定</a>
			</div>
			<div class="jrgwc" v-else>
				<a href="javascript:;" @click="qd">加入购物车</a>
				<a href="javascript:;">立即购买</a>
			</div>
			<transition name="dh">
				<div class="success" v-show="gwc">
					<p v-text="gwcts"></p>
				</div>
			</transition>

		</div>
	</div>
</template>

<script>
	import $ from "jquery"
	export default{
		data() {
			return {
				price: 0,
				v11: "全网通版4G+64G版本",
				bb1: "极光版",
				pz1: "官方标配",
				arrData: [{
					imgUrl: [""],
					price: 0
				}],
				sjpzData: [],
				spsl: 1,
				gwc: false,
				gwcts: "加入购物车成功 !",
				v2Arr: ["全网通版 4G+64G版本", "全网通版 6G+64G版本", "全网通版 6G+128G版本"],
				v3Arr: ["瓷釉黑", "宝石蓝", "炫慕红", "瓷釉蓝", "极光版", "黑金"],
				v4Arr: ["官方标配", "耳机套餐", "游戏手柄套餐", "乐心手环套餐"]
			}
		},
		components: {

		},
		computed: {
			kk() {
				//改变当前页面购物车按钮的状态
				return this.$store.state.gwcButon
			}
		},
		methods: {
			//封装获取cookie的函数
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
			qd() {
				//判断用户是否登录
				if(this.getCookie("username")) {
					this.sjpzData = [{
						v1: this.v11,
						bb: this.bb1,
						pz: this.pz1,
						spsl: this.spsl,
					}]
					//把选择的手机数据发送给商品详情页面
					this.$store.state.sjpz = this.sjpzData;
					var self=this;
					//把商品存入cookie
					var da=new Date();
					da.setDate(da.getDate()+14);
					var dataList=[];
//					console.log(this.getCookie("goodslist"));
					if(this.getCookie("goodslist")==undefined){
						dataList=[];
					}else{
						
				   dataList=JSON.parse(this.getCookie("goodslist"));
				   console.log(dataList) 
					}
					var dataArr={
						"id":this.arrData[0]._id,
						"name":this.arrData[0].name,
						"spsl":this.spsl,
						"imgUrl":this.arrData[0].imgUrl[0],
						"price":this.arrData[0].price,
						"color":this.bb1,
						"pz":this.pz1
					}
					console.log(dataArr)
				 for(var i=0;i<dataList.length;i++){
				 	if(dataList[i].name===dataArr.name&&dataList[i].color===dataArr.color&&dataList[i].pz===dataArr.pz){
				 		console.log(85646);
				 		dataList[i].spsl+=dataArr.spsl;
				 		console.log(dataList[i].spsl);
				 		break;
				 	}
				 }
				 if(i===dataList.length){
				 	dataList.push(dataArr)	
	     
				 }
				 document.cookie="goodslist="+JSON.stringify(dataList)+";expires="+da.toUTCString();	
//					
//					$.ajax({
//						type:"post",
//						url:"http://localhost:9000/scar",
//						data:{
//						username:self.getCookie("username"),
//						spdata:{
//						v1: this.v11,
//						bb: this.bb1,
//						pz: this.pz1,
//						spsl: this.spsl,
//					}
//						},
//						success(data){
//							console.log(data);
//						}
//					})
				} else {
					this.gwcts = "您没有登录,请先登录"
				}
				this.gwc = true;
				setTimeout(function() {
					this.gwc = false;
					history.back();
				}, 2000)
			},
			gb() {
				history.back();
				this.sjpzData = [{
					v1: this.v11,
					bb: this.bb1,
					pz: this.pz1,
					spsl: this.spsl,
				}]
				//把选择的手机数据发送给商品详情页面
				this.$store.state.sjpz = this.sjpzData;
				console.log(this.sjpzData)
			},
			//获取点击的数据以及改变当前节点的样式
			dj(index) {
				for(var i = 0; i < this.$refs.tit.length; i++) {
					this.$refs.tit[i].classList.remove("v2active");
				}
				this.$refs.tit[index].classList.add("v2active");
				this.v11 = this.$refs.tit[index].innerHTML
//				console.log(this.$refs.tit[index].innerHTML)
			},
			dj1(index) {
				for(var i = 0; i < this.$refs.tit1.length; i++) {
					this.$refs.tit1[i].classList.remove("v2active");
				}
				this.$refs.tit1[index].classList.add("v2active");
				this.bb1 = this.$refs.tit1[index].innerHTML
			},
			dj2(index) {
				for(var i = 0; i < this.$refs.tit2.length; i++) {
					this.$refs.tit2[i].classList.remove("v2active");
				}
				this.$refs.tit2[index].classList.add("v2active");
				this.pz1 = this.$refs.tit2[index].innerHTML
//				console.log(this.$refs.tit2[index].innerHTML)
			},
			add() {
				this.spsl++;
				this.price = this.price * 1 + this.arrData[0].price * 1;
			},
			remove() {
				if(this.spsl <= 1) {
					this.spsl = 1;
					this.price = this.arrData[0].price
				} else {
					this.spsl--;
					this.price = this.price - this.arrData[0].price;
				}

			}
		},
		mounted() {
			//接收商品详情页面发送过来的数据
			this.arrData = this.$store.state.spsj;
			console.log(this.arrData)
			//实例化商品价格
			this.price = this.arrData[0].price

		}
	}
</script>

<style scoped>
	#myapp2 {
		width: 100%;
		height: 100%;
		/*position: absolute;
		top: 0;
		left: 0;*/
		background: #fff;
		/*	z-index: 11001;*/
	}
	
	header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		/*margin: 0 auto;*/
		padding-top: 15px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		background: #fff;
		/*border: 1px solid #999;*/
	}
	
	.header_l {
		width: 30%;
		height: 100px;
		line-height: 100px;
		text-align: center;
	}
	
	.header_l img {
		width: 80%;
		height: 80%;
	}
	
	.header_r {
		width: 70%;
		height: 100px;
		display: flex;
		flex-direction: column;
		/*justify-content: ;*/
	}
	
	.price {
		width: 100%;
		height: 40%;
		font-size: 18px;
		line-height: 40px;
	}
	
	.versions {
		width: 100%;
		height: 60%;
		font-size: 14px;
	}
	
	.versions span {
		padding: 5px;
	}
	
	@font-face {
		font-family: 'iconfont';
		/* project id 890124 */
		src: url('//at.alicdn.com/t/font_890124_ikwg0t4onq.eot');
		src: url('//at.alicdn.com/t/font_890124_ikwg0t4onq.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_890124_ikwg0t4onq.woff') format('woff'), url('//at.alicdn.com/t/font_890124_ikwg0t4onq.ttf') format('truetype'), url('//at.alicdn.com/t/font_890124_ikwg0t4onq.svg#iconfont') format('svg');
	}
	
	.iconfont {
		font-family: "iconfont" !important;
		font-size: 30px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-webkit-text-stroke-width: 0.2px;
		-moz-osx-font-smoothing: grayscale;
		font-weight: 400;
		position: absolute;
		top: 8px;
		right: 20px;
	}
	
	.iconfont1 {
		font-family: "iconfont" !important;
		font-size: 30px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-webkit-text-stroke-width: 0.2px;
		-moz-osx-font-smoothing: grayscale;
		font-weight: 400;
	}
	
	.content {
		width: 80%;
		margin: 10px auto;
		padding-top: 115px;
	}
	
	.v2 {
		font-size: 18px;
		width: 100%;
		line-height: 30px;
		height: 30px;
		margin-bottom: 10px;
	}
	
	.v2_ul {
		width: 100%;
	}
	
	.v2_ul li {
		width: 70%;
		height: 40px;
		font-size: 14px;
		border: 1px solid #f6f6f6;
		text-align: center;
		line-height: 40px;
		margin-bottom: 8px;
	}
	
	.v2active {
		border: 1px solid #8f8f8f !important;
	}
	
	.v3 {
		font-size: 18px;
		width: 100%;
		line-height: 30px;
		height: 30px;
		margin-bottom: 10px;
	}
	
	.v3_ul {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}
	
	.v3_ul li {
		width: 30%;
		height: 40px;
		font-size: 14px;
		border: 1px solid #f6f6f6;
		text-align: center;
		line-height: 40px;
		margin-bottom: 8px;
		margin-right: 8px;
	}
	
	.v4 {
		font-size: 18px;
		width: 100%;
		line-height: 30px;
		height: 30px;
		margin-bottom: 10px;
	}
	
	.v4_ul {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}
	
	.v4_ul li {
		width: 45%;
		height: 40px;
		font-size: 14px;
		border: 1px solid #f6f6f6;
		text-align: center;
		line-height: 40px;
		margin-bottom: 8px;
		margin-right: 8px;
	}
	
	.v5 {
		width: 100%;
		height: 20px;
		line-height: 20px;
		font-size: 16px;
	}
	
	.spsl {
		width: 100%;
		height: 120px;
	}
	
	.sl {
		width: 40%;
		height: 30px;
		border: 1px solid #999;
		text-align: center;
		line-height: 30px;
	}
	
	input {
		width: 50px;
		height: 28px;
		border: 1px solid #999;
		margin-top: -14px;
		text-align: center;
		line-height: 28px;
	}
	
	.jrgwc {
		position: fixed;
		left: 0;
		bottom: 0px;
		width: 100%;
		height: 50px;
		background: #fff;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	
	.jrgwc a {
		width: 46%;
		height: 40;
		display: inline-block;
		color: #fff;
		text-align: center;
		line-height: 40px;
		z-index: 100;
	}
	
	.jrgwc a:nth-child(1) {
		background: #ff9536;
		border-top-left-radius: 10px;
		border-bottom-left-radius: 10px;
	}
	
	.jrgwc a:nth-child(2) {
		background: #ff193a;
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
	}
	
	.qd {
		position: fixed;
		left: 0;
		bottom: 0px;
		width: 100%;
		height: 50px;
		background: #fff;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	
	.qd a {
		width: 90%;
		height: 40;
		display: inline-block;
		color: #fff;
		text-align: center;
		line-height: 40px;
		z-index: 100;
		background: #ff193a;
		border-radius: 10px;
	}
	
	.success {
		position: fixed;
		left: 25%;
		top: 50%;
		width: 50%;
		height: 60px;
		background: #4d4d4d;
		color: #fff;
		text-align: center;
		line-height: 60px;
		border-radius: 10px;
	}
	
	.dh-enter-active {
		animation: bounce-in 1.5s;
	}
	
	.dh-leave-active {
		animation: bounce-in 5s reverse;
	}
	
	@keyframes bounce-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>