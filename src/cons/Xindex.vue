<template>
	<div>

		<!--    <div id="app6">
    	
    </div>
 -->
		<xheader title="g"></xheader>
		<section class="guarantees"></section>
		<xlbt></xlbt>
		<xcontent></xcontent>
		<xfooter></xfooter>
		<xtb></xtb>
		<xsea></xsea>
		<xr></xr>
		<xback></xback>
	</div>
</template>

<script>
	import xheader from "../components/Xheader.vue"
	import xlbt from "../components/Xlbt.vue"
	import xcontent from "../components/Xcontent.vue"
	import xfooter from "../components/xfooter.vue"
	import xtb from './Xtb.vue'
	import xsea from './Xsearch.vue'
	import xr from './Xr.vue'
	import xback from './Xback.vue'
	export default {
		components: {
			xheader,
			xlbt,
			xcontent,
			xtb,
			xsea,
			xr,
			xback,
			xfooter
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
				this.$store.state.dl=!this.$store.state.dl;
				this.$store.state.zcdl=!this.$store.state.zcdl;
				
				location.href = "#/xindex"
			}
		}
	}
</script>

<style>
	#app6 {
		width: 100%;
		height: 56px;
	}
	
	.guarantees {
		padding-top: 56px;
		width: 100%;
		height: 40px;
		background: #fff url(https://shopstatic.vivo.com.cn/vivoshop/wap/dist/images/home/bg-guarantees_1b2dc72.png) center 60px no-repeat;
		background-size: 100% 32px;
	}
</style>