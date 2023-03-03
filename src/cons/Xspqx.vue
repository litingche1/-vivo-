<template>
	<div id="app9">
		<!--头部组件-->
		<spqxheader></spqxheader>
		<!--swiper轮播图-->
		<div class="swiper-container" id="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="a in contentArrs[0].imgUrl"><img class="imgs" :src="a" alt="" /></div>
			</div>
			<!--分页-->
			<div class="swiper-pagination"></div>
		</div>
		<!--商品详情信息-->
		<div class="spms">
			<div class="spms_t">
				<h3 v-text="contentArrs[0].name"></h3>
				<p class="p1" v-text="contentArrs[0].ms"></p>
				<p class="p2"><span>{{"￥"+contentArrs[0].price}}</span></p>
			</div>
			<div class="spms_b">
				<ul class="spms_b_ul">
					<li>活动</li>
					<li>
						<p>
							<span>
							新品有礼
						</span>
							<i class="lable">
							含&nbsp;&nbsp;"晒单领爱奇艺卡"
						</i>
						</p>
						<p>
							<span>赠品</span>
							<span>以旧换新</span>
							<span>分期</span>
							<span>积分</span>
						</p>
					</li>
					<li>
						<i class="iconfont">&#xe600;</i>
					</li>
				</ul>
			</div>
		</div>
		<div class="sjbb">
			<div class="sjbb_t" @click="showSpxz">
				<ul class="sjbb_t_ul">
					<li>
						已选
					</li>
					<li>
						<p class="ubuntuPhone">
							<span v-text="pzData[0].v1"></span>
							<span v-text="pzData[0].bb"></span>
							<span v-text="pzData[0].pz"></span>
						</p>
						<p class="sjnumber">
							<span>{{pzData[0].spsl+"件"}}</span>
						</p>
					</li>
					<li>
						<i class="iconfont">&#xe600;</i>
					</li>
				</ul>
			</div>
			<div class="sjbb_b">
				<ul class="sjbb_b_ul">
					<li>顺丰极速达</li>
					<li>30天包退换</li>
					<li>全国联保</li>
				</ul>
			</div>
		</div>
		<!--评论部分-->
		<div class="yhtp1" v-if="plshuj.length<1">
			暂时没有评论
		</div>
		<div class="swiper-container pl" id="swiper-container1" v-else>
			<div class="swiper-wrapper">
				<div class="swiper-slide gg" v-for="a in plshuj">
					<div class="gg_top">
						<div class="gg_top_l">
							<img src="https://bbsfiles.vivo.com.cn/vivobbs/avatar/noavatar_middle.jpg" alt="" />
						</div>
						<div class="gg_top_r">
							<div class="gg_top_r_l">
								<p class="gg_top_p1">
									<span class="yhm" v-text="a.remark.createdBy">钟意于欢</span>
									<span class="hy" v-text="a.remark.memberLeverName">白银会员</span>
								</p>
								<p class="gg_top_p2">
									<span class="gg_top_sj">2018/10/24</span>
								</p>
							</div>
							<div class="gg_top_r_r">
								<img src="https://shopstatic.vivo.com.cn/vivoshop/wap/dist/images/detail/icons-stars_c20bc80.png" alt="" />
							</div>
						</div>
					</div>
					<div class="gg_c" v-text="a.remark.content">
						预售买的，用了很久才来评价，打游戏屏幕大，手感好，还上了省级宫本，开心?，星际版后面色彩迷人，阳光下十分绚丽，十分喜欢，，物流也很快，东莞到陕北俩天就到了，jovi语音各种黑科技，太棒了，支持
					</div>

					<div class="yhtp">
						<ul>
							<!--https://shopstatic.vivo.com.cn/vivoshop/remark/20181017/12/02/57/1810174337708570_7b1836242f1648b9bb93477a6dc66462_375x375.jpg-->
							<!--<li><img :src="https://shopstatic.vivo.com.cn/vivoshop/"+"a.remark.picture1Thumbnail" alt="" /></li>-->
							<li><img src="https://shopstatic.vivo.com.cn/vivoshop/remark/20181017/12/02/57/1810174337708570_7b1836242f1648b9bb93477a6dc66462_375x375.jpg" alt="" /></li>
							<li><img src="https://shopstatic.vivo.com.cn/vivoshop/remark/20181014/19/14/22/1810146926264643_bd3dca44a68647edbc56dca6886b66c1_375x375.jpg" alt="" /></li>

						</ul>
					</div>
					<!--<div class="gfhf" v-show="a.remarkReplyList.length>0">
						<span>{{"[官方回复]:"+a.remarkReplyList[0].replyContent}}</span>
					</div>-->
				</div>

			</div>
		</div>
		<!--商品详情图片-->
		<div class="ggl" id="qxtp">
			<ul>
				<li v-for="f in contentArrs[0].jstp"><img :src="f" alt="" /></li>
			</ul>
		</div>
		<!--返回顶部-->
		<div class="fhdb" v-show="show" @click="backtrack">
			<i class="iconfont1">&#xe65a;</i>
		</div>
		<!--售后服务-->
		<div id="Service">
			<div class="Service_t">
				<span class="wzms">售后服务</span>
				<a href="javascript:;">查看更多></a>
			</div>
			<div class="Service_b">
				<img src="https://shopstatic.vivo.com.cn/vivoshop/commodity/afterSale/20180821/1808216039528338_990x0.jpg" alt="" />
			</div>
		</div>
		<!--尾部-->
		<footer>
			<div class="footer">
				<div class="footer_l">
					<a href="javascript:;"><i class="iconfont">&#xe61a;</i></a>
					<a href="javascript:;"><i class="iconfont">&#xe604;</i></a>
					<a href="javascript:;"><i class="iconfont" @click="gwc">&#xe603;</i></a>
				</div>
				<div class="footer_r">
					<a href="javascript:;" class="jrgwc" @click="showSpxz1">加入购物车</a>
					<a href="javascript:;" class="gm">立即购买</a>
				</div>
			</div>
		</footer>
		<!--下拉菜单，背景图组件-->
		<xxlcd kl="h381"></xxlcd>
		<xmyback title="h38"></xmyback>
		<!--<xspxz :data="contentArrs"></xspxz>-->
	</div>

</template>

<script>
	import $ from "jquery"
	import Swiper from "swiper"
	import "../../node_modules/swiper/dist/css/swiper.css"
	import spqxheader from "../components/Xspqxheader.vue"
	import xxlcd from "../components/Xxlcd.vue"
	import xmyback from "../components/Xmyback.vue"
	//	import xspxz from "./Xspxz.vue"
	export default {
		data() {
			return {
				contentArrs: [{
					"_id": 10486,
					"name": "",
					"ms": "",
					"price": "",
					"isprice": "",
					"imgUrl": [""],
					"jstp": [""]
				}],
				plshuj: [{
					remark: {
						"content": "",
						"createdBy": "",
						"memberLeverName": "",
					}
				}],
				show: false,
				pzData: [{
					v1: "全网通版 6G+64G版本",
					bb: "宝石蓝",
					pz: "官方标配",
					spsl: 1
				}],
			}
		},
		components: {
			spqxheader,
			xxlcd,
			xmyback,
			//			xspxz,
		},
		methods: {
			backtrack() {
				$(window).scrollTop(0)
			},
			showSpxz() {
				location.href = "#/xspxz";
				this.$store.state.spsj = this.contentArrs;
			},
			showSpxz1() {
				location.href = "#/xspxz";
				this.$store.state.spsj = this.contentArrs;
				this.$store.state.gwcButon = !this.$store.state.gwcButon;
			},
			gwc(){
				location.href="#/shoppingcar"
			}
		},
		mounted() {
//			this.$store.state.spsj = this.contentArrs;
          //商品选择页面发送过来的数据
//			this.pzData = this.$store.state.sjpz;
			var self = this;
			$.ajax({
				type: "get",
				url: "http://localhost:9000/shows",
				async: true,
				data: {
					_id: self.$route.query.id
				},
				success(data) {
					self.contentArrs = data;
					//					console.log(data)
					//										console.log(self.contentArrs[0].imgUrl);
				}
			});
			$.ajax({
				type: "get",
				url: "http://localhost:9000/pl",
				async: true,
				data: {
					_id: self.$route.query.id
				},
				success(data) {
					console.log(JSON.parse(data))
					var kk = JSON.parse(data)
					self.plshuj = kk.data.remarkList;
					console.log(self.plshuj);
					//					console.log(self.plshuj[0].remark.remarkReplyList.replyContent);

				}
			});
			var s1 = new Swiper('#swiper-container', {
				//				loop: true,
				speed: 1000,
				pagination: {
					el: '.swiper-pagination'
				},
				observer: true,
				observeParents: true
				//				effect:'cube'
			});
			var s2 = new Swiper('#swiper-container1', {
				//				loop: true,
				speed: 1000,
				freeMode: true,
				freeModeMomentum: true,
				observer: true, //修改swiper自己或子元素时，自动初始化swiper
				observeParents: true //修改swiper的父元素时，自动初始化swiper
			});
			$(window).scroll(function() {
				if($(window).scrollTop() > 40) {
					self.show = true;
					//					console.log(self.show)
				} else {
					self.show = false;
				}
			})
		}
	}
</script>

<style scoped>
	#app9 {
		width: 100%;
		background: #f4f4f4;
	}
	/*移动样式*/
	
	.swiper-container {
		width: 100%;
		height: 350px;
	}
	
	.swiper-slide {
		width: 100%;
		height: 350px;
		text-align: left;
		color: #000;
	}
	
	.imgs {
		width: 100%;
		height: 350px;
	}
	
	.spms {
		width: 90%;
		margin: 10px auto;
		background: #fff;
		border-radius: 5px;
		overflow: hidden;
	}
	
	.spms_t {
		margin-top: 15px;
		padding-left: 5%;
		padding-right: 5%;
		width: 90%;
		height: 120px;
		border-bottom: 2px solid #fdfdfd;
	}
	
	.spms_t h3 {
		width: 100%;
		height: 20;
		font-size: 18px;
		text-align: left;
		line-height: 20px;
		margin-top: 10px;
	}
	
	.spms_t .p1 {
		margin-top: 8px;
		width: 100%;
		height: 40px;
		font-size: 12px;
		color: #999;
		/*line-height: 20px;*/
	}
	
	.spms_t .p2 {
		margin-top: 15px;
		width: 100%;
		height: auto;
		font-size: 24px;
		color: #000;
		line-height: 24px;
		;
	}
	
	.spms_b {
		width: 100%;
		padding-top: 10px;
		height: 70px;
		/*background:#58bc58;*/
	}
	
	@font-face {
		font-family: 'iconfont';
		/* project id 887743 */
		src: url('//at.alicdn.com/t/font_887743_onaani445k.eot');
		src: url('//at.alicdn.com/t/font_887743_onaani445k.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_887743_onaani445k.woff') format('woff'), url('//at.alicdn.com/t/font_887743_onaani445k.ttf') format('truetype'), url('//at.alicdn.com/t/font_887743_onaani445k.svg#iconfont') format('svg');
	}
	
	.iconfont {
		font-family: "iconfont" !important;
		font-size: 20px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-webkit-text-stroke-width: 0.2px;
		-moz-osx-font-smoothing: grayscale;
		font-weight: 400;
	}
	
	.iconfont1 {
		font-family: "iconfont" !important;
		font-size: 50px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-webkit-text-stroke-width: 0.2px;
		-moz-osx-font-smoothing: grayscale;
		font-weight: 400;
	}
	
	.spms_b_ul {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		/*background:red;*/
	}
	
	.spms_b_ul li {
		float: left;
	}
	
	.spms_b_ul li:nth-child(1) {
		flex: 1;
		color: #b5b5b5;
		text-align: center;
		font-size: 14px;
		/*line-height:10px;*/
	}
	
	.spms_b_ul li:nth-child(2) {
		flex: 5;
	}
	
	.spms_b_ul li:nth-child(3) {
		flex: 1;
		color: #e2e2e2;
		text-align: center;
	}
	
	.spms_b_ul>li>p {
		width: 100%;
		margin-bottom: 10px;
	}
	
	.spms_b_ul>li>p>span {
		font-size: 12px;
		background: #ff6477;
		text-align: center;
		line-height: 18px;
		padding: 3px;
		color: #fff;
		border-radius: 3px;
		margin-left: 10px;
		margin-right: 5px;
	}
	
	.lable {
		font-size: 14px;
		margin-left: 10px;
	}
	
	.sjbb {
		width: 90%;
		margin: 15px auto;
		border-radius: 5px;
		background: #fff;
	}
	
	.sjbb_t {
		width: 100%;
		padding-top: 10px;
		border-bottom: 1px solid #f8f8f8;
	}
	
	.sjbb_t_ul {
		width: 100%;
		height: 40px;
		margin: 5px;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	
	.sjbb_t_ul li:nth-child(1) {
		flex: 1;
		font-size: 14px;
		text-align: center;
	}
	
	.sjbb_t_ul li:nth-child(2) {
		flex: 8;
		font-size: 14px;
	}
	
	.sjbb_t_ul li:nth-child(3) {
		flex: 1;
		text-align: left;
		line-height: 50px;
		color: #e3e3e3;
	}
	
	.ubuntuPhone {
		width: 100%;
		display: flex;
		flex-direction: row;
		/*justify-content: center;*/
		align-items: center;
	}
	
	.ubuntuPhone>span {
		font-size: 12px;
		text-align: center;
	}
	
	.ubuntuPhone>span:nth-child(1) {
		width: 50%;
	}
	
	.ubuntuPhone>span:nth-child(2) {
		width: 21%;
	}
	
	.ubuntuPhone>span:nth-child(3) {
		width: 29%;
	}
	
	.sjbb_b {
		width: 100%;
	}
	
	.sjbb_b_ul {
		width: 100%;
		height: 40px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-self: center;
	}
	
	.sjbb_b_ul li {
		flex: 1;
		text-align: center;
		line-height: 40px;
		font-size: 12px;
	}
	
	.sjbb_b_ul li::before {
		display: inline-block;
		margin-right: 5px;
		content: '';
		width: 5px;
		height: 5px;
		background-color: #FF5E72;
		border-radius: 50%;
		vertical-align: middle;
	}
	
	footer {
		z-index: 10000;
		width: 100%;
		background: #fff;
		position: fixed;
		height: 50px;
		bottom: 0;
		left: 0;
	}
	
	.footer {
		width: 100%;
		height: 50px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	
	.footer_l {
		flex: 1;
		height: 100%;
		display: flex;
		flex-direction: row;
		box-sizing: border-box;
		justify-content: space-around;
		align-items: center;
	}
	
	.footer_l>a {
		width: 20%;
		text-align: center;
		line-height: 100%;
		color: #777777;
	}
	
	.footer_r {
		flex: 2;
		height: 100%;
		display: flex;
		flex-direction: row;
		box-sizing: border-box;
		/*	justify-content: space-around;*/
		align-items: center;
	}
	
	.footer_r>a {
		width: 45%;
		color: #fff;
		text-align: center;
		height: 80%;
		font-size: 14px;
		line-height: 40px;
		display: inline-block;
	}
	
	.footer_r>a:nth-child(1) {
		margin-left: 12px;
	}
	
	.jrgwc {
		background: #ff9536;
		border-top-left-radius: 10px;
		border-bottom-left-radius: 10px;
	}
	
	.gm {
		background: #ff193a;
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
	}
	
	.pl {
		width: 95%;
		height: 250px;
		margin-left: 5%;
	}
	
	.gg {
		width: 90% !important;
		height: 250px;
		margin-right: 5%;
		color: #000;
		background: #fff;
	}
	
	.gg_top {
		width: 100%;
		height: 70px;
		display: flex;
		flex-direction: row;
		box-sizing: border-box;
		margin-left: 8px;
		align-items: center;
	}
	
	.gg_top_l {
		flex: 1;
		height: 70%;
		border-radius: 50%;
		margin-right: 8px;
	}
	
	.gg_top_l img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	
	.gg_top_r {
		flex: 6;
		height: 100%;
		display: flex;
		flex-direction: row;
		box-sizing: border-box;
		/*	justify-content: space-around;*/
		align-items: center;
	}
	
	.gg_top_r_l {
		width: 60%;
		height: 100%;
	}
	
	.gg_top_r_l>p {
		width: 100%;
		height: 40%;
		text-align: left;
		font-size: 12px;
	}
	
	.gg_top_r p .yhm {
		display: inline-block;
		width: 50%;
		height: 100%;
		text-align: center;
		line-height: 35px;
	}
	
	.gg_top_r p .hy {
		display: inline-block;
		width: 50%;
		height: 80%;
		text-align: center;
		border-radius: 5px;
		/*line-height:35px;*/
		background: #b4bac1;
		color: #fff;
	}
	
	.gg_top_sj {
		line-height: 35px;
		color: #bfbfbf;
		margin-left: 5px;
	}
	
	.gg_top_r_r {
		width: 40%;
		height: 80%;
		text-align: center;
		overflow: hidden;
	}
	
	.gg_top_r_r>img {
		width: 60%;
		height: 35%;
		margin-top: 15px;
	}
	
	.gg_c {
		width: 100%;
		height: 33px;
		margin-left: 8px;
		font-size: 12px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	
	.yhtp {
		width: 100%;
		margin-left: 8px;
		margin-top: 15px;
		margin-bottom: 15px;
	}
	
	.yhtp1 {
		width: 100%;
		height: 250px;
		text-align: center;
		line-height: 250px;
		font-size: 14px;
		background: #fff;
	}
	
	.yhtp ul {
		width: 100%;
		display: flex;
		flex-direction: row;
		box-sizing: border-box;
		/*	justify-content: space-around;*/
		align-items: center;
	}
	
	.yhtp ul li {
		flex: 1;
		height: 60px;
	}
	
	.yhtp ul li img {
		width: 90%;
		height: 100%;
	}
	
	.gfhf {
		margin-left: 8px;
		width: 100%;
		height: 40px;
	}
	
	.gfhf span {
		display: inline-block;
	}
	
	.ggl {
		width: 100%;
	}
	
	.ggl ul {
		width: 100%;
	}
	
	.ggl ul li {
		width: 100%;
		height: 500px;
	}
	
	.ggl ul li img {
		width: 100%;
		height: 100%;
	}
	/*返回顶部*/
	
	.fhdb {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		position: fixed;
		bottom: 90px;
		right: 10px;
		background: #fff;
		line-height: 50px;
		text-align: center;
		color: #c7c7c7;
		z-index: 500;
	}
	
	#Service {
		margin: 10px auto;
		width: 90%;
		height: 600px;
	}
	
	.Service_t {
		width: 100%;
		height: 50px;
		/*background:red;*/
	}
	
	.wzms {
		display: inline-block;
		width: 30%;
		height: 50px;
		font-size: 20px;
		line-height: 50px;
		text-align: center;
	}
	
	.Service_t a {
		display: inline-block;
		width: 50%;
		font-size: 14px;
		color: #888888;
		text-align: left;
		line-height: 50px;
		height: 50px;
	}
	
	.Service_b {
		margin-top: 10px;
		width: 100%;
		height: 500px;
	}
	
	.Service_b img {
		width: 100%;
		height: 100%;
	}
</style>