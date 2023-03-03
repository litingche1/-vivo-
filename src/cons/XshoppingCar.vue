<template>
	<div id="car">
		<xmyshoppingheader title="car"></xmyshoppingheader>
		<div class="mycar">
			<ul>
				<li v-for="(a,index) in spdata">
					<div class="left">
						<!--<input type="checkbox" id="jack" value="Jack" v-model="checkedNames">-->
						<input type="checkbox" :value="a.name" v-model="spdata2"  @click="checkone(a.name)" />
					</div>
					<div class="center">
						<img :src="a.imgUrl" alt="" />
					</div>
					<div class="right">
						<!--<p>{{spdata2}}</p>-->
						<p v-text="a.name" class="name"></p>
						<p class="color">{{"颜色:"+a.color}}</p>
						<p class="price">{{"￥"+a.price*a.spsl}}</p>
						<p class="sl"><i class="iconfont" @click="remove(index)">&#xe613;</i><input type="text" :value="a.spsl" ref="add" /><i class="iconfont" @click="add(index)">&#xe910;</i></p>

					</div>
					<span class="remove" @click.stop="removes(index)"><img src="https://shopstatic.vivo.com.cn/vivoshop/wap/dist/images/common/icon-delete_b18b164.png" alt="" /></span>
				</li>
			</ul>
		</div>
		<div class="myfooter">
			<div class="m_l">
				<input type="checkbox" v-model="checkAll">

				<!--<input type="checkbox" class="qx" />&nbsp;-->
				<span>全选</span>
			</div>
			<div class="m_c1">
				<span class="hj">合计:</span>&nbsp;
				<span class="spprice">{{"￥"+addsd}}</span>
			</div>

			<button>去结算</button>
		</div>
	</div>
</template>

<script>
	import $ from "jquery"
	import xmyshoppingheader from "../components/Xmyshoppingheader.vue"
	export default {
		data() {
			return {
				spdata: [],
				spdata1: [],
				spdata2: [],
				addsd: "0",

			}
		},
		components: {
			xmyshoppingheader,
		},
		methods: {
			setCookie(value) {
				var da = new Date();
				da.setDate(da.getDate() + 14);
				document.cookie = "goodslist=" + JSON.stringify(value) + ";expires=" + da.toUTCString();
			},
			add(index) {
				this.$refs.add[index].value++;
				this.spdata[index].spsl++;
				this.spdata1 = JSON.parse(this.getCookie("goodslist"));
				this.spdata1 = this.spdata;
				this.setCookie(this.spdata1)
			},
			remove(index) {
				if(this.$refs.add[index].value <= 1) {
					this.$refs.add[index].value = 1;
					this.spdata[index].spsl = 1;
				} else {
					this.$refs.add[index].value--;
					this.spdata[index].spsl--;
				}
				this.spdata1 = JSON.parse(this.getCookie("goodslist"));
				this.spdata1 = this.spdata;
				this.setCookie(this.spdata1)
			},
			removes(index) {
				var kk = JSON.parse(this.getCookie("goodslist"));
				kk.splice(index, 1);
				this.setCookie(kk);
				$(".mycar ul li").eq(index).remove();
				this.spdata2.splice(index, 1);
				this.adds();
			},
			checkone(name) {
				let idx = this.spdata2.indexOf(name);
				if(idx >= 0) {
					this.spdata2.splice(idx, 1);
					this.adds();
				} else {
					this.spdata2.push(name);
					this.adds();
				}
			},
			adds() {
				var sum = 0;
				for(var i = 0; i < this.spdata2.length; i++){
					for(var k = 0; k < this.spdata.length; k++) {
						if(this.spdata2[i] == this.spdata[k].name) {
							sum += this.spdata[k].spsl * this.spdata[k].price;

						}
					}

				}
				this.addsd = sum;
			},
			//封装获取的cookie函数
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
				return res;
			}
		},
		computed: {
			checkAll: {
				get() {
					return this.spdata.every(item => this.spdata2.indexOf(item.name) >= 0)
				},
				set(val) {
					if(val) {
						//全选
						this.spdata2 = this.spdata.map(item => item.name);
						this.adds();
					} else {
						console.log(66)
						//取消
						this.spdata2 = [];
						this.addsd=0;
					}

				}
			}
		},
		mounted() {
			this.spdata = JSON.parse(this.getCookie("goodslist"));
			//			console.log(this.spdata)
		}
	}
</script>

<style scoped>
	#car {
		width: 100%;
		height: 100%;
		/*background:#f4f4f4;*/
	}
	
	.mycar {
		padding-top: 56px;
		width: 90%;
		/*padding:10px auto;*/
		margin: 10px auto;
		background: #fff;
		margin-bottom: 30px;
	}
	
	.mycar ul {
		width: 100%;
		margin-top: 10px;
	}
	
	.mycar ul li {
		width: 100%;
		height: 150px;
		border-bottom: 2px solid #f9f9f9;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-top: 15px;
	}
	
	.left {
		flex: 1;
		height: 100%;
		/*background:#58bc58;*/
		text-align: center;
	}
	
	.left input {
		width: 70%;
		height: 20px;
		margin-top: 20px;
	}
	
	.center {
		flex: 2;
		height: 100%;
		text-align: center;
	}
	
	.center img {
		width: 82%;
		height: 40%;
	}
	
	.right {
		flex: 6;
		height: 100%;
	}
	
	.name {
		width: 100%;
		height: 20%;
		font-size: 14px;
		line-height: 30px;
		/*text-align:center;*/
	}
	
	.color {
		width: 100%;
		height: 20%;
		font-size: 14px;
		line-height: 30px;
		color: #888;
	}
	
	.price {
		width: 100%;
		height: 20%;
		font-size: 14px;
		line-height: 30px;
		color: red;
	}
	
	.sl {
		width: 50%;
		height: 20%;
		border: 1px solid #666;
		/*text-align: center;*/
	}
	
	.sl input {
		width: 45%;
		border: 1px solid #666;
		text-align: center;
		margin-top: -8px;
		height: 30px;
	}
	
	@font-face {
		font-family: 'iconfont';
		/* project id 890124 */
		src: url('//at.alicdn.com/t/font_890124_ikwg0t4onq.eot');
		src: url('//at.alicdn.com/t/font_890124_ikwg0t4onq.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_890124_ikwg0t4onq.woff') format('woff'), url('//at.alicdn.com/t/font_890124_ikwg0t4onq.ttf') format('truetype'), url('//at.alicdn.com/t/font_890124_ikwg0t4onq.svg#iconfont') format('svg');
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
	
	.remove {
		/*position:absolute;*/
		/*right:20px;
		top:100px;*/
		width: 40px;
		/*	float:right;*/
		height: 40px;
		text-align: center;
	}
	
	.remove>img {
		width: 80%;
		height: 80%;
	}
	
	.myfooter {
		width: 100%;
		height: 50px !important;
		background: #fff;
		position: fixed;
		bottom: 0;
		left: 0;
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		/*justify-content:space-between;*/
		align-items: center;
		/*padding-top:10px;*/
	}
	
	.m_l {
		width: 30%;
		height: 100%;
		text-align: center;
		line-height: 50px;
		font-size: 16px;
	}
	
	.m_l input {
		display: inline-block;
		width: 30px;
		height: 30%;
	}
	
	.m_c1 {
		width: 42%;
		height: 100%;
		display: inline-block;
		font-size: 16px;
		/*text-align:center;*/
		line-height: 50px;
		/*margin-right:50px;*/
	}
	
	.hj {
		color: #929292;
	}
	
	.spprice {
		color: red;
	}
	
	button {
		width: 25%;
		height: 80%;
		background: #f81200;
		color: #fff;
		border-radius: 20px;
	}
</style>