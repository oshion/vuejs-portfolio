import { createRouter, createWebHistory } from 'vue-router';
import MainContent from '@/body/MainContent.vue';
import MainContentToyproject from '@/body/MainContentToyproject.vue';
import MainContentGreen from '@/body/MainContentGreen.vue';
import MainContentGreenViet from '@/body/MainContentGreenViet.vue';
import MainContentMpark from '@/body/MainContentMpark.vue';
import MainContentMegam from '@/body/MainContentMegam.vue';
import MainContentTablet from '@/body/MainContentTablet.vue';
import MainContentScanner from '@/body/MainContentScanner.vue';
import MainContentTank from '@/body/MainContentTank.vue';

const routes = [
	{
		path: '/',
		name: 'MainContent',
		component: MainContent,
	},
	{
		path: '/toyproject',
		name: 'MainContentToyproject',
		component: MainContentToyproject,
	},
	{
		path: '/green',
		name: 'MainContentGreen',
		component: MainContentGreen,
	},
	{
		path: '/greenviet',
		name: 'MainContentGreenViet',
		component: MainContentGreenViet,
	},
	{
		path: '/mpark',
		name: 'MainContentMpark',
		component: MainContentMpark,
	},
	{
		path: '/megam',
		name: 'MainContentMegam',
		component: MainContentMegam,
	},
	{
		path: '/tablet',
		name: 'MainContentTablet',
		component: MainContentTablet,
	},
	{
		path: '/scanner',
		name: 'MainContentScanner',
		component: MainContentScanner,
	},
	{
		path: '/tank',
		name: 'MainContentTank',
		component: MainContentTank,
	},
];

const router = createRouter({
	history: createWebHistory('/'),
	routes,
	scrollBehavior(to, from, savedPosition) {
		// 만약 'savedPosition'이 존재하면 이전에 저장된 위치로 돌아감
		if (savedPosition) {
			return savedPosition;
		}
		// 기본적으로 모든 페이지 이동 시 스크롤을 맨 위로 이동
		return { top: 0 };
	},
});

export default router;
