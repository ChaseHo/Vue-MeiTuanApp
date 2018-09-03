<template id="mycontent">
	<div class="bd">
			<div class="header">
				<div class="select">
					<router-link to="home"><span class="iconfont icon-shouye"></span></router-link>
				</div>
				<div class="title">
					<p>我的</p>
				</div>
				<div>
					<span class="iconfont icon-cart"></span>
					<span class="iconfont icon-mail"></span>
				</div>
			</div>
		
		<div id="con" class="con">
			<div class="login">
				<div>
					<router-link to="login"><button>登录</button></router-link>
				</div>
				<router-link to="register"><p>注册账号></p></router-link>
			</div>
			
			<ul class="conNav">
				<li>
					<span class="iconfont icon-coupons"></span>
					<p class="wz">优惠券</p>
				</li>
				<li>
					<span class="iconfont icon-daifukuan"></span>
					<p class="wz">待付款</p>
				</li>
				<li>
					<span class="iconfont icon-redpacket"></span>
					<p class="wz">卡包</p>
				</li>
				<li>
					<span class="iconfont icon-collection"></span>
					<p class="wz">收藏</p>
				</li>
			</ul>
			
			<ul class="mylist">
				<li><span></span>订单<span class="iconfont icon-enter"></span></li>
				<li><span></span>VIP会员<i>成长值达600可升为会员</i><span class="iconfont icon-enter"></span></li>
				<li><span></span>积分<span class="iconfont icon-enter"></span></li>
				<li><span></span>余额（充值卡充值）<span class="iconfont icon-enter"></span></li>
				<li><span></span>促销包<span class="iconfont icon-enter"></span></li>
				<li><span></span>红包<span class="iconfont icon-enter"></span></li>
				<li><span></span>抵用券<span class="iconfont icon-enter"></span></li>
			</ul>
		</div>
	</div>
</template>



<style scoped>
			body,html{
				width: 100%;
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
				border-bottom: 1px solid #06c1ae;
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
			.icon-cart{
				line-height: 25px;
				font-size: 20px;
				color: #fff;
			}
			.icon-mail{
				line-height: 25px;
				font-size: 25px;
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
				margin-top: 55px;
				padding-bottom: 54px;
			}
			.login{
				height: 120px;
				background: url('../../assets/images/bg.png') no-repeat 0px 0px;
				background-size: 100% 38%;
				background-attachment: fixed;
			}
			.login>div{
				width: 80px;
				margin: 0px auto;
				padding-top:30px;
				padding-bottom: 10px;
			}
			.login button{
				width: 80px;
				height: 25px;
				border-radius: 3px;
				border: none;
				outline: none;
				background: #06c1ae;
				color: #fff;
			}
			.login p{
				color:#fff;
				font-size: 14px;
				text-align: center;
				text-decoration: none;
			}
			
			.conNav{
				width: 100%;
				padding: 0px 20px;
				box-sizing: border-box;
				background: #fff;
				overflow: hidden;
			}
			.conNav li{
				float: left;
				width: 25%;
				height: 54px;
				text-align: center;
			}
			.conNav .icon-cart{
				font-size:16px;
			}
			.icon-coupons,.icon-redpacket,.icon-daifukuan,.icon-collection{
				font-size: 26px;
			}
			.conNav .wz{
				font-size: 11px;
				color: #666;
			}
			
			.mylist li{
				padding:0 20px;
				height: 47px;
				background: #fff;
				border-bottom: 1px solid #eee;
				line-height: 45px;
				font-size: 14px;
			}
			.mylist li:nth-of-type(1),
			.mylist li:nth-of-type(2),
			.mylist li:nth-of-type(3){
				margin-top: 10px;
				border-top: 1px solid #eee;
			}
			.icon-enter{
				float: right;
				color: #999;
				font-size: 18px;
			}
</style>