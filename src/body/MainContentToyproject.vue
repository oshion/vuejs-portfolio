<template>
	<!-- Page Title -->
	<div class="page-title" data-aos="fade">
		<div class="container">
			<nav class="breadcrumbs">
				<ol>
					<li><RouterLink to="/">Home</RouterLink></li>
					<li class="current">Toy Project Nest</li>
				</ol>
			</nav>
			<div class="row">
				<div class="col-lg-11">
					<h1>Toy Project Nest(진행중)</h1>
				</div>
				<div class="col-lg-1">
					<!-- Back Button -->
					<a
						@click="goBack"
						class="d-flex align-items-center justify-content-center"
						><i class="bi bi-arrow-left-circle-fill"></i
					></a>
				</div>
			</div>
		</div>
	</div>
	<!-- End Page Title -->

	<!-- Portfolio Details Section -->
	<section id="portfolio-details" class="portfolio-details section">
		<div class="container" data-aos="fade-up">
			<div class="portfolio-details-slider swiper">
				<div class="swiper-wrapper align-items-center">
					<div class="swiper-slide">
						<img src="@/assets/img/portfolio/toyproject1.png" alt="" />
					</div>
					<!-- <div class="swiper-slide">
						<img src="@/assets/img/portfolio/product-1.jpg" alt="" />
					</div>
					<div class="swiper-slide">
						<img src="@/assets/img/portfolio/branding-1.jpg" alt="" />
					</div>
					<div class="swiper-slide">
						<img src="@/assets/img/portfolio/books-1.jpg" alt="" />
					</div> -->
				</div>
				<div class="swiper-button-prev"></div>
				<div class="swiper-button-next"></div>
				<div class="swiper-pagination"></div>
			</div>

			<div class="row justify-content-between gy-4 mt-4">
				<div class="col-lg-3" data-aos="fade-up" data-aos-delay="100">
					<div class="portfolio-info">
						<h3>Project Tech Stack</h3>
						<ul>
							<strong>SERVER</strong>
							<li>CloudFront</li>
							<li>S3</li>
							<li>EKS</li>
						</ul>
						<ul>
							<strong>FRONT</strong>
							<li>Nuxt3</li>
							<li>TypeScript</li>
						</ul>
						<ul>
							<strong>BACK</strong>
							<li>python</li>
						</ul>
						<ul>
							<strong>DATABASE</strong>
							<li>MariaDB</li>
						</ul>
						<ul>
							<li>
								<a
									href="https://d1ufq4k10jajyr.cloudfront.net/"
									target="_blank"
									class="btn-visit align-self-start"
									>Visit Website</a
								>
							</li>
						</ul>
					</div>
				</div>

				<div class="col-lg-8" data-aos="fade-up">
					<div class="portfolio-description">
						<h2>여행정보를 한눈에</h2>
						<p>
							여행을 시작하기 전 정보를 찾아볼 때 인터넷에서 대부분 정보를
							찾지만 취향에 맞는 여행정보만 찾게 되었습니다.
						</p>
						<p>
							예능, 다큐, 유튜브 등 다양한 주제로 여행을 하는 채널을 여행지별로
							모아놓으면 좋겠다는 생각을 하였습니다.
						</p>
						<p>나름대로의 UI를 구성하고 기획하고 제작중에 있습니다.</p>
						<p>
							채팅, 챗봇 등 기능을 추가하여 여행지를 더욱 똑똑하게 추천할 수
							있는 기능을 추가 할 예정입니다.
						</p>

						<!-- <div class="testimonial-item">
							<p>
								<i class="bi bi-quote quote-icon-left"></i>
								<span
									>Export tempor illum tamen malis malis eram quae irure esse
									labore quem cillum quid cillum eram malis quorum velit fore
									eram velit sunt aliqua noster fugiat irure amet legam anim
									culpa.</span
								>
								<i class="bi bi-quote quote-icon-right"></i>
							</p>
							<div>
								<img
									src="@/assets/img/testimonials/testimonials-2.jpg"
									class="testimonial-img"
									alt=""
								/>
								<h3>Sara Wilsson</h3>
								<h4>Designer</h4>
							</div>
						</div> -->
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- /Portfolio Details Section -->
</template>

<script setup>
const goBack = () => {
	window.history.back();
};
</script>

<style></style>
