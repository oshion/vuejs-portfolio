<template>
	<!-- Page Title -->
	<div class="page-title" data-aos="fade">
		<div class="container">
			<nav class="breadcrumbs">
				<ol>
					<li><RouterLink to="/">Home</RouterLink></li>
					<li class="current">제품 Tablet 품질검사 & 생산 도면 관리</li>
				</ol>
			</nav>
			<div class="row">
				<div class="col-lg-11">
					<h1>제품 Tablet 품질검사 & 생산 도면 관리</h1>
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
						<img src="@/assets/img/portfolio/tablet1.png" alt="" />
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
						<h2>테블릿을 이용한 품질검사 및 도면관리</h2>
						<p>
							<strong>제품 생산 및 품질검사 프로세스</strong>에서 기존에 수기로
							진행하던 체크리스트를 <strong>안드로이드 기반 태블릿</strong>을
							사용해 디지털 방식으로 전환하였습니다.
						</p>
						<p>
							생산된 제품을 <strong>ERP 시스템과 연동</strong>하여 실적을
							자동으로 등록할 수 있도록 구현하였습니다.
						</p>
						<p>
							또한, 출력물을 통해 현장에서 확인하던 도면을
							<strong>CAD 파일을 PDF로 자동 변환</strong>하는 기능을
							개발하였습니다. 이를 통해 관리업체와의 인터페이스를 구축하고,
							<strong>생산 중 도면 확인 작업을 효율적으로 개선</strong
							>하였습니다.
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
							<li>ASPOSE(Cad File to PDF)</li>
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
