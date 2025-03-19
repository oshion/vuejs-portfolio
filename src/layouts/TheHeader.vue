<template>
	<header
		id="header"
		class="header d-flex flex-column justify-content-center"
		:class="{ 'header-show': isHeaderShown }"
	>
		<!-- 헤더 토글 버튼 -->
		<i
			class="header-toggle d-xl-none bi"
			:class="isHeaderShown ? 'bi-x' : 'bi-list'"
			@click="toggleHeader"
		></i>

		<!-- 네비게이션 메뉴 -->
		<nav id="navmenu" class="navmenu">
			<ul>
				<li v-for="(menu, index) in navMenu" :key="index">
					<a
						:href="menu.href"
						:class="{ active: activeSection === menu.href }"
						@click.prevent="navigateTo(menu.href)"
					>
						<i :class="menu.icon + ' navicon'"></i><span>{{ menu.label }}</span>
					</a>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

// 상태 관리
const isHeaderShown = ref(false); // 헤더가 열려 있는지 여부
const activeSection = ref(''); // 현재 활성화된 섹션

// 메뉴 데이터
const navMenu = ref([
	{ label: 'Home', icon: 'bi-house', href: '#me' },
	{ label: 'About', icon: 'bi-person', href: '#about' },
	{ label: 'Resume', icon: 'bi-file-earmark-text', href: '#resume' },
	{ label: 'Skills', icon: 'bi-hdd-stack', href: '#skills' },
	{ label: 'Portfolio', icon: 'bi-images', href: '#portfolio' },
	{ label: 'Contact', icon: 'bi-envelope', href: '#contact' },
]);

// 특정 섹션으로 스크롤 이동
const navigateTo = href => {
	const target = document.querySelector(href);
	if (target) {
		target.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}
	isHeaderShown.value = false; // 모바일에서는 메뉴를 닫음
};

// 헤더 토글 함수
const toggleHeader = () => {
	isHeaderShown.value = !isHeaderShown.value;
};

// 스크롤스파이 함수
const navmenuScrollspy = () => {
	const position = window.scrollY + 200; // 현재 스크롤 위치
	navMenu.value.forEach(menu => {
		const section = document.querySelector(menu.href);
		if (section) {
			const sectionTop = section.offsetTop;
			const sectionBottom = sectionTop + section.offsetHeight;

			if (position >= sectionTop && position <= sectionBottom) {
				activeSection.value = menu.href;
			}
		}
	});
};

const activesectionInit = () => {
	if (!activeSection.value) {
		activeSection.value = navMenu.value[0]?.href ?? '';
	}
};

// 컴포넌트가 마운트된 후 이벤트 리스너 추가
onMounted(() => {
	activesectionInit();
	navmenuScrollspy(); // 초기 활성화 상태 설정
	window.addEventListener('scroll', navmenuScrollspy); // 스크롤 이벤트 감지
});

// 컴포넌트가 언마운트되면 이벤트 리스너 제거
onUnmounted(() => {
	window.removeEventListener('scroll', navmenuScrollspy);
});
</script>

<style lang="scss" scoped></style>
