<template>
	<div class="stats-item">
		<span>{{ currentCount }}</span>
		<p>{{ label }}</p>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
	start: {
		type: Number,
		default: 0,
	},
	end: {
		type: Number,
		required: true,
	},
	duration: {
		type: Number,
		default: 1, // duration in seconds
	},
	label: {
		type: String,
		default: '',
	},
});

const currentCount = ref(props.start);

const countUp = () => {
	const start = props.start;
	const end = props.end;
	const duration = props.duration * 1000; // convert seconds to milliseconds
	const stepTime = duration / (end - start);

	let counter = start;
	const interval = setInterval(() => {
		counter++;
		currentCount.value = counter;

		if (counter >= end) {
			clearInterval(interval);
		}
	}, stepTime);
};

onMounted(() => {
	const observer = new IntersectionObserver(
		entries => {
			if (entries[0].isIntersecting) {
				countUp();
				observer.disconnect();
			}
		},
		{ threshold: 0.5 },
	);

	observer.observe(document.querySelector('.stats-item'));
});
</script>

<style scoped>
.stats-item span {
	font-size: 2rem;
	font-weight: bold;
	display: block;
}

.stats-item p {
	margin-top: 0.5rem;
	font-size: 1.2rem;
}
</style>
