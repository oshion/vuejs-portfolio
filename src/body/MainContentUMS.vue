<template>
	<!-- Page Title -->
	<div class="page-title" data-aos="fade">
		<div class="container">
			<nav class="breadcrumbs">
				<ol>
					<li><RouterLink to="/">Home</RouterLink></li>
					<li class="current">엠파크 단지운영사이트</li>
				</ol>
			</nav>
			<div class="row">
				<div class="col-lg-11">
					<h1>엠파크 단지운영사이트</h1>
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
						<img src="@/assets/img/portfolio/megam1.png" alt="" />
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
				<div class="col-lg-8" data-aos="fade-up">
					<div class="portfolio-description">
						<h2>엠파크 중고차 매매단지의 종합적인 관리 사이트</h2>
						<p>
							<strong>기존 Delphi CS 기반 IDC 환경</strong>에서 운영되던
							사이트를 리뉴얼하여,
							<strong
								>클라우드 기반의 프론트엔드-백엔드 아키텍처로
								마이그레이션</strong
							>하는 프로젝트를 진행하였습니다.
						</p>
						<p>
							프로젝트 초기에 <strong>클라우드 서버를 생성</strong>하고,
							<strong>WAS 설정</strong>,
							<strong>cron 작업 및 로그 관리</strong>,
							<strong>볼륨 관리</strong>, <strong>프록시 서버 설정</strong> 등
							인프라 구축 작업을 수행하였습니다.
						</p>
						<p>
							<strong>Database에 Write/Read 인스턴스를 분리</strong>하여 적절한
							분산 처리를 통해 서비스의 안정성과 성능을 높였습니다.
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

				<div class="col-lg-3" data-aos="fade-up" data-aos-delay="100">
					<div class="portfolio-info">
						<h3>Project Tech Stack</h3>
						<ul>
							<strong>SERVER</strong>
							<li>Ubuntu 20.04.6</li>
							<li>Tomcat 8</li>
						</ul>
						<ul>
							<strong>BACK</strong>
							<li>Spring Boot</li>
							<li>Gradle</li>
							<li>Mybatis</li>
							<li>JWT</li>
						</ul>
						<ul>
							<strong>DATABASE</strong>
							<li>AWS Aurora Mysql</li>
						</ul>
						<ul>
							<li>
								<a
									href="https://megam.m-park.co.kr/"
									target="_blank"
									class="btn-visit align-self-start"
									>Visit Website</a
								>
							</li>
						</ul>
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
