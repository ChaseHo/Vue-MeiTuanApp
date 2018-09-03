<template id="mcontent">
	<div class="bd">
			<div class="header">
				<div class="select">
					<router-link to="home"><span class="iconfont icon-shouye"></span></router-link>
				</div>
				<div class="title">
					<p>更多</p>
				</div>
				<div>
					<span class="iconfont icon-cart"></span>
					<span class="iconfont icon-saoyisao"></span>
				</div>
			</div>
		
		
		<div id="con" class="con">
			<ul class="oneul">
				<li>
					<p>仅在wifi下显示图片</p>
					<span class="iconfont icon-right"></span>
				</li>
				<li>
					<p>消息提醒</p>
					<span class="iconfont icon-enter"></span>
				</li>
				<li>
					<p>分享设置</p>
					<span class="iconfont icon-enter"></span>
				</li>
				<li>
					<p>清除缓存</p>
					<span>8.65MB</span>
				</li>
			</ul>
			
			<ul class="secondul">
				<li>
					<p>赏个好评</p>
				</li>
				<li>
					<p>意见反馈</p>
				</li>
				<li>
					<p>联系客服</p>
					<small>（8:00-22:00）</small>
					<span>1234-567-89</span>
				</li>
			</ul>
			
			<ul class="thirdul">
				<li>
					<p>当前版本&nbsp;V8.10</p>
					<span class="iconfont icon-enter"></span>
				</li>
				<li>
					<p>关于</p>
				</li>
			</ul>
		</div>
	</div>
</template>



<style scoped>
			body,html{
				width: 100%;
				background: #f9f9f9;
			}
			.bd{
				background: #f9f9f9;
			}
			.header{
				position: fixed;
				top: 0;left: 0;
				padding: 0 20px;
				width: 100%;
				height: 55px;
				box-sizing: border-box;
				border-bottom: 1px solid #eee;
				background: #06c1ae;
				color: #fff;
				z-index: 1;
			}
			.header .select{
				position: absolute;
				top: 9px;left:20px ;
			}
			.header .select a{
				text-decoration: none;
			}
			.icon-shouye{
				line-height: 35px;
				font-size: 25px;
				color: #fff;
			}
			.icon-cart,.icon-saoyisao{
				line-height: 25px;
				font-size: 20px;
				color: #fff;
			}
			.header div:nth-of-type(3){
				position: absolute;
				top: 14px;right: 20px;
			}
			.header div:nth-of-type(3) span{
				display: inline-block;
				margin: 0px 0px;
				width: 30px;
				height: 30px;
			}
			.header .title{
				margin: 0px auto;
				width: 60%;
			}
			.header .title p{
				width: 100%;
				height: 55px;
				text-align: center;
				line-height: 55px;
				font-size: 17px;
			}
			
			
			.con{
				width: 100%;
				margin-top: 55px;
				padding-bottom: 90px;
			}
			.con ul{
				margin-top: 10px;
				width: 100%;
			}
			.con ul li{
				padding: 0px 20px;
				height: 45px;
				line-height: 45px;
				border-bottom:1px solid #eee ;
				background: #fff;
				box-sizing: border-box;
				overflow: hidden;
			}
			.con ul li p{
				float: left;
				font-size: 14px;
			}
			.con ul li span{
				float: right;
				color: #888;
				font-size: 12px;
			}
			.con ul li small{
				float: left;
				color: #888;
				font-size: 12px;
			}
			
			.con .icon-right{
				color: #06c1ae;
				font-size: 18px;
			}
			.con .icon-enter{
				color: #999;
				font-size: 18px;
			}
</style>