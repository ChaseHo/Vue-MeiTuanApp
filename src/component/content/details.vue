<template id="details">
	<div>
		<div class="top">
				<router-link to="tuangou"><span class="iconfont icon-back"></span></router-link>
				<p class="title">{{title}}</p>
				<div>
					<span class="iconfont icon-cart"></span>
					<span class="iconfont icon-comments"></span>
				</div>
		</div>
		<div class="con">
				<ul>
					<li v-for="(v,i) in detlist">
						<img :src="v.img" alt="" />
						<p class="name">{{v.name}}</p>
						<p class="price">{{v.price | addDollar}}</p> 
						<div>
							<transition enter-active-class="animated slideInRight">
								<span  @click="sub(i)" v-show="v.num!=''" class="iconfont icon-offline" ></span>
							</transition>
							<p class="num">{{v.num}}</p>
							<span @click="add(i)" class="iconfont icon-addition_fill"></span>
						</div>
					</li>
				</ul>
		</div>
		<div class="account">
			<div>
				<span class="iconfont icon-category" @click="showmenu"></span>
				<mt-badge size="small" type="error" v-show="totalNum!=''">{{totalNum}}</mt-badge>
				<p class="total">{{totalPrice | addDollar}}</p>
				<button @click="jiesuan">去结算</button>
			</div>
		</div>
		<transition enter-active-class="animated bounceInUp" leave-active-class="animated slideOutDown">
			<div class="order" v-show="msg">
				<span class="iconfont icon-moreunfold" @click="hidemenu"></span>
			</div>
		</transition>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				title:'',//商家名称
				num:'',//下单数量
				detlist:[],//保存从json中获取的数组
				totalPrice:0,//商品总价
				totalNum:0,//商品总数量
				msg:false,//控制已点菜单显示隐藏
			}
		},
		methods:{
			//商品增加
			add(n){
				this.detlist[n].num++;
				this.bool=true;
				//商品总价
				this.totalPrice=0;
				this.totalNum=0;
				for(let j=0;j<this.detlist.length;j++){
					this.totalPrice=this.totalPrice+this.detlist[j].price*this.detlist[j].num;
					this.totalNum=parseInt(this.totalNum+this.detlist[j].num);//转换为number型
				}
			},
			//商品减少
			sub(n){
				this.detlist[n].num==0?0:this.detlist[n].num--;
				if(this.detlist[n].num==0){
					this.detlist[n].num='';
				}
				this.totalPrice=0;
				this.totalNum=0;
				for(let j=0;j<this.detlist.length;j++){
					this.totalPrice=this.totalPrice+this.detlist[j].price*this.detlist[j].num;	
					this.totalNum=parseInt(this.totalNum+this.detlist[j].num);//转换为number型
				}
			},
			//显示菜单
			showmenu(){
				this.msg=true;
			},
			//隐藏菜单
			hidemenu(){
				this.msg=false;
			},
			jiesuan(){
				if(this.totalPrice!=0){
					this.$toast({
					  message: '结算成功',
					  iconClass: 'iconfont icon-success',
					  duration:1500,
					});
				}else{
					this.$toast({
					  message: '您还没有点餐！',
					  duration:1000,
					});
				}
				
			}
		},
		mounted(){
			//把修改后的全局变量赋值给当前title
			this.title=titles;
			this.$http.get('src/data/details.json').then(function(res){
				console.log(res.body);
				//通过全局变量，接收来自tgcontent的yllist数组的对应的li的索引值,根据indexs值来确定渲染data数组中的第几个元素
				this.detlist=res.body.data[indexs].details;
			})
		},
		//局部过滤器
		filters:{
			addDollar(n){
				return '￥'+n;
			}
		}
	}
</script>

<style scoped>
	.top{
		position: fixed;
		top: 0;left: 0;
		padding: 0 20px;
		box-sizing: border-box;
		width: 100%;
		height: 55px;
		background: #06c1ae;
		z-index: 1;
	}
	.top p,span{
		float: left;
	}
	.top p{
		margin-top:15px;
		width: 80%;
		font-size: 18px;
		color: #fff;
		text-align: center;
	}
	span{	
		display: inline-block;
		width: 25px;height: 25px;
		color: #fff;
		line-height: 25px;
	}
	.top>div{
		position: absolute;
		right:15px;top: 15px;
	}
	.icon-back{
		margin-top: 15px;
		font-size: 30px;
	}
	.icon-cart{
		margin-right: 10px;
		font-size: 22px;
	}
	.icon-comments{
		font-size: 21px;
	}
	
	.con{
		margin-top: 75px;
		padding:0 20px 70px 20px;
	}
	.con li{
		position: relative;
		margin-top: 15px;
		width: 100%;
		height: 120px;
		border-bottom: 1px solid #e1e1e1;
		overflow: hidden;
	}
	.con li img{
		float: left;
		margin-right: 10px;
		width: 40%;
	}
	.name{
		margin:5px 0;
		font-size: 17px;
		font-weight: bold;
	}
	.price{
		font-size: 16px;
		color: #06c1ae;
		font-weight:bold;
	}
	.con ul li div{
		position: absolute;
		bottom: 40px;
		right: 20px;
		width: 77px;
	}
	.con .num{
		position: absolute;
		right: 30px;top:0;
		width: 20px;
		height: 23px;
		text-align: center;
		line-height: 26px;
	}
	.icon-offline,.icon-addition_fill{
		position: absolute;
		top:0;
		color: #06c1ae;
		font-size: 20px;
	}
	.con .icon-offline{
		left: 0;
	}
	.con .icon-addition_fill{
		right: 0;
	}
	
	.account{
		position: fixed;
		bottom: 0;left: 0;
		width: 100%;
		height: 55px;
		background: #444;
		z-index: 2;
	}
	.account .icon-category{
		width: 40px;height: 40px;
		line-height: 40px;
	}
	.account .mint-badge{
		position: fixed;
		bottom: 38px;left: 56px;
		width: 13px;
		height: 11px;
		line-height: 11px;
		font-size: 12px;
	}
	.icon-category{
		position: absolute;
		top: 7px;left:20px;
		font-size: 35px;
	}
	.total{
		position: absolute;
		top: 10px;left: 90px;
		color: #fff;
		font-size: 19px;
	}
	.account button{
		position: absolute;
		top: 0px;right: 0px;
		width: 100px;
		height: 55px;
		text-align: center;
		line-height: 55px;
		font-size: 17px;
		color: #fff;
		border: none;
		outline: none;
		background: #06c1ae;
	}
	
	.order{
		position: fixed;
		left: 0;bottom:0px;
		width: 100%;
		height: 255px;
		background: rgba(0,0,0,0.6);
		z-index: 1;
	}
	.icon-moreunfold{
		margin-top: 10px;
		margin-left: 43%;
		color: #fff;
		font-size: 40px;
	}
</style>