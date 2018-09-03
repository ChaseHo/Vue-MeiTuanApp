<template id="food">
	<div>
		<div class="header">
			<div class="select">
				<router-link to="home"><span class="iconfont icon-shouye"></span></router-link>
			</div>
			<div class="title">
				<p>美食</p>
			</div>
			<div>
				<span class="iconfont icon-cart"></span>
				<span class="iconfont icon-search"></span>
			</div>
		</div>

		<div class="con">
			<ul class="sxlist">
				<li @click="msg='zh'"><span>综合排序</span><span class="iconfont icon-unfold"></span></li>
				<li @click="msg='appr'"><span>好评优先</span><span class="iconfont icon-unfold"></span></li>
				<li @click="msg='dis'"><span>距离优先</span><span class="iconfont icon-unfold"></span></li>
				<li @click="msg='sx'"><span>筛选</span><span class="iconfont icon-unfold"></span></li>
			</ul>
			<component :is="msg"></component>
		</div>
	</div>
	
</template>

<script>
	import zh from "./zhcontent.vue";
	import appr from "./apprcontent.vue";
	import dis from "./discontent.vue";
	
	export default{
		data(){
			return{
				bool:false,
				msg:'zh',
			}
		},
		components:{
			'zh':zh,
			'appr':appr,
			'dis':dis,
		},
	}

</script>

<style scoped>
			body,html {
				width: 100%;
			}
			.header {
				position: fixed;
				top: 0;left: 0;
				padding: 0 20px;
				width: 100%;
				height: 55px;
				box-sizing: border-box;
				border-bottom: 1px solid #eee;
				background: #E72D4C;
				z-index: 1;
			}
			.header .select {
				position: absolute;
				top: 9px;
				left: 20px;
			}
			.header .select a{
				text-decoration: none;
			}
			.icon-shouye{
				line-height: 35px;
				font-size: 25px;
				color: #fff;
			}
			.icon-cart{
				line-height: 25px;
				font-size: 20px;
				color: #fff;
			}
			.icon-search{
				line-height: 25px;
				font-size: 25px;
				color: #fff;
			}
			
			.header div:nth-of-type(3) {
				position: absolute;
				top: 14px;
				right: 20px;
			}
			
			.header div:nth-of-type(3) span {
				display: inline-block;
				margin: 0px 0px;
				width: 30px;
				height: 30px;
			}
			
			.header .title {
				margin: 0px auto;
				width: 60%;
			}
			
			.header .title p {
				width: 100%;
				height: 55px;
				text-align: center;
				line-height: 55px;
				font-size: 18px;
				color: #fff;
			}
			
			
			.con{
				width: 100%;
				margin-top: 97px;
				padding-bottom: 55px;	
			}
			
			.sxlist{
				position: fixed;
				top: 55px;left: 0;
				padding:0 10px;
				width: 100%;
				height:35px;
				border-bottom: 1px solid #eee;
				z-index: 1;
			}
			.sxlist > li{
				position: relative;
				float: left;
				width: 25%;
				line-height: 33px;
				text-align: center;
				background: #fff;
			}
			.sxlist li span:nth-of-type(1){
				font-size: 12px;
			}
			.icon-unfold{
				font-size: 13px;
			}
			.sxlist li ol{
				display: none;
				position: absolute;
				top:34px;left: -2px;
				width: 92%;
				clear: both;
				border: 1px solid #eee;
				background :#fff;
			}
			.sxlist li ol li{
				height:20px;
				line-height: 20px;
				font-size: 11px;
				color: #666;
			}
			
			.pxlist{
				/*display: none;*/
				position: fixed;
				top: 91px;left: 0;
				width: 100%;height: 100%;
				background: rgba(0,0,0,0.5);
				z-index: 1;
			}
			.pxlist li{
				padding-left: 20px;
				height: 30px;
				line-height: 30px;
				font-size: 12px;
				background: #fff;
			}
</style>