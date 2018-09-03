<template id="login">
	<div class="wrap">
		<router-link to="my"><span class="iconfont icon-return"></span></router-link>
		<div class="logo">
			<div class='posi'>
				<img src="../../assets/images/meituan.png" alt="">
			</div>			<!--<span>优乐团购</span>-->
		</div>
		<form action="">
			<div>
				<span class="iconfont icon-people"></span>
				<input type="text" placeholder="请输入用户名" class="user" @focus="focus1" @blur="blur1" v-model="msg1"/>
				<span v-show="bool1" @click="del1" class="iconfont icon-delete_fill icondel1" ></span>
			</div>
			<div>
				<span class="iconfont icon-unlock"></span>
				<input type="password" placeholder="请输入密码" class="psd" @focus="focus2" @blur="blur2" v-model="msg2"/>
				<span v-show="bool2" @click="del2" class="iconfont icon-delete_fill icondel2"></span>
			</div>
			<div>
				<input type="submit" value="登录" class="btn"/>
			</div>
		</form>
		<div class="register">
			<p><router-link to="">忘记密码？</router-link>&nbsp;|&nbsp;&nbsp;<router-link to="register">新用户注册</router-link></p>
		</div>
	</div>
	
	
</template>

<script type="text/javascript">
	export default{
		data(){
			return {
				msg1:'',
				msg2:'',
				bool1:false,
				bool2:false,
			}
		},
		methods:{
			focus1(){
				this.bool1=true;
			},
			blur1(){
				this.bool1=false;
			},
			focus2(){
				this.bool2=true;
			},
			blur2(){
				this.bool2=false;
			},
			del1(){
				this.msg1=''
			},
			del2(){
				this.msg2=''
			}
		}
	}
	
</script>

<style scoped>
	.wrap{
		position: fixed;
		top: 0;left: 0;
		width: 100%;height: 100%;
		z-index: 99;
		background: #FCFCFC;
	}
	.icon-return{
		position: absolute;
		top: 13px;left: 11px;
	}
	.logo{
		width: 50%;
		margin: 80px auto 20px;
		position: relative;
	}
	.logo .posi{
		padding-left: 20px;
	}
	.logo img{
		width:60%;
	}
	.logo span{
		font-size: 20px;
	}



	form{
		position: relative;
		margin: 0 auto;
		width: 82%;
		margin-top: 60px;
	}
	input{
		
		margin-top: 15px;
		border: none;
		border-bottom: 1px solid #aaa;
		height: 30px;
		width: 220px;
		margin-left: 10px;
		font-size: 14px;
		color: #444;
		background: none;
		outline: none;
	}
	.btn{
		margin-top: 40px;
		width:248px ;
		height: 35px;
		background: #06c1ae;
		color: #fff;
		outline: none;
		box-sizing: border-box;
	}
	.iconfont{
		font-size: 27px;
		color: #06c1ae;
	}
	
	.icon-delete_fill{
		position: absolute;
		right: 13px;
		color: #aaa;
		font-size: 16px;
	}
	.icondel1{
		top: 17px;
	}
	.icondel2{
		top: 63px;
	}
	.register{
		margin: 60px auto;
		width: 48%;
		font-size: 13px;
	}
	.register a{
		color: #888;
	}
</style>