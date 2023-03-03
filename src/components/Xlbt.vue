<template>
	<div class="swiper-container" id="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="a in arr"><img class="imgs" :src="a" alt="" /></div>
			</div>
			<!--分页-->
			<div class="swiper-pagination"></div>
		</div>
</template>

<script>
	import Swiper from "swiper"
	import "../../node_modules/swiper/dist/css/swiper.css"
	export default{
		data(){
			return{
				arr:[
				    require('../assets/imgs/20180911160750717685_original.jpg'),
				    require("../assets/imgs/20180929170500246833_original.jpg"),
				    require("../assets/imgs/20181008155621215167_original.jpg"),
				    require("../assets/imgs/2018101615120271723_original.jpg"),
				
				]
			}
		},
		mounted(){
			var s1=new Swiper('#swiper-container',{
				autoplay:{
					delay:1000,
					disableOnInteraction:false//设置成拖拽后还能继续运行
				},
				loop:true,
				speed:1000,
				pagination:{
					el:'.swiper-pagination'
				},
//				effect:'cube'
			});
			
			var oBox=document.getElementById('swiper-container');
			console.log(oBox)
			
			oBox.onmouseover=function(){//鼠标经过停止
				s1.autoplay.stop();
			}
			
			oBox.onmouseout=function(){//鼠标经过离开
				s1.autoplay.start();
			}
		}
	}
</script>

<style>
	/*移动样式*/
			.swiper-container{
				width: 100%;
				height: 240px;
			}
			.swiper-slide{
				width: 100%;
				height: 240px;
				font-size: 0.666666rem;
				text-align: center;
				height: 200px;
				color: #000;
			}
			.imgs{
			width: 100%;
			height: 240px;	
			}
</style>