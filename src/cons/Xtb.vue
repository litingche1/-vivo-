<template>
	<div id="app2" v-show="shows">
		<xheader></xheader>
		<xxk></xxk>
	</div>

</template>

<script>
	import xheader from "../components/Xheader.vue"
	import xxk from "../components/Xxk.vue"

	export default {
		data(){
		 return{
		 	shows:false,
		 }
		},
		components: {
			xxk,
			xheader,
		}
	}
</script>

<style>
#app2{
   width: 100%;
   height: 100%;
   background:#0d0d0d;
	position:fixed;
	top:0;
	left:0;
	z-index:500;
}
</style>