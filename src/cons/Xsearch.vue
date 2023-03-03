*<template>
	<transition name="bounce">
		<div id="app3" v-show="isshow">
			<xheader2></xheader2>
			<xsearch1></xsearch1>

		</div>
	</transition>
</template>

<script>
	import xheader2 from "../components/Xheader2.vue"
	import xsearch1 from "../components/xsearch.vue"

	export default {
		data() {
			return {
				kk: true,
			}
		},
		components: {
			xsearch1,
			xheader2,
		},
		computed: {
			isshow() {
				return this.$store.state.bool;
			}
		}
	}
</script>

<style>
	#app3 {
		width: 100%;
		height: 100%;
		background: #0d0d0d;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1000;
	}
	
	.bounce-enter-active {
		animation: scale 0.6s;
	}
	
	.bounce-leave-active {
		animation: scale 0.6s reverse;
	}
	
	@keyframes scale {
		from {
			transform: translateY(-600px);
		}
		to {
			transform: translateY(0);
		}
	}
</style>