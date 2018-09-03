<template id="ficontent">
		<div>
			<div class="header">
				<div class="select">
					<router-link to="home"><span class="iconfont icon-shouye"></span></router-link>
				</div>
				<div class="title">
					<p>附近</p>
				</div>
				<div>
					<span class="iconfont icon-cart"></span>
					<span class="iconfont icon-search"></span>
				</div>
			</div>
		
			
		
			<div class="shaixuan">
				<ul class="sxlist">
					<li v-for="(v,i) in sxlist" @click="open(i)">
						<div>
							<span>{{v.title}}</span><span class="iconfont icon-moreunfold"></span>
						</div>
						<ol v-show="bool==i">
							<li v-for="(n,i) in v.sel" @click="select(i)">{{n}}</li>
						</ol>
					</li>
				</ul>
				
			</div>
			
			<div  class="con">
				<ul>
					<li v-for="v in sjlist">
						<div class="storeName">
							<p>{{v.storeName[0].title}}</p>
							<div>
								<span>{{v.storeName[0].appraise}}</span>
								<span>{{v.storeName[0].numappr}}</span>
								<span>{{v.storeName[0].address}}</span>
							</div>	
						</div>
						<ol class="prolist">
							<li v-for="n in v.prolist">
								<img :src="n.img" alt="" />
								<div>
									<p class="title">{{n.proname}}</p>
									<p class="des">{{n.des}}</p>
									<p class="price">
										<span>{{n.price}}</span>
										<del>{{n.delprice}}</del>
									</p>
									<p class="sale">{{n.sale}}</p>
								</div>
							</li>
						</ol>
					</li>
				</ul>
				<div class="loading"><mt-spinner type="fading-circle"></mt-spinner><span>加载中</span></div>
			</div>
		</div>	
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				sjlist:'',
				sxlist:'',
				bool:-1,
			}
		},
		mounted(){
			this.$http.get('src/data/fj.json').then(function(res){
				console.log(res.body);
				this.sjlist=res.body.shangjia;
				this.sxlist=res.body.shaixuan;
			})
		},
		methods:{
			open(n){
				if(this.bool==n){
					this.bool=-1;
				}else{
					this.bool=n;
				}
			},
			select(n){
				
			}
		}
	}
	
</script>


<style scoped>
			body,html{
				width: 100%;
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
			.icon-search{
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
				color: #fff;
			}
			
			
			.shaixuan{
				position: fixed;
				top: 55px;left: 0;
				width: 100%;
				height:40px;
				padding:0 20px;
				box-sizing: border-box;
				border-bottom: 1px solid #eee;
				background: #fff;
				z-index: 2;
			}
			.sxlist > li{
				position: relative;
				float: left;
				width: 25%;
				line-height: 36px;
				text-align: center;
			}
			.sxlist li span:nth-of-type(1){
				font-size: 12px;
				margin-right: 2px;
			}
			.sxlist .icon-moreunfold{
				line-height: 30px;
				font-size: 13px;
			}
			.sxlist li ol{
				display: none;
				position: absolute;
				top:40px;left:0px;
				width:100%;
				clear: both;
				border: 1px solid #eee;
				background :#f9f9f9;
			}
			.sxlist li ol li{
				height:30px;
				line-height: 30px;
				font-size: 11px;
				color: #666;
			}
			
			.con{
				margin-top: 100px;
				width: 100%;
				padding-bottom: 65px;
			}
			.con > ul{
				background:#f5f5f5;
			}
			.con > ul > li{
				margin-bottom: 20px;
				background: #fff;
			}
			
			.storeName{
				padding:10px  20px;
				box-sizing: border-box;
				border-bottom: 1px solid #ccc;
			}
			.storeName p{
				font-size: 17px;
				font-weight: bold;
			}
			.storeName div{
				margin-top: 10px;
				font-size: 12px;
				color: #666;
			}
			.storeName div span:nth-of-type(1){
				color: orange;
				margin-right: 30px;
			}
			.storeName div span:nth-of-type(3){
				margin-left: 85px;
			}
			
			
			
			.prolist li{
				position: relative;
				padding:0px  20px;
				margin-top: 10px;
				width: 100%;
				height: 80px;
				border-bottom: 1px solid #ccc;
				box-sizing: border-box;
				overflow: hidden;
			}
			.prolist li img{
				float: left;
				margin-right: 20px;
				width: 30%;
				height: 85%;
			}
			.prolist li .title{
				margin-right: 20px;
				font-size: 15px;
			}
			.prolist li .des{
				margin-top: 5px;
				font-size: 12px;
				color: #666;
			}
			.prolist li .price{
				margin-top: 10px;
				font-size: 13px;
				color:#06c1ae;
				font-weight: bold;
			}
			.prolist li .price del{
				margin: 0 10px;
				color:#666;
				font-size: 12px;
			}
			.prolist li .dis{
				position: absolute;
				top:10px;right: 0;
				font-size: ;
				color:#aaa;
			}
			.prolist li .sale{
				position: absolute;
				bottom:10px;right: 20px;
				font-size:12px;
				color:#ccc;
			}
			
			
			.con .loading{
				position: relative;
				margin: 0 auto;
				width: 36%;
			}
			.loading span:nth-of-type(2){
				position: absolute;
				top:5px ;left: 46px;
				color: #aaa;
			}
</style>