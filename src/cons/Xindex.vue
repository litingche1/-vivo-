<template>
<div>

	<xheader></xheader>
	<section class="guarantees"></section>
	<xlbt></xlbt>
	<xcontent></xcontent>
	<!--<xxk></xxk>-->
	</div>
</template>

<script>
	import xheader from "../components/Xheader.vue"
	import xlbt from "../components/Xlbt.vue"
	import xcontent from "../components/Xcontent.vue"
	import xxk from "../components/Xxk.vue"
	
	export default{
		components:{
			xheader,
			xlbt,
			xcontent,
			xxk
		}
	}
</script>

<style>
.guarantees {
    width: 100%;
    height: 40px;
    background: #fff url(https://shopstatic.vivo.com.cn/vivoshop/wap/dist/images/home/bg-guarantees_1b2dc72.png) center center no-repeat;
    background-size: 100% 32px;
}
</style>