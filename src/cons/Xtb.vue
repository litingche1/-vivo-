<template>
	<transition name="bounce">
		<div id="app2" v-show="isshow">
			<xheader title="t"></xheader>
			<xxk></xxk>
		</div>
	</transition>
</template>

<script>
	import xheader from "../components/Xheader.vue"
	import xxk from "../components/Xxk.vue"

	export default {
		data() {
			return {

			}
		},
		components: {
			xxk,
			xheader,
		},
		computed: {
			isshow() {
				return this.$store.state.shows;
			}
		}
	}
</script>

<style>
	#app2 {
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