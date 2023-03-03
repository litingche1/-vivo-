<template>
	<div class="app4" v-show="showXback" @mousedown="onclick" :class="{
		'h38':title==='h38'
		}">
		
	</div>
</template>

<script>
export default{
	props:["title"],
    computed:{
        showXback(){
            return this.$store.state.shopping;
        }
    },
    methods:{
    	onclick(){
    		this.$store.state.shopping=!this.$store.state.shopping
    	}
    },
    mounted(){
    	
    }
}
</script>

<style>
	.app4{
		background:#ccc;
		height: 100%;
        width: 100%;
        z-index:500;
        position:fixed;
        top: 56px;
        left: 0;
        opacity:0.5;
	}
	.h38{
		top:38px;
	}
</style>