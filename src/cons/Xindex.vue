<template>
	<div>

		<!--    <div id="app6">
    	
    </div>
 -->
		<xheader title="g"></xheader>
		<section class="guarantees"></section>
		<xlbt></xlbt>
		<xcontent></xcontent>
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
			xback
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