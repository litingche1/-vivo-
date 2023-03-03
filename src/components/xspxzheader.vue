<template>
	<div id="myapp1">
		<header>
			<div class="header_l">
				<img src="https://shopstatic.vivo.com.cn/vivoshop/commodity/24/5324_1535944472898hd_bi_750x750.png" alt="" />
			</div>
			<div class="header_r">
				123
			</div>
		</header>
	</div>
</template>

<script>
	import $ from "jquery";
	export default{
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped>
   #myapp1{
   	width:100%;
   	height:100%;
   }
   header{
   	width:90%;
   	margin:5%;
   	display:flex;
   	flex-direction: row;
   	justify-content:center;
   	align-items:center;
   	
   }
   .header_l{
   	width:40%;
   	height:100px;
   }
   .header_l img{
   	width:80%;
   	height:80%;
   }
   .header_r{
   	width:60%;
   	height:100px;
   }
</style>