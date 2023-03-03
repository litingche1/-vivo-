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
			<li><a href="">服务</a></li>
			<li><a href="">社区</a></li>
			<li><a href=""><i class="iconfont">&#xe62a;</i>搜索</a></li>
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
        text-align:center;
        line-height: 44px;
        font-size:14px;

    } 
@font-face {
  font-family: 'iconfont';  /* project id 485561 */
  src: url('https://at.alicdn.com/t/font_485561_xm6b65ewtgl.eot');
  src: url('https://at.alicdn.com/t/font_485561_xm6b65ewtgl.eot?#iefix') format('embedded-opentype'),
  url('https://at.alicdn.com/t/font_485561_xm6b65ewtgl.woff') format('woff'),
  url('https://at.alicdn.com/t/font_485561_xm6b65ewtgl.ttf') format('truetype'),
  url('https://at.alicdn.com/t/font_485561_xm6b65ewtgl.svg#iconfont') format('svg');
}
.iconfont{
  color:#fff;
  font-family:"iconfont" !important;
  font-size:18px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  margin-right: 5px;
  margin-top: 5px;
}
</style>