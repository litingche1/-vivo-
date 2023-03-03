<template>
  <div id="app7">
  <xmyshoppingheader title="my"></xmyshoppingheader>
  <xmyshoppingc></xmyshoppingc>
  <xfooter></xfooter>
  <xxlcd></xxlcd>
  <xmyback></xmyback>
  </div>
	
</template>

<script>
	import xmyshoppingheader from "../components/Xmyshoppingheader"
	import xmyshoppingc from "../components/Xmyshoppingc"
	import xfooter from "../components/xfooter.vue"
	import xxlcd from "../components/Xxlcd.vue"
	import xmyback from "../components/Xmyback.vue"
	export default{
		data(){
			return {	
			}
		},
		components:{
			xmyshoppingheader,
			xmyshoppingc,
			xfooter,
			xxlcd,
			xmyback,
		}
	}
</script>

<style>
	#app7{
		width:100%;
		height:100%;
		/*background:red;*/
	}
</style>