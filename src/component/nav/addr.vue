<template id="addr">
	<div>
		<div class="top">
			<router-link to="tuangou"><span class="iconfont icon-close"></span></router-link>
			<div>
				<input type="text" placeholder="城市名/拼音"  @keyup="searchcity($event)" v-model="cityname"/>
			</div>
			<router-link to="tuangou"><div class="result" v-if="bool" @click="sel">{{havecity}}</div></router-link>
			<p>当前城市：{{msg}}</p>
		</div>
		
		<div class="con">
			<div class="hotcity">
				<p>热门城市</p>
				<ul>
					<li v-for="(v,i) in data.hotcity" @click="selhotcity(i)"><router-link to="tuangou">{{v}}</router-link></li>
				</ul>
			</div>
			<div class="city">
				<ul>
					<li v-for="(v,i) in data.city" @click="selcity(i)"><router-link to="tuangou">{{v}}</router-link></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				msg:addr,
				data:[],
				cityname:'',
				cityarr:[],
				havecity:'',
				bool:false,
			}
		},
		methods:{
			selhotcity(n){
				this.msg=this.data.hotcity[n];
			},
			selcity(n){
				this.msg=this.data.city[n];
			},
			//城市查询
			searchcity(e){
				this.$http.get("src/data/addr.json").then(function(res){
					this.cityarr=res.body.city;
				})
				if(e.keyCode==32||(e.keyCode>48&&e.keyCode<58)){//根据键盘码判断
					for(let i=0;i<this.cityarr.length;i++){
						if(this.cityarr[i]==this.cityname){
							this.havecity=this.cityarr[i];
							this.bool=true;//如果有符合查询条件的城市，则显示result
							break;//如果条件为true，则结束，跳出if语句
						}else{
							this.havecity="没有该城市！";
							this.bool=true;
						}
					}
					
				}
			},
			sel(){
				this.msg=this.havecity;
				this.bool=false;
			}
		},
		watch:{
			//监听input里面值的变化，如果为空，则隐藏result
			cityname(){
				if(this.cityname==''){
					this.bool=false;
				}
			}
		},
		mounted(){
			this.$http.get("src/data/addr.json").then(function(res){
				this.data=res.body;
			})
		},
		//当离开当前页面时，执行
		destroyed(){
			//修改全局变量
			addr=this.msg;
		}
	}
</script>

<style scoped>
			.top{
				position:fixed;
				top: 0;left: 0;
				padding:0 20px;
				width: 100%;
				height: 55px;
				background: #fff;
				border-bottom: 1px solid #eee;
				box-sizing: border-box;
				z-index: 2;
			}
			.top .icon-close{
				position: fixed;
				top: 17px;left: 15px;
				color:#1A1918;
				font-size: 17px;
			}
			.top > div{
				padding-top:15px ;
				margin-left: 15%;
				width: 80%;
				float: left;
			}
			.top input{
				padding-left: 10px;
				width: 100%;
				height: 25px;
				border-radius: 50px;
				background: #eee;
				outline:none;
				border: none;
				font-size: 12px;
				color: #666;
			}
			.top .result{
				position: absolute;
				top: 90px;left: 0;
				padding-left: 20px;
				width: 100%;
				height: 30px;
				line-height: 30px;
				background: #f7f7f7;
				color: #E72D4C;
				z-index: 2;
			}
			.top > p{
				position: fixed;
				top: 55px;left:0;
				padding-left: 20px;
				width: 100%;
				height: 40px;
				line-height: 40px;
				font-size: 12px;
				color: #444;
				background: #fff;
				border-bottom: 1px solid #eee;
				box-sizing: border-box;
				color: #E72D4C;
			}
			
			.con{
				position: absolute;
				top: 95px;left: 0;
				width: 100%;
				background: #fcfcfc;
				z-index: 1;
			}
			
			.hotcity{
				padding: 10px 20px;
				width: 100%;
				font-size: 12px;
				box-sizing: border-box;
			}
			.hotcity p{
				color:#aaa ;
			}
			.hotcity ul{
				overflow: hidden;
			}
			.hotcity ul li{
				margin: 10px;
				float: left;
				width: 70px;
				height: 30px;
				border: 1px solid #f2f2f2;
				background: #fff;
				border-radius: 2px;
				text-align: center;
				line-height: 30px;
			}
			.city{
				padding:0 20px;
				margin-top: 20px;
				width: 100%;
				background: #fff;
			}
			.city li{
				padding-left: 10px;
				height: 30px;
				border-top:1px solid #eee ;
				font-size: 12px;
				line-height: 30px;
			}
			.hotcity ul li a,.city li a{
				color: #666;
				text-decoration: none;
			}
</style>