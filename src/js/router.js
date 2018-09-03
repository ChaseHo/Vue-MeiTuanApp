import VueRouter from 'vue-router';

import qidongye from '../component/content/qidongye.vue';
import tgcontent from '../component/content/tgcontent.vue';
import fjcontent from '../component/content/fjcontent.vue';
import morecontent from '../component/content/morecontent.vue';
import mycontent from '../component/content/mycontent.vue';
import mscontent from '../component/content/mscontent.vue';
import addr from '../component/nav/addr.vue';
import details from '../component/content/details.vue';
import login from '../component/login/login.vue';
import register from '../component/login/register.vue';


export default new VueRouter({
	routes:[
		{path:'/qidongye',component:qidongye},//
		{path:'/fujin',component:fjcontent},
		{path:'/tuangou',component:tgcontent},
		{path:'/more',component:morecontent},
		{path:'/my',component:mycontent},
		{path:'/home',component:tgcontent},
		{path:'/food',component:mscontent},
		{path:'/addr',component:addr},
		{path:'/details',component:details},
		{path:'/login',component:login},
		{path:'/register',component:register},
		{path:'/',redirect:'/qidongye'},//重定向之前，要先写出它的路由路径
	]
})
