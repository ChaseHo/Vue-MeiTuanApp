<template>
	 	<main>
			<router-view></router-view>
			<v-footer></v-footer>
			<!--这里就用了一个模块来渲染-->
		</main>
</template>

<script>
		import footer from './component/nav/footer.vue';

		export default{
			components:{
				'v-footer':footer,
			}
		}
</script>


