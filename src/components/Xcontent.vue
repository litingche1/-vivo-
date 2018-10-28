<template>
	<div id="content">
		<div class="clearfix">
			<ul class="lilist clearfix">
				<li class="lists" v-for="a in imgArrs" :key="a.id">
					<a href="javascript:;" class="lists_a"><img :src="a" alt="" class="lists_i" /></a>
				</li>
			</ul>
		</div>
		<h2 class="floor__title">热卖专区</h2>
		<div class="rm clearfix">
			<ul class="rmlist clearfix">
				<li id="10486" class="djsj">
					<a href="javascript:;"><img src="../assets/imgs/2018092614475745818_original.jpg" class="rm_ii" alt="" /></a>
				</li>
				<li id="10349" class="djsj">
					<a href="javascript:;" class="rm_a"><img src="../assets/imgs/z3.jpg" alt="" class="rm_i" /></a>
				</li>
				<li id="10391" class="djsj">
					<a href="javascript:;" class="rm_a"><img src="../assets/imgs/nex.jpg" alt="" class="rm_i" /></a>
				</li>
			</ul>
		</div>
		<h2 class="floor__title">精品手机</h2>
		<div class="jpsj">
			<ul class="jplist scsp">
				<li id="10636" class="djsj">
					<a href="javascript:;" class="jp_a"><img src="../assets/imgs/z1.jpg" alt="" class="jp_ii" /></a>
				</li>
				<li v-for="(c,index) in arrs" :id="c._id" class="djsj">
					<a href="javascript:;" class="jp_a">
						<img :src="c.imgUrl" alt="" class="jp_i" />
						<h3 v-text="c.name" class="jpname"></h3>
						<p v-text="c.ms" class="jpms"></p>
						<p class="jp_price">{{"￥"+c.price}}</p>
					</a>
				</li>

			</ul>
			<div class="gd">
				<a href="" class="gd_a">更多热卖手机></a>
			</div>
		</div>
		<h2 class="floor__title">精品配件</h2>
		<div class="wl_img">
			<img src="../assets/imgs/wl.jpg" alt="" />
		</div>
		<div class="jppj">
			<ul class="jp_ul scsp">
				<li v-for="d in arr" :id="d._id" class="djsj">
					<a href="javascript:;" class="jp_a"><img :src="d.imgUrl" alt="" class="jp_ii" />
						<h3 v-text="d.name" class="jpname"></h3>
						<p v-text="d.ms" class="jpms"></p>
						<p class="jp_price">{{"￥"+d.price}}</p>
					</a>
				</li>

			</ul>
			<div class="gd">
				<a href="" class="gd_a">更多热卖配件></a>
			</div>
		</div>
		<aside class="aside">
			<ul>
				<li class="aside__item">
					<a id="j_goTop" class="aside__item__link" href="javascript:;" @click="dj"></a>
				</li>
			</ul>
		</aside>
		<h2 class="floor__title">热点推荐</h2>
		<div class="foot_div">
			<ul class="div_ul">
				<li>
					<a href=""> NEX旗舰版</a>
				</li>
				<li>
					<a href="">Z1全面屏</a>
				</li>
				<li>
					<a href="">X23水滴屏</a>
				</li>
				<li>
					<a href="">Y75s全面屏</a>
				</li>
				<li>
					<a href="">NEX充电器</a>
				</li>
				<li>
					<a href="">闪充充电器</a>
				</li>
				<li>
					<a href="">HiFi耳机</a>
				</li>
				<li>
					<a href="">碎屏宝</a>
				</li>
			</ul>
		</div>

	</div>
</template>

<script>
	import $ from "jquery"
	export default {
		data() {
			return {
				imgArrs: [
					require("../assets/imgs/sjxtbl.png"),
					require("../assets/imgs/cd.png"),
					require("../assets/imgs/yy.png"),
					require("../assets/imgs/fll.png"),
					require("../assets/imgs/ms.png"),
					require("../assets/imgs/yj.png"),
					require("../assets/imgs/dz.png"),
					require("../assets/imgs/sp.png"),
				],
				arrs: [],
				arr: [],
			}
		},
		methods: {
			dj() {
				//				console.log($(window))
				if(window.scrollY > 500) {
					let timer = setInterval(function() {
						console.log(window.scrollY)
						let speed = window.scrollY / 10;

						scrollBy(0, -speed);

						if(window.scrollY <= 0) {
							clearInterval(timer);

							// 重置目标值
							scrollTo(0, 0);
						}
					}, 30)
				}
			},

		},
		mounted() {
			var self = this;

			$.ajax({
				type: "get",
				url: "http://localhost:9000/show",
				data: {},
				success(data) {
					//					console.log(data)
					self.arrs = data.slice(3, 9);
					console.log(self.arrs);
					self.arr = data.slice(9, 15);
					//					console.log(self.arr);
				}
			});
			$(".djsj").click(function() {
//				console.log(this.id)
				location.href = "#/xspqx?id=" + this.id;
			})
			$(".scsp").on("click", "li", function() {
//				console.log(this.id)
				location.href = "#/xspqx?id=" + this.id;
			})
		}

	}
</script>

<style scoped>
	#content {
		width: 100%;
	}
	
	.lilist {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	
	.lilist li {
		width: 25%;
		height: 80px;
		text-align: center;
		justify-content: space-around;
		line-height: 80px;
	}
	
	.lists_a {
		display: inline-block;
	}
	
	.lists_i {
		width: 60px;
	}
	
	.floor__title {
		margin: 0;
		height: 60px;
		font-size: 20px;
		font-weight: 400;
		line-height: 60px;
		color: #333;
		text-align: center;
		background: #f4f4f4;
	}
	
	.floor__title::before,
	.floor__title::after {
		position: relative;
		margin: 0 .1rem;
		display: inline-block;
		content: ' ';
		height: 1px;
		width: 15px;
		background-color: #9c9c9c;
		vertical-align: middle;
	}
	
	.rmlist {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	
	.rm_i {
		width: 100%;
		height: 300px;
	}
	
	.rmlist .rm_ii {
		width: 100%;
		height: 150px;
	}
	
	.rmlist li:nth-child(1) {
		width: 100%;
	}
	
	.rmlist li:nth-child(2),
	.rmlist li:nth-child(3) {
		height: 300px;
		width: 50%;
		float: left;
		text-align: center;
	}
	
	.jplist {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	
	.jplist li {
		width: 50%;
		height: 250px;
		/*background: red;*/
	}
	
	.jplist li:nth-child(1) {
		width: 100%;
		height: 200px;
	}
	
	.jppj {
		margin-top: 20px;
	}
	
	.jp_ul {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	
	.jp_ul li {
		width: 50%;
		height: 250px;
		/*background: red;*/
	}
	
	.jp_a {
		display: block;
		height: 250px;
		color: #000;
	}
	
	.jp_i {
		width: 100%;
		height: 150px;
	}
	
	.jp_ii {
		width: 100%;
		height: 150px;
	}
	
	.jp_price {
		color: red;
		font-size: 14px;
		text-align: center;
		line-height: 14px;
	}
	
	.jpname {
		margin-top: 10px;
		font-size: 14px;
		font-weight: 550;
		text-align: center;
		line-height: 14px;
	}
	
	.jpms {
		margin-top: 10px;
		margin-bottom: 30px;
		font-size: 14px;
		color: #000;
		/*	font-weight:700;*/
		text-align: center;
		line-height: 14px;
	}
	
	.gd {
		clear: both;
		height: 50px;
		font-size: 0;
		text-align: center;
	}
	
	.gd_a {
		font-size: 14px;
		line-height: 50px;
		color: #333;
	}
	
	.wl_img {
		width: 100%;
		height: 140px;
		margin-bottom: 20px;
	}
	
	.wl_img img {
		width: 100%;
		height: 140px;
	}
	
	.foot_div {
		width: 100%;
		border-bottom: 2px solid #f7f7f7;
	}
	
	.div_ul {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	
	.div_ul li {
		width: 21%;
		height: 40px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		/*align-items:center;*/
		/*margin-bottom: 5px;*/
		margin-top: 5px;
		/*border:1px solid #666;*/
	}
	
	.div_ul li a {
		width: 100%;
		height: 20px;
		border: 3px solid #f3f3f3;
		color: #333333;
		font-size: 12px;
		line-height: 20px;
		border-radius: 10px;
		align-self: center;
		text-align: center;
	}
</style>