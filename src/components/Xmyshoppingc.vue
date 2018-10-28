<template>
	<div id="app8">
		<div class="back">
			<div class="tx">
				<img src="https://bbs.vivo.com.cn/avatar/329795040/big" alt="" />
				<!--<div class="txt"></div>-->
			</div>
			<div class="yhm">
				1234555
			</div>
			<div class="yhms">
				<a href="" class="hy"><span class="tp"></span><span class="wz">会员</span></a>
				<a href="" class="lbgc">礼包广场</a>
			</div>
		</div>
		<nav>
			<a href=""><span>0</span><span>优惠券</span></a>
			<a href=""><span>0</span><span>换新鼓励金</span></a>
			<a href=""><span>0</span><span>积分</span></a>
		</nav>
		<div class="dd">
			<div class="d_h">
				<a href="">我的订单</a>
				<a href="">全部订单></a>
			</div>
			<div class="d_b">
				<a href="">
					<p>
						<span class="dd_tp dd_tp1"></span>
						<span>待付款</span>
						<span class="ddwz">1</span>
					</p>

				</a>
				<a href="">
					<p>
						<span class="dd_tp dd_tp2"></span>
						<span>待收货</span>
						<span class="ddwz1">1</span>

					</p>
				</a>
				<a href="">
					<p>
						<span class="dd_tp dd_tp3"></span>
						<span>待评价</span>
						<span class="ddwz2">1</span>

					</p>
				</a>
				<a href="">
					<p>
						<span class="dd_tp dd_tp4"></span>
						<span>退货/退款</span>
						<span class="ddwz3">1</span>

					</p>
				</a>
			</div>
		</div>
		<div class="mylist">
			<ul class="l_ul">
				<li>
					<a href="">
						<i class="i_1"></i>
						<span>我的回收订单</span>
						<span class="rjt iconfont">&#xe600;</span>
					</a>
				</li>
				<li>
					<a href="">
						<i class="i_2"></i>
						<span>我的抽奖</span>
						<span class="rjt iconfont">&#xe600;</span>
					</a>
				</li>
				<li>
					<a href="">
						<i class="i_3"></i>
						<span>我的收藏</span>
						<span class="rjt iconfont">&#xe600;</span>
					</a>
				</li>
				<li>
					<a href="">
						<i class="i_4"></i>
						<span>我的评价</span>
						<span class="rjt iconfont">&#xe600;</span>
					</a>
				</li>
				<li>
					<a href="">
						<i class="i_5"></i>
						<span>我的收货地址</span>
						<span class="rjt iconfont">&#xe600;</span>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import $ from "jquery"
	export default{
		data(){
			return{
				
			}
		},
		methods:{
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
				console.log(res);
				return res;
			}
			
		},
		mounted() {
			console.log(this.toggle);
			var ll = this.getCookie("username");
			if(ll) {
				$(".yhm").text(ll);
			}
		}
	}
</script>

<style scoped>
	#app8 {
		width: 100%;
		padding-top: 56px;
		background-color: #f4f4f4;
	}
	
	.back {
		width: 100%;
		height: 200px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: url(https://shopstatic.vivo.com.cn/vivoshop/wap/dist/images/membercenter/bg-top_7610a5d.png) no-repeat;
		background-size: 100% 100%;
	}
	
	.tx {
		flex: 2;
		width: 80px;
		text-align: center;
		margin-top: 15px;
	}
	
	.tx img {
		width: 100%;
		border-radius: 50%;
	}
	
	.txt {
		width: 120px;
		height: 120px;
		border-radius: 50%;
		position: absolute;
		top: 56px;
		left: 128px;
		background-image: url(https://shopstatic.vivo.com.cn/vivoshop/wap/dist/images/common/box-level0_1beb2e8.png);
		background-repeat: no-repeat;
		background-size: contain;
	}
	
	.yhm {
		width: 100%;
		flex: 1;
		/*margin:auto;*/
		line-height: 46px;
		text-align: center;
		color: #fff;
	}
	
	.yhms {
		width: 59%;
		flex: 1;
		align-self: flex-end;
		/*text-align:right;*/
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	
	.hy {
		display: flex;
		width: 30%;
		color: #666;
		border-radius: 10px;
		font-size: 14px;
		text-align: center;
		line-height: 24px;
		background: #fff;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	
	.hy .tp {
		display: inline-block;
		width: 40%;
		height: 24px;
		background: url(https://shopstatic.vivo.com.cn/vivoshop/wap/dist/images/common/icons-level_2cc2e11.png) no-repeat;
		align-self: center;
		background-size: 60px;
		background-position: 6px 7px;
	}
	
	.hy .wz {
		display: inline-block;
		width: 50%;
		height: 24px;
		text-align: left;
		align-self: center;
	}
	
	.lbgc {
		width: 30%;
		background: #017be2;
		color: #fff;
		border-radius: 10px;
		font-size: 14px;
		text-align: center;
	}
	
	nav {
		width: 100%;
		height: 100px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		background: #fff;
	}
	
	nav a {
		display: inline-block;
		height: 70%;
		/*background:red;*/
		color: #000;
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		/*align-items: center;*/
	}
	
	nav a span {
		width: 100%;
		display: block;
		height: 40%;
		text-align: center;
		line-height: 28px;
	}
	
	.dd {
		width: 100%;
		height: 100px;
		padding-top: 15px;
		margin-top: 15px;
		background: #fff;
	}
	
	.d_h {
		width: 100%;
		height: 30px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	
	.d_h a {
		width: 25%;
		height: 100%;
		color: #000;
		text-align: center;
		line-height: 30px;
		font-size: 14px;
	}
	
	.d_b {
		margin-top: 8px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		height: 65px;
	}
	
	.d_b a {
		display: inline-block;
		width: 25%;
		height: 100%;
		color: #000;
		text-align: center;
		line-height: 30px;
		font-size: 14px;
		/*background: red;*/
	}
	
	.d_b p {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	
	.dd_tp1 {
		text-align: center;
		line-height: 32px;
		display: inline-block;
		width: 100%;
		height: 50%;
		background: url(https://shopstatic.vivo.com.cn/vivoshop/wap/dist/images/membercenter/icon-unPayed_05c95e4.png) no-repeat center center;
		background-size: 25px 20px;
	}
	
	.ddwz {
		position: absolute;
		top: 425px;
		left: 55px;
		display: inline-block;
		width: 15px;
		height: 15px;
		text-align: center;
		line-height: 15px;
		background: red;
		font-size: 12px;
		border-radius: 50%;
		color: #fff;
	}
	
	.ddwz1 {
		position: absolute;
		top: 425px;
		left: 150px;
		display: inline-block;
		width: 15px;
		height: 15px;
		text-align: center;
		line-height: 15px;
		background: red;
		font-size: 12px;
		border-radius: 50%;
		color: #fff;
	}
	
	.ddwz2 {
		position: absolute;
		top: 425px;
		left: 240px;
		display: inline-block;
		width: 15px;
		height: 15px;
		text-align: center;
		line-height: 15px;
		background: red;
		font-size: 12px;
		border-radius: 50%;
		color: #fff;
	}
	
	.ddwz3 {
		position: absolute;
		top: 425px;
		left: 335px;
		display: inline-block;
		width: 15px;
		height: 15px;
		text-align: center;
		line-height: 15px;
		background: red;
		font-size: 12px;
		border-radius: 50%;
		color: #fff;
	}
	
	.dd_tp2 {
		text-align: center;
		line-height: 32px;
		display: inline-block;
		width: 100%;
		height: 50%;
		background: url(https://shopstatic.vivo.com.cn/vivoshop/wap/dist/images/membercenter/icon-unReceived_f12ebb8.png) no-repeat center center;
		background-size: 25px 20px;
	}
	
	.dd_tp3 {
		text-align: center;
		line-height: 32px;
		display: inline-block;
		width: 100%;
		height: 50%;
		background: url(https://shopstatic.vivo.com.cn/vivoshop/wap/dist/images/membercenter/icon-unCommented_9013ed0.png) no-repeat center center;
		background-size: 25px 20px;
	}
	
	.dd_tp4 {
		text-align: center;
		line-height: 32px;
		display: inline-block;
		width: 100%;
		height: 50%;
		background: url(https://shopstatic.vivo.com.cn/vivoshop/wap/dist/images/membercenter/icon-Return_bbc0227.png) no-repeat center center;
		background-size: 25px 20px;
	}
	
	.mylist {
		width: 100%;
		margin-top: 15px;
		margin-bottom: 15px;
	}
	
	.l_ul {
		width: 100%;
		height: 300px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: #fff;
	}
	
	.l_ul li {
		flex: 1;
		/*background: red;*/
		width: 100%;
		border-bottom:1px solid #f5f5f5;
	}
	
	.l_ul li a {
		display: block;
		width: 100%;
		height: 100%;
		line-height: 60px;
		color: #000;
		display: flex;
		flex-direction: row;
		/*justify-content: space-between;*/
		align-items: center;
		/*text-align:center;*/
	}
	
	.i_1 {
		display: inline-block;
		width: 20px;
		height: 20px;
		margin-left: 15px;
		margin-right: 8px;
		margin-top: -4px;
		background: url(https://shopstatic.vivo.com.cn/vivoshop/wap/dist/images/membercenter/icon-list_060e8eb.png) no-repeat;
		background-size: 23px 24px;
	}
	
	.i_2 {
		display: inline-block;
		width: 20px;
		height: 20px;
		margin-left: 15px;
		margin-right: 8px;
		margin-top: -4px;
		background: url(https://shopstatic.vivo.com.cn/vivoshop/wap/dist/images/membercenter/ico-lottery-gray_07b6f73.png) no-repeat;
		background-size: 23px 24px;
	}
	
	.i_3 {
		display: inline-block;
		width: 20px;
		height: 20px;
		margin-left: 15px;
		margin-right: 8px;
		margin-top: -4px;
		background: url(https://shopstatic.vivo.com.cn/vivoshop/wap/dist/images/membercenter/icon-fav_4f5be0a.png) no-repeat;
		background-size: 23px 24px;
	}
	
	.i_4 {
		display: inline-block;
		width: 20px;
		height: 20px;
		margin-left: 15px;
		margin-right: 8px;
		margin-top: -4px;
		background: url(https://shopstatic.vivo.com.cn/vivoshop/wap/dist/images/membercenter/icon-comment_13c3993.png) no-repeat;
		background-size: 23px 24px;
	}
	
	.i_5 {
		display: inline-block;
		width: 20px;
		height: 20px;
		margin-left: 15px;
		margin-right: 8px;
		margin-top: -4px;
		background: url(https://shopstatic.vivo.com.cn/vivoshop/wap/dist/images/membercenter/icon-address_a16ddfc.png) no-repeat;
		background-size: 23px 24px;
	}
	
	.rjt {
		flex: 3;
		text-align: right;
		/*float:right;*/
		margin-right: 2%;
	}
	
	@font-face {
		font-family: 'iconfont';
		/* project id 884506 */
		src: url('//at.alicdn.com/t/font_884506_wwt9bsgkor.eot');
		src: url('//at.alicdn.com/t/font_884506_wwt9bsgkor.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_884506_wwt9bsgkor.woff') format('woff'), url('//at.alicdn.com/t/font_884506_wwt9bsgkor.ttf') format('truetype'), url('//at.alicdn.com/t/font_884506_wwt9bsgkor.svg#iconfont') format('svg');
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
</style>