<template id="dis">
	<main>
		<ul class="prolist">
			<li v-for="v in disprolist">
				<img :src="v.img" alt="" />
				<div>
					<p class="title">{{v.title}}</p>
					<p class="des">{{v.des}}</p>
					<p class="price">
						<span>{{v.price}}</span>
						<del>{{v.delprice}}</del>
					</p>
					<p class="sale">{{v.sale}}</p>
					<p class="dis">{{v.dis}}</p>
					<p class="appraise">{{v.appraise}}</p>
				</div>
			</li>
		</ul>
		<div class="loading"><mt-spinner type="fading-circle"></mt-spinner><span>加载中</span></div>
	</main>
	
</template>

<script type="text/javascript">
	export default{
		data(){
			return {
				disprolist:'',
			}
		},
		mounted(){
			this.$http.get('src/data/mspro.json').then(function(res){
				console.log(res.body);
				this.disprolist=res.body.disprolist;
			})
		}
	}
</script>
<style scoped>
			.prolist li {
				position: relative;
				padding: 10px 20px;
				width: 100%;
				height: 110px;
				border-bottom: 1px solid #ccc;
				box-sizing: border-box;
				background: #fff;
				overflow: hidden;
				z-index: 0;
			}				
			.prolist li img {
				float: left;
				margin-right: 10px;
				width: 30%;
				height: 92%;
			}
			.prolist li .title {
				margin-right: 20px;
				font-size: 15px;
			}
			.prolist li .des {
				margin-top: 5px;
				font-size: 12px;
				color: #666;
			}
			
			.prolist li .price {
				margin-top: 10px;
				font-size: 13px;
				color: red;
			}
			
			.prolist li .price del {
				margin: 0 10px;
				color: #666;
				font-size: 12px;
			}
			
			.prolist li .dis {
				position: absolute;
				top: 10px;
				right: 20px;
				font-size:12px ;
				color: #aaa;
			}
			
			.prolist li .sale{
				position: absolute;
				bottom: 10px;
				right:20px;
				font-size: 12px;
				color: #ccc;
			}
			
			.prolist li .appraise {
				position: absolute;
				bottom: 40px;
				right: 20px;
				font-size: 12px;
				color: #e1b84b;
			}

			.loading{
				position: relative;
				margin: 10px auto;
				width: 36%;
			}
			.loading span:nth-of-type(2){
				position: absolute;
				top:5px ;left: 46px;
				color: #aaa;
			}
</style>