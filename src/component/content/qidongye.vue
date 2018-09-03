<template>
		<transition leave-active-class="animated fadeOut">
			<div class="qidongye">
				<img src="../../assets/images/meituan.png" alt=""  class="animated bounceInDown"/>
				<p class="animated zoomIn">美团外卖，是你的菜</p>
				<router-link to="tuangou"><button class="animated bounceInUp">进入应用</button></router-link>
				<span></span>
			</div>
		</transition>
</template>


<style scoped>
			body,html{
				width: 100%;
				background: #fff;
			}
			.qidongye{
				position: fixed;
				top: 0;left: 0;
				width: 100%;height: 100%;
				text-align: center;
				background: #fff;
				z-index: 5;
			}
			img{
				position: absolute;
				top: 125px;left: 50%;
				margin-left: -60px;
				width: 120px;
			}
			p{
				position: absolute;
				bottom: 205px;left: 50%;
				margin-left: -100px;
				width:200px;
				color: #06c1ae;
				font-size: 20px;
				font-weight: bold;
			}
			button{
				position: absolute;
				bottom: 140px;left: 50%;
				margin-left: -50px;
				width: 100px;
				height: 33px;
				color:#06c1ae ;
				background: #fff;
				border-radius: 5px;
				outline: none;
				border: 1px solid #06c1ae;
				font-weight: bold;
			}
</style>