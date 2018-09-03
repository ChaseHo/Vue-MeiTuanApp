<template id="tgcontent">
	<div>
		<div class="header">
			<div class="select">
				<router-link to="addr"><p>{{addrs}}</p><span class="iconfont icon-moreunfold"></span ></router-link>
			</div>
			<div class="ipt">
				<router-link :to="msg"><span class="iconfont icon-search" @click="searchfood($event)"></span></router-link>
				<input type="text" placeholder="输入商家/品类/商圈" v-model="foodname" @focus="focus"/>
			</div>

			<div class='top-right'>
				<span class="iconfont icon-cart shop-cat"></span>
				<!--<a href=""><img src="../../assets/images/my1.png" alt=""></a>-->
				<span class="iconfont icon-saoyisao"></span>


			</div>
		</div>
		<div id="con" class="con">
			<mt-swipe :auto="4000">
				<mt-swipe-item><img src="src/assets/images/banner01.jpg" alt="" /></mt-swipe-item>
				<mt-swipe-item><img src="src/assets/images/banner02.jpg" alt="" /></mt-swipe-item>
				<mt-swipe-item><img src="src/assets/images/banner03.jpg" alt="" /></mt-swipe-item>
				<mt-swipe-item><img src="src/assets/images/banner04.jpg" alt="" /></mt-swipe-item>
			</mt-swipe>

			<div style='margin:0 auto;'>
			<dl class="list list-in">
				<dd class="icon-wrapper h_gesture_">
					<ul class="icon-list page current">
						<li class="icon">
							<a style="display:block"  href="#">
								<span class="new-icon-circle iconfont1 meishi" style="background: #fd9d21">
									<img src="src/assets/images/meishi.png" alt="" style='width: 22px;height: 22px'>
								</span>
								<span class="icon-desc">美食</span></a>
						</li><li class="icon">
						<a style="display:block"  href="#">
							<span class="new-icon-circle iconfont1 dianying" style="background: #ff6767">
								<img src="src/assets/images/movie.png" alt="" style='width: 22px;height: 22px'>
							</span>
							<span class="icon-desc">猫眼电影</span></a>
					</li><li class="icon">
						<a style="display:block"  href="#" >
							<span class="new-icon-circle iconfont1 jiudian" style="background: #8a90fa">
								<img src="src/assets/images/hotel.png" alt="" style='width: 22px;height: 22px'>
							</span>
							<span class="icon-desc">酒店</span></a>
					</li><li class="icon">
						<a style="display:block"  href="#">
							<span class="new-icon-circle iconfont1 xiuxianyule" style="background: #fed030">
								<img src="src/assets/images/yule.png" alt="" style='width: 22px;height: 22px'>
							</span>
							<span class="icon-desc">休闲娱乐</span></a>
					</li><li class="icon">
						<a style="display:block"  href="#" >
							<span class="new-icon-circle iconfont1 waimai" style="background: #fd9d21">
								<img src="src/assets/images/outsell.png" alt="" style='width: 22px;height: 22px'>
							</span>
							<span class="icon-desc">外卖</span></a>
					</li><li class="icon">
						<a style="display:block"  href="#">
							<span class="new-icon-circle iconfont1 ktv" style="background: #fed030">
								<img src="src/assets/images/KTV.png" alt="" style='width: 22px;height: 22px'>
							</span>
							<span class="icon-desc">KTV</span></a>
					</li><li class="icon">
						<a style="display:block"  href="#" >
							<span class="new-icon-circle iconfont1 zhoubianyou" style="background: #4dc6ee">
								<img src="src/assets/images/trip.png" alt="" style='width: 22px;height: 22px'>
							</span>
							<span class="icon-desc">周边游</span></a>
					</li><li class="icon">
						<a style="display:block"  href="#">
							<span class="new-icon-circle iconfont1 liren" style="background: #ff80c2">
								<img src="src/assets/images/beaty.png" alt="" style='width: 22px;height: 22px'>
							</span>
							<span class="icon-desc">丽人</span></a>
					</li>
					</ul>
				</dd>
			</dl>
		</div>

			<div class="jingxuan">
				<div>
					<h4>精选抢购</h4>
					<p>距开始<span>02</span>:<span>11</span>:<span>28</span><i class="iconfont icon-more"></i></p>
				</div>
				<ul class="jxlist">
					<li v-for="v in jxlist">
						<img :src="v.img"/>
						<p>
							<span>{{v.nprice}}</span>
							<del>{{v.delprice}}</del>
						</p>
					</li>
				</ul>
			</div>
			<div class="youlike">
				<div>
					<h4>猜你喜欢</h4>
					<p><span>全部团购</span><i class="iconfont icon-more"></i></p>
				</div>
				<ul class="yllist">
					<li v-for="(v,i) in yllist" @click="enter(i)">
						<router-link to="details">
							<img :src="v.img" alt="" />
							<div>
								<p class="title">{{v.title}}</p>
								<p class="des">{{v.des}}</p>
								<p class="price">
									<span>{{v.price}}</span>
									<del>{{v.delprice}}</del>
									<span>{{v.discount}}</span>
								</p>
								<p class="dis">{{v.dis}}</p>
								<p class="appraise">{{v.appraise}}</p>
							</div>
						</router-link>
					</li>
				</ul>
				<div class="loading"><mt-spinner type="fading-circle"></mt-spinner><span>加载中</span></div>

				<div class='seealltg'><a href="#" class='react'><div class='more'><h2>查看全部团购</h2></div></a></div>

					<!--<mt-actionsheet :actions="sheetVisible" v-model="data">-->
					<!--1111111111-->
					<!--</mt-actionsheet>-->


			</div>
		</div>
		<div class="mask" v-show="bool" @click="hide">{{noinfo}}</div>
	</div>
</template>

<script type="text/javascript">
    export default{
        data(){
            return {
                jxlist:'',
                yllist:'',
                addrs:'',
                title:'',//商家名称
                foodarr:[],//保存从json中获取到的数组
                foodname:'',//输入框值
                msg:'',//router-link，路由的路径名称，控制msg是否等于details
                bool:false,//控制白色层显示隐藏
                noinfo:'',//白色层文字
            }
        },
        mounted(){
            this.$http.get('static/tg.json').then(function(res){
                this.jxlist=res.body.jingxuan;
                this.yllist=res.body.youlike;
            })
            this.addrs=addr;

        },
        methods:{
            //点击li，把遍历当前yllist数组，取出被选中对象中的title，赋值给全局变量titles
            enter(i){
                titles=this.yllist[i].title;
                indexs=i;//传给details文件，用于判断应该获取打他数组中的第几个details
            },
            focus(){
                this.bool=true;
                this.foodname="";
                this.noinfo="";
            },
            //商家查询   src/data/tg.json
            searchfood(e){
                this.$http.get("static/tg.json").then(function(res){
                    this.foodarr=res.body.youlike;
                    for(let i=0;i<this.foodarr.length;i++){
                        if(this.foodname==this.foodarr[i].title){
                            this.msg='details';
                            titles=this.foodarr[i].title;
                            indexs=i;
                            this.noinfo="";
                        }else{
                            if(this.msg==''){
                                this.noinfo="没有该商家！";
                                this.bool=true;
                            }
                        }
                    }
                })
            },
            //隐藏白色层
            hide(){
                this.bool=false;
                this.foodname="";
            },
        }
    }
</script>

<style scoped>
	footer{
		margin-top: .3rem;
		padding: 0 .2rem .4rem;
		background-color: #f0efed;
	}
	.seealltg {
		height: 40px;
		border-top: 1px solid #DDD8CE;
		line-height: 40px;
		margin: 0;
		overflow: hidden;
		font-weight: 400;
		position: relative;
		display: block;
		border-bottom: 1px solid #DDD8CE;
	}
	.seealltg .react{
		color: #06c1ae;
		padding: 0 .2rem;
		display: block;
		height: 100%;
		overflow-x: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		text-decoration: none;
		outline: 0;
	}
	.more{
		position: relative;
		padding-right: .3rem;
		width: 100%;
		box-sizing: border-box;
		display: block;
	}
	.more:after{
		position: absolute;
		right: .05rem;
		top: 50%;
		display: block;
		content: '';
		width: .6em;
		height: .6em;
		border-left: .04rem solid #06c1ae;
		border-bottom: .04rem solid #06c1ae;
		-webkit-transform: translateY(-50%) scaleY(0.7) rotateZ(-135deg);
	}
	.more h2{
		font-size: 16px;
	}
	/* 如果字体设置了不能显示或怎样可能是因为视口标签忘记加了*/
	/*     <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" /> */
	input::-webkit-input-placeholder{
		color:#f0fcfa;
	}
	input::-moz-placeholder{   /* Mozilla Firefox 19+ */
		color:#f0fcfa;
	}
	input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
		color:#f0fcfa;
	}
	input:-ms-input-placeholder{  /* Internet Explorer 10-11 */
		color:#f0fcfa;
	}
	.shop-cat{
		position: absolute;
		top: 0px;
		right: 35px;
	}
	.top-right{
		height: 100%;
		position: relative;
	}
	.top-right a{

		display: inline-block;
		height: 100%;
		line-height: 1rem;
		text-align: center;
		width: 1.94rem;
	}
	.header{
		position: fixed;
		top: 0;left: 0;
		padding: 0 20px;
		width: 100%;
		height: 55px;
		box-sizing: border-box;
		background: #06c1ae;
		border-bottom: 1px solid #21897d;
		z-index: 1;
	}
	.header .select{
		position: absolute;
		top: 17px;left:20px ;
	}
	.header .select a{
		text-decoration: none;
	}
	.header .select p{
		float: left;
		font-size: 15px;
		color: #fff;
	}
	.header .ipt {
		position: relative;
	}
	.header .ipt span{
		position: fixed;
		top: 18px;right:23%;
		color:#fff;
		font-size: 20px;
	}
	.icon-moreunfold{
		width: 22px;height: 22px;
		line-height: 22px;
		font-size: 20px;
		color: #fff;
	}
	.header div:nth-of-type(3){
		position: absolute;
		top: 13px;right: 7px;
	}
	.header div:nth-of-type(3) span{
		display: inline-block;
		margin: 5px 3px;
		width: 20px;
		height: 20px;
	}
	.icon-cart,.icon-saoyisao{
		font-size: 17px;
		color: red;
		color: #fff;
	}
	.header .ipt{
		margin: 0px auto;
		padding-top: 13px;
		width: 53%;
	}
	.header .ipt input{
		padding-left: 20px;
		width: 100%;
		height: 30px;
		border-radius: .06rem;
		outline: none;
		border: none;
		background: #05a494;
		color: #f0fcfa;
		font-size: 12px;
		margin-left: -5px;
	}

	.con{
		margin-top: 55px;
		padding-bottom: 54px;
	}

	.mint-swipe, .mint-swipe-items-wrap{
		height: 140px;
	}
	.mt-swipe-item{
		padding-bottom: 100px;
	}
	img{
		width: 100%;
	}
	.conNav{
		padding:5px 20px;
		width: 100%;
		box-sizing: border-box;
		/**/
		border-bottom: 1px solid #ccc;
		overflow: hidden;
	}
	.conNav li{
		float: left;
		width: 25%;
		height:69px;
		text-align: center;
		line-height:69px;
		/*padding-bottom: 70px;*/
	}
	.conNav li img{
		width: 49%;
	}
	.jingxuan{
		width: 100%;
		padding:10px 20px;
		box-sizing: border-box;
		border-bottom: 1px solid #ccc;
	}
	.jingxuan > div{
		width: 100%;
		overflow: hidden;
	}
	.jingxuan > div h4{
		float: left;
	}
	.jingxuan > div p{
		float: right;
		margin-top: 5px;
		width: 137px;
		font-size: 12px;
	}
	.jingxuan > div p span{
		display: inline-block;
		margin: 0 5px;
		width: 16px;
		height: 16px;
		background: #505050;
		border-radius: 5px;
		color: #fff;
		font-size: 12px;
		text-align: center;
		line-height: 16px;
	}
	.icon-more{
		font-size: 14px;
		font-weight: bold;
	}
	.jxlist{
		height: 135px;
		/*overflow: hidden;*/
	}
	.jxlist li{
		float: left;
		margin-top: 20px;
		width: 33.33%;
		height:92px;
		text-align: center;
	}
	.jxlist li img{
		width: 54%;
		height: 100%;
	}
	.jxlist li span{
		margin-right: 10px;
		font-size: 14px;
		color: #06c1ae;
	}
	.jxlist li del{
		font-size: 12px;
		color: #06c1ae;
	}

	.youlike{
		width: 100%;
		padding: 10px 20px;
		box-sizing: border-box;
		border-bottom: 1px solid #ccc;
	}
	.youlike > div{
		width: 100%;
		overflow: hidden;
	}
	.youlike > div h4{
		float: left;
	}
	.youlike > div p{
		float: right;
		margin-top: 5px;
		width: 73px;
		font-size: 12px;
	}
	.youlike > div p span{
		margin-right: 6px;
	}
	.youlike .loading{
		position: relative;
		margin: 0 auto;
		width: 36%;
	}
	.loading span:nth-of-type(2){
		position: absolute;
		top:5px ;left: 46px;
		color: #aaa;
	}
	.yllist{
		margin-top: 20px;
	}
	.yllist li{
		position: relative;
		margin-top: 20px;
		width: 100%;
		height: 90px;
		border-bottom: 1px solid #DDD8CE;
	}
	.yllist li img{
		float: left;
		margin-right: 20px;
		width: 25%;
		height: 80%;
	}
	.yllist li a{
		text-decoration:none;
	}
	.yllist li a .title{
		margin-right: 20px;
		font-size: 15px;
		color: #222;
	}
	.yllist li .des{
		margin-top: 5px;
		font-size: 12px;
		color: #666;
	}
	.yllist li .price{
		margin-top: 5px;
		font-size: 12px;
		color: #06c1ae;
		font-weight: bold;
	}
	.yllist li .price del{
		margin: 0 10px;
		color:#666;
		font-size: 12px;
	}
	.yllist li .price span:nth-of-type(2){
		width: 50px;
		height: 30px;
		padding: 1px;
		border: 1px solid red;
		border-radius:5px ;
		color: red;
		font-size: 12px;
	}
	.yllist li .dis{
		position: absolute;
		top:2px;right: 0;
		font-size:12px ;
		color:#aaa;
	}
	.yllist li .appraise{
		position: absolute;
		bottom:10px;right: 0;
		font-size:12px ;
		color:#e1b84b;
	}

	/*白色层*/
	.mask{
		position: fixed;
		top: 55px;left: 0;
		background: #fff;
		padding-top: 30px;
		width: 100%;height: 100%;
		text-align: center;
		color: #aaa;
		z-index: 4;
	}
</style>