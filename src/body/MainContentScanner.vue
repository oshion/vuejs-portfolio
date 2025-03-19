<template>
	<!-- Page Title -->
	<div class="page-title" data-aos="fade">
		<div class="container">
			<nav class="breadcrumbs">
				<ol>
					<li><RouterLink to="/">Home</RouterLink></li>
					<li class="current">Mobile 스캐너 재고등록 및 재고관리</li>
				</ol>
			</nav>
			<div class="row">
				<div class="col-lg-11">
					<h1>Mobile 스캐너 재고등록 및 재고관리</h1>
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
						<img src="@/assets/img/portfolio/scanner1.png" alt="" />
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
						<h2>모바일로 제품을 스캔하고 재고를 등록 및 관리</h2>
						<p>
							<strong>제품에 QR 코드를 부착</strong>하여 원거리에서 스캔만으로
							제품 재고를 등록할 수 있도록 기능을 구현하였습니다.
						</p>
						<p>
							또한, <strong>제품에 안드로이드 기기를 부착</strong>하여,
							<strong>안드로이드 앱</strong>을 통해 재고를 자동으로 인식하고
							등록할 수 있게 개발하였습니다.
						</p>
						<p>
							<strong>KakaoMap과 GPS</strong>를 활용하여 재고가 등록된 위치를
							파악하고, 구획별로 나눠 관리할 수 있도록 하여
							<strong>재고 관리의 효율성을 대폭 향상</strong>시켰습니다.
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
							<li>코그넥스 SDK(QR스캐너사 제공 SDK)</li>
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
