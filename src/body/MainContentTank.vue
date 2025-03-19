<template>
	<!-- Page Title -->
	<div class="page-title" data-aos="fade">
		<div class="container">
			<nav class="breadcrumbs">
				<ol>
					<li><RouterLink to="/">Home</RouterLink></li>
					<li class="current">Mobile 탱크로리 실적전송</li>
				</ol>
			</nav>
			<div class="row">
				<div class="col-lg-11">
					<h1>Mobile 탱크로리 실적전송</h1>
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
						<img src="@/assets/img/portfolio/tank1.png" alt="" />
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
						<h2>모바일을 이용한 실시간 탱크로리 실적 전송</h2>
						<p>
							<strong>탱크로리 주유 모듈에 연결된 PDA의 단종</strong>으로 인해,
							<strong>안드로이드 모바일</strong>을 활용하여 주유 데이터를
							수신하고 서버로 전송하는 기능을 구현하였습니다.
						</p>
						<p>
							<strong>블루투스 연결</strong>을 통해 정해진 스펙의 전문(데이터
							포맷)을 주고받으며,
							<strong>주유 결과를 실시간으로 서버에 전송</strong>할 수 있도록
							개발하였습니다.
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
							<li>Window</li>
							<li>Tomcat</li>
						</ul>
						<ul>
							<strong>FRONT</strong>
							<li>Android Studio</li>
						</ul>
						<ul>
							<strong>BACK</strong>
							<li>JSP</li>
						</ul>
						<ul>
							<strong>DATABASE</strong>
							<li>MSsql</li>
						</ul>
						<ul>
							<li>
								<!-- <a
									href="https://www.greendongwha.com/"
									target="_blank"
									class="btn-visit align-self-start"
									>Visit Website</a
								> -->
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
