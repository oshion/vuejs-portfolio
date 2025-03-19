<template>
	<!-- Page Title -->
	<div class="page-title" data-aos="fade">
		<div class="container">
			<nav class="breadcrumbs">
				<ol>
					<li><RouterLink to="/">Home</RouterLink></li>
					<li class="current">동화자연마루 베트남</li>
				</ol>
			</nav>
			<div class="row">
				<div class="col-lg-11">
					<h1>동화자연마루 베트남</h1>
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
						<img src="@/assets/img/portfolio/greenviet1.png" alt="" />
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
						<h2>베트남 현지에서 오픈한 마루 소개 사이트</h2>
						<p>
							<strong
								>프로젝트 리더 겸 백엔드 개발자로 참여한 프로젝트입니다.</strong
							><br />
							이 프로젝트에서는
							<strong>데이터베이스 설계 및 초기 설정</strong>을 담당하였고, AWS
							CodePipeline을 활용하여
							<strong>CI/CD 환경을 구축</strong>하였습니다.
						</p>
						<p>
							<strong
								>주니어 개발자와 협업하며 역할을 나누고 리드하여 API 개발을
								진행</strong
							>하였습니다. 특히, 베트남 현지에 오픈할 웹사이트였기 때문에,
							<strong>다국어 지원을 고려한 설계</strong>를 진행했습니다. HTTP
							Header에 <strong>언어 설정 기능</strong>을 추가하여 사용자 경험을
							개선하고 자연스러운 다국어 전환을 가능하게 했습니다.
						</p>
						<p>
							초기 단계에서 <strong>클라우드 서버를 생성</strong>하고,
							<strong
								>WAS 설정, cron 작업 및 로그 관리, 볼륨 관리, 프록시 서버
								설정</strong
							>
							등의 서버 인프라 작업을 수행하였습니다.
						</p>
						<p>
							Spring Boot를 기반으로 백엔드 서버를 구축하고,
							<strong>JWT</strong>를 사용하여
							<strong>암호화 및 인증 전략</strong>을 수립하였습니다.
						</p>
						<p>
							또한, <strong>Google Analytics</strong>를 적용하여
							<strong
								>일별 활성 사용자 수, 각 페이지 활성화 수, 접속 기기
								분류</strong
							>
							등 주요 데이터를 자동으로 집계 및 분석하고, 이를 시각적으로 표현할
							수 있는 환경을 구현하였습니다.
						</p>
						<p>
							검색 기능에서는 검색 개발자와 협업하여
							<strong>Elastic Search</strong>를 세팅하고, Python 기반 검색
							모듈을 설치하였습니다. 이를 통해
							<strong>이미지를 활용한 마루 추천 기능</strong>을 개발하여 사용자
							맞춤형 경험을 제공하였습니다.
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
									href="https://www.dongwhavietnam.com/"
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
