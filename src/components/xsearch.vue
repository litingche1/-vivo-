<template>
	<div id="xxk">
		<ul>
			<li><a href="">NEX系列</a></li>
			<li><a href="">X系列</a></li>
			<li><a href="">Z系列</a></li>
			<li><a href="">Y系列</a></li>
			<li><a href="">商城</a></li>
			<li><a href="">专卖店</a></li>
			<li><a href="">Funtouch OS</a></li>

		</ul>
	</div>
</template>

<script>
//	import xheader from "Xheader.vue"
	export default{
//		components:{
//			xheader,
//		}
	}
</script>

<style scoped>
    #xxk{
        width: 100%;
        height:70%;
        }
	ul {
        width: 100%;
        display:flex;
        flex-direction: column;
        height: 100%;
        
    }  
    li{
        width: 100%;
       flex:1;
       align-self:center;
       display:flex;
       flex-direction:row;
       border-top:2px solid #161616;
       justify-content: space-around;
       /*background:red;*/
    } 
    li:nth-child(10){
       border-bottom:2px solid #161616;

    }
    li a{
        width: 80%;
        margin:0 auto;
        color:#fff;
        line-height: 44px;
        font-size:12px;

    } 
</style>