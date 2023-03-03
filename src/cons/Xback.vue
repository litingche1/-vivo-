<template>
	<div id="app4" v-show="showXback" @mousedown="onclick">
		
	</div>
</template>

<script>
export default{
    computed:{
        showXback(){
            return this.$store.state.xr;
        }
    },
    methods:{
    	onclick(){
    		this.$store.state.xr=!this.$store.state.xr
    	}
    }
}
</script>

<style>
	#app4{
		background:#ccc;
		height: 100%;
        width: 100%;
        z-index:500;
        position:fixed;
        top: 56px;
        left: 0;
        opacity:0.5;
	}
</style>