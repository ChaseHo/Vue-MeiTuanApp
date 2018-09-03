<template id="footer">
			<ul class="ftNav">
				<li>
					<router-link to="/tuangou">
						<p class="iconfont icon-shouye"></p>
						<p class="wz">团购</p>
					</router-link>
				</li>
				<li>
					<router-link to="/fujin">
						<p class="iconfont icon-shouhuodizhi"></p>
						<p class="wz">附近</p>
					</router-link>
				</li>
				<li>
					<router-link to="/more">
						<p class="iconfont icon-more1"></p>
						<p class="wz">更多</p>
					</router-link>
				</li>
				<li>
					<router-link to="/my">
						<p class="iconfont icon-account"></p>
						<p class="wz">我的</p>
					</router-link>
				</li>
			</ul>
</template>



<style scoped>
			.ftNav{
				position: fixed;
				bottom: -1px;
				left: 0;
				width: 100%;
				height: 55px;
				background: #f5f5f5;
			}
			.ftNav li{
				float: left;
				margin-top: 7px;
				width: 25%;
				height: 55px;
				text-align: center;
			}
			.ftNav li:nth-of-type(3){
				margin-top: 9px;
			}
			.ftNav li a{
				text-decoration: none;
			}
		
			.icon-shouye,.icon-shouhuodizhi,.icon-more1,.icon-account{
				margin: 0 auto;
				width: 25px;height: 25px;
				color: #333;
				line-height: 25px;
				text-align: center;
			}
			.icon-shouye{
				font-size: 25px;
			}
			.icon-shouhuodizhi{
				font-size: 23px;
			}
			.icon-more1{
				font-size: 25px;
				height: 22px;
			}
			.icon-account{
				font-size: 19px;
			}
			.wz{
				font-size: 12px;
				color: #333;
			}
			.router-link-active p{
				color: #06c1ae;
			}
</style>