<template>
	<!-- Page Title -->
	<div class="page-title" data-aos="fade">
		<div class="container">
			<nav class="breadcrumbs">
				<ol>
					<li><RouterLink to="/">Home</RouterLink></li>
					<li class="current">엠파크 고객사이트</li>
				</ol>
			</nav>
			<div class="row">
				<div class="col-lg-11">
					<h1>엠파크 고객사이트</h1>
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
						<img src="@/assets/img/portfolio/mpark1.png" alt="" />
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
						<h2>고객이 한눈에 볼 수 있는 중고차 사이트</h2>
						<p>
							<strong>기존에 에이전트를 설치하여 사용하던 SMS 모듈</strong>이
							Java 버전 이슈로 인해 사용이 불가능해지자, 이를 대체하기 위해
							<strong>REST API 기반의 엠파크 전용 SMS 에이전트</strong>를 새로
							개발하였습니다. 덕분에 기존 방식과 크게 벗어나지 않으면서도 SMS
							기능을 안정적으로 유지할 수 있었습니다.
						</p>
						<p>
							또한, <strong>기존 Delphi CS 기반 IDC 환경</strong>에서 운영되던
							사이트를 리뉴얼하여
							<strong
								>클라우드 기반의 프론트엔드-백엔드 아키텍처로
								마이그레이션</strong
							>하는 프로젝트에 참여하였습니다.
						</p>
						<p>
							프로젝트 초기에 <strong>클라우드 서버를 생성</strong>하고,
							<strong>WAS 설정</strong>,
							<strong>cron 작업 및 로그 관리</strong>,
							<strong>볼륨 관리</strong>, <strong>프록시 서버 설정</strong> 등을
							통해 인프라 구축 작업을 완료하였습니다.
						</p>
						<p>
							특히, 특정 IP에서 발생하는
							<strong>API의 악의적인 연속 호출 시도</strong>를 방지하기 위해
							<strong>로드밸런서에서 IP 분석 및 차단</strong> 기능을 구현하여
							안정적인 서비스를 유지하였습니다.
						</p>
						<p>
							<strong>S3와 CloudWatch의 캐시 기능</strong>을 활용하여
							<strong>이미지 로딩 트래픽을 줄이고</strong> 이미지 로딩 속도를
							개선하였습니다. 또한,
							<strong>Database에 Write/Read 인스턴스를 분리</strong>하여 적절한
							분산 처리를 통해 서비스 안정성을 높였습니다.
						</p>
						<p>
							<strong>Spring Boot 기반의 백엔드 서버</strong>를 구축하고,
							<strong>JWT</strong>을 활용하여
							<strong>효율적인 암호화 및 인증 전략</strong>을 수립하였습니다.
						</p>
						<p>
							<strong>Elastic Cache</strong>를 활용하여
							<strong>DB 커넥션으로 인한 로딩 시간</strong>을 줄이고,
							<strong>DB 히트 비율(DB Hit Ratio)</strong>을 관리하여 자원의
							효율성을 최적화하였습니다.
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
									href="https://www.m-park.com/"
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
