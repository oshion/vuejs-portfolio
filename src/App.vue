<template>
	<TheHeader></TheHeader>
	<TheBody></TheBody>
	<TheFooter></TheFooter>

	<!-- Scroll Top -->
	<a
		href="#"
		v-if="showScrollTop"
		@click="scrollToTop"
		class="scroll-top d-flex align-items-center justify-content-center active"
		><i class="bi bi-arrow-up-short"></i
	></a>

	<!-- Preloader -->
	<div v-if="loading" id="preloader"></div>
</template>

<script setup>
import TheHeader from '@/layouts/TheHeader.vue';
import TheFooter from '@/layouts/TheFooter.vue';
import TheBody from '@/layouts/TheBody.vue';

import { ref, onMounted, onBeforeUnmount } from 'vue';

const showScrollTop = ref(false); // 스크롤이 일정 위치 이상일 때 표시할지 여부
const loading = ref(true);

// 스크롤 위치에 따라 버튼을 표시하거나 숨기는 함수
function toggleScrollTop() {
	showScrollTop.value = window.scrollY > 100;
}

// 페이지 상단으로 스크롤 이동하는 함수
function scrollToTop(e) {
	e.preventDefault();
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
}

onMounted(() => {
	window.addEventListener('load', () => {
		loading.value = false; // 페이지가 로드되면 preloader 숨기기
	});
	window.addEventListener('scroll', toggleScrollTop);
	window.addEventListener('load', toggleScrollTop); // 페이지 로드 후에도 한번 체크
});
onBeforeUnmount(() => {
	window.removeEventListener('scroll', toggleScrollTop);
	window.removeEventListener('load', toggleScrollTop);
});
</script>

<style scoped></style>
