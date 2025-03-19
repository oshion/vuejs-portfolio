<template>
	<!-- Page Title -->
	<div class="page-title" data-aos="fade">
		<div class="container">
			<nav class="breadcrumbs">
				<ol>
					<li><RouterLink to="/">Home</RouterLink></li>
					<li class="current">동화자연마루</li>
				</ol>
			</nav>
			<div class="row">
				<div class="col-lg-11">
					<h1>동화자연마루</h1>
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
						<img src="@/assets/img/portfolio/green1.png" alt="" />
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
						<h2>고객에게 마루를 소개하고 판매까지 연결하는 사이트</h2>
						<p>
							<A
								href="https://www.i-award.or.kr/Web/Assess/FinalCandidateView.aspx?REG_SEQNO=13424"
								target="_blank"
							>
								2024웹디자인 어워드 수상
							</A>
							<br />
							<A
								href="https://www.metroseoul.co.kr/article/20241217500013"
								target="_blank"
							>
								2024웹디자인 어워드 수상 기사
							</A>
						</p>

						<p>
							<strong>백엔드 개발자로 참여한 프로젝트입니다.</strong><br />
							기존 ASP 기반의 IDC 환경에서 운영되던 사이트를
							<strong>클라우드 기반의 프론트-백엔드 아키텍처</strong>로
							마이그레이션하는 프로젝트에 참여했습니다.
						</p>
						<p>
							초기 단계에서는 <strong>클라우드 서버를 생성</strong>하고,
							<strong>WAS 및 cron 작업, 로그 관리, 프록시 서버 설정</strong>
							등을 수행하였습니다. 이후 Spring Boot 기반으로 백엔드 서버를
							구축하고, JWT를 사용하여 암호화 전략을 수립했습니다.
						</p>
						<p>
							또한, 기존에 코드 없이 관리되던 제품 데이터를 체계적으로 관리 및
							등록할 수 있도록 <strong>제품 코드화 작업</strong>을 진행했습니다.
							이로 인해 관리 효율성을 크게 향상시킬 수 있었습니다.
						</p>
						<p>
							로딩 시간이 길었던 DB 연결을 최적화하기 위해
							<strong>Elastic Cache</strong>를 설정하여 DB 커넥션 횟수를 줄이고,
							<strong>DB Hit Ratio</strong>를 관리함으로써 자원을 효율적으로
							활용했습니다.
						</p>
						<p>
							신규 사용자 유입을 위한 이벤트를 하였습니다.
							<strong>분당 100만 건의 트래픽</strong>을 처리하기 위해 스트레스
							테스트를 실시하였고, AWS의 <strong>Auto Scaling</strong>을
							활용하여 성공적으로 이벤트를 완료했습니다.
						</p>
						<p>
							이외에도 <strong>Google Analytics</strong>를 적용하여
							<strong
								>일별 활성 사용자 수, 각 페이지 활성화 수, 접속 기기
								분류</strong
							>
							등의 데이터를 자동 집계하고 시각적으로 표현할 수 있도록
							구성했습니다.
						</p>

						<p>
							또한, 카카오톡, 구글, 네이버 등
							<strong>SNS 계정으로 간편하게 회원가입</strong> 및 로그인할 수
							있도록 고객 데이터베이스를 설계하고, 해당 모듈을 시스템에
							통합했습니다.
						</p>
						<p>
							데이터베이스에서는 <strong>Write/Read 인스턴스를 분리</strong>하여
							적절한 부하 분산을 통해 안정적인 서비스 환경을 구현하였습니다.
						</p>

						<p>
							마지막으로, 검색 개발자와 협업하여
							<strong>Elastic Search</strong>를 설정하고, Python 기반의 검색
							모듈을 설치하여 <strong>이미지를 활용한 마루 추천 기능</strong>을
							개발했습니다.
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
									href="https://www.greendongwha.com/"
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
