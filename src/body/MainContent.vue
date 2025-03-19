<template>
	<!-- Me Section -->
	<section id="me" class="hero section light-background">
		<img src="@/assets/img/main.jpg" alt="" />

		<div class="container" data-aos="zoom-out">
			<div class="row justify-content-center">
				<div class="col-lg-9">
					<h2>Inhoo Choi</h2>
					<p>
						I'm
						<span
							class="typed"
							ref="typedElement"
							data-typed-items="Backend Developer, Server Developer, DBA, Frontend Developer"
						></span
						><span
							class="typed-cursor typed-cursor--blink"
							aria-hidden="true"
						></span>
					</p>
					<!-- <div class="social-links">
						<a href="#"><i class="bi bi-twitter-x"></i></a>
						<a href="#"><i class="bi bi-facebook"></i></a>
						<a href="#"><i class="bi bi-instagram"></i></a>
						<a href="#"><i class="bi bi-linkedin"></i></a>
					</div> -->
				</div>
			</div>
		</div>
	</section>
	<!-- /Me Section -->

	<!-- About Section -->
	<section id="about" class="about section">
		<!-- Section Title -->
		<div class="container section-title" data-aos="fade-up">
			<h2>About</h2>
			<p>
				안녕하세요! 👋 <br />저는 백엔드 개발자로서 현재 시스템 설계와 개발
				업무를 담당하고 있습니다. <br />시간적 여유가 생기면 여행을 즐기거나 🗺️
				맥주 한 잔 🍺 하며 휴식을 취하는 걸 좋아합니다.<br />
				요즘은 시각적인 표현에 흥미가 생겨 프론트엔드 개발을 공부하며, 처음부터
				끝까지 개발할 수 있는 풀스택 개발자를 목표로 노력 중입니다.
				<br />
				또한, 상용화된 AI 모델에 파인튜닝과 RAG를 활용해 챗봇을 만들어보는
				것에도 관심을 가지고 있습니다.
			</p>
		</div>
		<!-- End Section Title -->

		<div class="container" data-aos="fade-up" data-aos-delay="100">
			<div class="row gy-4 justify-content-center">
				<div class="col-lg-4">
					<img
						src="@/assets/img/profile2.jpg"
						class="img-fluid"
						alt="profile"
						style="border-radius: 5px"
					/>
				</div>
				<div class="col-lg-8 content">
					<h2>Backend &amp; Frontend Developer.</h2>
					<p class="fst-italic py-3">"지나간 일에 후회 말고, 앞으로 잘하자"</p>
					<div class="row">
						<div class="col-lg-6">
							<ul>
								<li>
									<i class="bi bi-chevron-right"></i>
									<strong>Birthday:</strong> <span>11 May 1989</span>
								</li>
								<li>
									<i class="bi bi-chevron-right"></i>
									<strong>Website:</strong>
									<span>http://43.201.140.228:7000</span>
								</li>
								<li>
									<i class="bi bi-chevron-right"></i>
									<strong>GitHub:</strong>
									<span>https://github.com/oshion</span>
								</li>
								<li>
									<i class="bi bi-chevron-right"></i> <strong>Phone:</strong>
									<span>+82 10 2545 1289</span>
								</li>
							</ul>
						</div>
						<div class="col-lg-6">
							<ul>
								<li>
									<i class="bi bi-chevron-right"></i> <strong>Age:</strong>
									<span>{{ age }}</span>
								</li>
								<li>
									<i class="bi bi-chevron-right"></i> <strong>Email:</strong>
									<span>oshion89@gmail.com</span>
								</li>
								<li>
									<i class="bi bi-chevron-right"></i> <strong>City:</strong>
									<span>서울시 영등포구</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- /About Section -->

	<!-- Stats Section -->
	<!-- <section id="stats" class="stats section">
		<div class="container" data-aos="fade-up" data-aos-delay="100">
			<div class="row gy-4">
				<div class="col-lg-3 col-md-6 d-flex flex-column align-items-center">
					<i class="bi bi-emoji-smile"></i>
					<div class="stats-item">
						<AppCounterItem
							:start="0"
							:end="232"
							:duration="1"
							label="Happy Clients"
						></AppCounterItem>
					</div>
				</div>

				<div class="col-lg-3 col-md-6 d-flex flex-column align-items-center">
					<i class="bi bi-journal-richtext"></i>
					<div class="stats-item">
						<AppCounterItem
							:start="0"
							:end="521"
							:duration="1"
							label="Projects"
						></AppCounterItem>
					</div>
				</div>

				<div class="col-lg-3 col-md-6 d-flex flex-column align-items-center">
					<i class="bi bi-headset"></i>
					<div class="stats-item">
						<AppCounterItem
							:start="0"
							:end="1463"
							:duration="1"
							label="Hours Of Support"
						></AppCounterItem>
					</div>
				</div>

				<div class="col-lg-3 col-md-6 d-flex flex-column align-items-center">
					<i class="bi bi-people"></i>
					<div class="stats-item">
						<AppCounterItem
							:start="0"
							:end="15"
							:duration="1"
							label="Hard Workers"
						></AppCounterItem>
					</div>
				</div>
			</div>
		</div>
	</section> -->
	<!-- /Stats Section -->

	<!-- Resume Section -->
	<section id="resume" class="resume section">
		<!-- Section Title -->
		<div class="container section-title" data-aos="fade-up">
			<h2>Resume</h2>
			<p>
				이러한 경험을 쌓았습니다. 항상 좋은 선배님들과 동료들과 함께 해왔습니다.
				<br />앞으로도 새롭고 재미있는 경험을 계속해서 쌓아 나가길 기대합니다.
			</p>
		</div>
		<!-- End Section Title -->

		<div class="container">
			<div class="row">
				<div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
					<h3 class="resume-title">Sumary</h3>

					<div class="resume-item pb-0">
						<h4>총 업무 경험</h4>
						<p>
							<em>약 8년차 개발자</em>
						</p>
					</div>
					<!-- Edn Resume Item -->

					<h3 class="resume-title">Education</h3>
					<div class="resume-item">
						<h4>SK고용디딤돌</h4>
						<h5>2016 - 2016</h5>
						<p>
							JAVA, JSP 직업교육<br />Oracle SQL 직업교육<br />전반적인 비지니스
							매너
						</p>
					</div>
					<!-- Edn Resume Item -->

					<div class="resume-item">
						<h4>캐나다 워킹홀리데이</h4>
						<h5>2014 - 2015</h5>
						<p><em>약 1년간의 어학연수</em></p>
						<p>현지 생활 경험, 아르바이트, 여행</p>
					</div>

					<div class="resume-item">
						<h4>수원대학교</h4>
						<h5>2008 - 2016</h5>
						<p><em>컴퓨터학과</em></p>
						<p>졸업🎆✨🎇</p>
					</div>
					<!-- Edn Resume Item -->
				</div>

				<div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
					<h3 class="resume-title">Professional Experience</h3>
					<div class="resume-item">
						<h4>동화기업</h4>
						<h5>2021 - Present</h5>
						<p><em>Website Backend, Server, Dababase 설계 및 개발 </em></p>
						<ul>
							<li>
								백앤드 리더로 참여 프로젝트 2건 <br />(동화자연마루,
								동화자연마루 베트남)
							</li>
							<li>
								백앤드 구성원으로 참여 프로젝트 6건
								<br />(중고차매매단지운영사이트, 중고차매매종사원사이트,
								중고차성능점검사이트, 중고차단지키오스크, 중고차고객사이트,
								중고차상사사이트)
							</li>
							<li>
								클라우드기반 B2C Linux 서버 초기 세팅 및 개발, 서버 가용률 99%
								달성, 트러블슈팅
							</li>
							<li>프로젝트 구조 세팅 및 CI/CD 설정</li>
							<li>데이터베이스 구조 설계 및 제품 코드화 작업</li>
							<li>조직 내 REST API 구조 표준 정의 작업</li>
							<li>API 통신을 기반으로 한 SMS Agent 자체 개발</li>
							<li>AWS Loadbalancer, Autoscaling을 활용한 대용량 트래픽 처리</li>
							<li>NoSql Cahce 를 통한 DB Hit Ratio 관리</li>
							<li>외부 중고차업체 매물공유 외부 Interface</li>
							<li>기존 Mssql 배치 Spring Batch로 마이그레이션 개발</li>
						</ul>
					</div>
					<!-- Edn Resume Item -->

					<div class="resume-item">
						<h4>삼표</h4>
						<h5>2019 - 2021</h5>
						<p><em>Android Mobile & Tablet 개발 및 유지보수</em></p>
						<ul>
							<li>
								레미콘 품질, 재고, 예정, 유류 발주 등 Android Mobile 시스템 개발
								및 유지보수
							</li>
							<li>
								PC(Precast Concrete) Tablet 품질검사 및 CheckList 출력 기능 개발
							</li>
							<li>
								PC 예정 Tablet 생산 예정 전송, PC 생산 도면 확인 Mobile 개발
							</li>
							<li>
								원거리 QR 스캐너에 탑재된 Mobile 프로그램 개발, 등록된 재고를
								확인하는 Web Kakao map 기반 Mobile 개발
							</li>
						</ul>
					</div>

					<div class="resume-item">
						<h4>참엔지니어링</h4>
						<h5>2017 - 2019</h5>
						<p>
							<em>Display Repair 설비 자동화 및 Repair SW개발 및 유지보수</em>
						</p>
						<ul>
							<li>
								Display Repair 설비의 Hardware 제어 및 불량 DATA 의 상태 관리
							</li>
							<li>설비와 물류 프로그램 사이의 Message 통신 제어</li>
						</ul>
					</div>
					<div class="resume-item">
						<h4>코니퍼</h4>
						<h5>2016 - 2017</h5>
						<p>
							<em
								>SKT CS legacy 시스템 웹 기반 서비스 프로그램으로 개발 빌링파트
								자동납부 개발진행</em
							>
						</p>
						<ul>
							<li>
								기존 ASIS 프로그램 웹 기반 서비스 프로그램으로 마이그레이션 개발
								및 테스트 진행.
							</li>
						</ul>
					</div>
					<!-- Edn Resume Item -->
				</div>
			</div>
		</div>
	</section>
	<!-- /Resume Section -->

	<!-- Skills Section -->
	<section id="skills" class="skills section">
		<!-- Section Title -->
		<div class="container section-title" data-aos="fade-up">
			<h2>Skills</h2>
			<p>주관적으로 표현한 저의 스킬입니다.</p>
		</div>
		<!-- End Section Title -->

		<div class="container" data-aos="fade-up" data-aos-delay="100">
			<div class="row skills-content">
				<div
					v-for="(skillGroup, index) in skillsGroups"
					:key="index"
					class="col-lg-6"
				>
					<div v-for="skill in skillGroup" :key="skill.name" class="progress">
						<span class="skill">
							<span>{{ skill.name }}</span>
							<i class="val">{{ skill.value }}%</i>
						</span>
						<div class="progress-bar-wrap">
							<div
								class="progress-bar"
								role="progressbar"
								:aria-valuenow="skill.value"
								aria-valuemin="0"
								aria-valuemax="100"
								:style="{ width: skill.animated ? skill.value + '%' : '0%' }"
							></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- /Skills Section -->

	<!-- Services Section -->
	<section id="Stack" class="services section">
		<!-- Section Title -->
		<div class="container section-title" data-aos="fade-up">
			<h2>Stack</h2>
			<p></p>
		</div>
		<!-- End Section Title -->

		<div class="container">
			<div class="row gy-4">
				<div class="col-lg-2 col-md-4" data-aos="fade-up" data-aos-delay="100">
					<div class="service-item item-springboot position-relative">
						<div class="icon">
							<svg width="100" height="100" viewBox="0 0 600 600">
								<path
									d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"
								></path>
							</svg>

							<img
								src="@/assets/img/stack/springboot.svg"
								class="custom-icon"
								alt="spring boot"
							/>
						</div>
						<h3>Spring Boot</h3>
					</div>
				</div>
				<!-- End Service Item -->

				<div class="col-lg-2 col-md-4" data-aos="fade-up" data-aos-delay="200">
					<div class="service-item item-vue3 position-relative">
						<div class="icon">
							<svg width="100" height="100" viewBox="0 0 600 600">
								<path
									d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"
								></path>
							</svg>
							<img
								src="@/assets/img/stack/vue3.svg"
								class="custom-icon"
								alt="vue3"
							/>
						</div>
						<h3>vue3</h3>
					</div>
				</div>
				<!-- End Service Item -->

				<div class="col-lg-2 col-md-4" data-aos="fade-up" data-aos-delay="200">
					<div class="service-item item-mysql position-relative">
						<div class="icon">
							<svg width="100" height="100" viewBox="0 0 600 600">
								<path
									d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781"
								></path>
							</svg>
							<img
								src="@/assets/img/stack/mysql.svg"
								class="custom-icon"
								alt="Mysql"
							/>
						</div>
						<h3>Mysql</h3>
					</div>
				</div>
				<!-- End Service Item -->

				<div class="col-lg-2 col-md-4" data-aos="fade-up" data-aos-delay="200">
					<div class="service-item item-ec2 position-relative">
						<div class="icon">
							<svg width="100" height="100" viewBox="0 0 600 600">
								<path
									d="M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,81.28167332365135,250.07896920659033C70.17666984294237,320.27484674793965,64.84698225790005,396.69656628748305,111.28512138212992,450.4950937839243C156.20124167950087,502.5303643271138,231.32542653798444,500.4755392045468,300,503.46388370962813"
								></path>
							</svg>
							<img
								src="@/assets/img/stack/amazonec2.svg"
								class="custom-icon"
								alt="AWS EC2"
							/>
						</div>
						<h3>AWS EC2</h3>
					</div>
				</div>
				<!-- End Service Item -->

				<div class="col-lg-2 col-md-4" data-aos="fade-up" data-aos-delay="200">
					<div class="service-item item-rds position-relative">
						<div class="icon">
							<svg width="100" height="100" viewBox="0 0 600 600">
								<path
									d="M300,532.3542879108572C369.38199826031484,532.3153073249985,429.10787420159085,491.63046689027357,474.5244479745417,439.17860296908856C522.8885846962883,383.3225815378663,569.1668002868075,314.3205725914397,550.7432151929288,242.7694973846089C532.6665558377875,172.5657663291529,456.2379748765914,142.6223662098291,390.3689995646985,112.34683881706744C326.66090330228417,83.06452184765237,258.84405631176094,53.51806209861945,193.32584062364296,78.48882559362697C121.61183558270385,105.82097193414197,62.805066853699245,167.19869350419734,48.57481801355237,242.6138429142374C34.843463184063346,315.3850353017275,76.69343916112496,383.4422959591041,125.22947124332185,439.3748458443577C170.7312796277747,491.8107796887764,230.57421082200815,532.3932930995766,300,532.3542879108572"
								></path>
							</svg>
							<img
								src="@/assets/img/stack/amazonrds.svg"
								class="custom-icon"
								alt="AWS RDS"
							/>
						</div>
						<h3>AWS RDS</h3>
					</div>
				</div>
				<!-- End Service Item -->

				<div class="col-lg-2 col-md-4" data-aos="fade-up" data-aos-delay="200">
					<div class="service-item item-s3 position-relative">
						<div class="icon">
							<svg width="100" height="100" viewBox="0 0 600 600">
								<path
									d="M300,566.797414625762C385.7384707136149,576.1784315230908,478.7894351017131,552.8928747891023,531.9192734346935,484.94944893311C584.6109503024035,417.5663521118492,582.489472248146,322.67544863468447,553.9536738515405,242.03673114598146C529.1557734026468,171.96086150256528,465.24506316201064,127.66468636344209,395.9583748389544,100.7403814666027C334.2173773831606,76.7482773500951,269.4350130405921,84.62216499799875,207.1952322260088,107.2889140133804C132.92018162631612,134.33871894543012,41.79353780512637,160.00259165414826,22.644507872594943,236.69541883565114C3.319112789854554,314.0945973066697,72.72355303640163,379.243833228382,124.04198916343866,440.3218312028393C172.9286146004772,498.5055451809895,224.45579914871206,558.5317968840102,300,566.797414625762"
								></path>
							</svg>
							<img
								src="@/assets/img/stack/amazons3.svg"
								class="custom-icon"
								alt="AWS S3"
							/>
						</div>
						<h3>AWS S3</h3>
					</div>
				</div>
				<!-- End Service Item -->

				<div class="col-lg-2 col-md-4" data-aos="fade-up" data-aos-delay="200">
					<div class="service-item item-elasticache position-relative">
						<div class="icon">
							<svg width="100" height="100" viewBox="0 0 600 600">
								<path
									d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"
								></path>
							</svg>
							<img
								src="@/assets/img/stack/amazonelasticache.svg"
								class="custom-icon"
								alt="AWS ElastiCache"
							/>
						</div>
						<h3>AWS ElastiCache</h3>
					</div>
				</div>
				<!-- End Service Item -->

				<div class="col-lg-2 col-md-4" data-aos="fade-up" data-aos-delay="200">
					<div class="service-item item-loadbalance position-relative">
						<div class="icon">
							<svg width="100" height="100" viewBox="0 0 600 600">
								<path
									d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"
								></path>
							</svg>
							<img
								src="@/assets/img/stack/awselasticloadbalancing.svg"
								class="custom-icon"
								alt="AWS LoadBalance"
							/>
						</div>
						<h3>AWS LoadBalance</h3>
					</div>
				</div>
				<!-- End Service Item -->

				<div class="col-lg-2 col-md-4" data-aos="fade-up" data-aos-delay="200">
					<div class="service-item item-git position-relative">
						<div class="icon">
							<svg width="100" height="100" viewBox="0 0 600 600">
								<path
									d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781"
								></path>
							</svg>
							<img
								src="@/assets/img/stack/git.svg"
								class="custom-icon"
								alt="AWS CodePipeLine"
							/>
						</div>
						<h3>AWS CodePipeLine</h3>
					</div>
				</div>
				<!-- End Service Item -->

				<div class="col-lg-2 col-md-4" data-aos="fade-up" data-aos-delay="200">
					<div class="service-item item-lambda position-relative">
						<div class="icon">
							<svg width="100" height="100" viewBox="0 0 600 600">
								<path
									d="M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,81.28167332365135,250.07896920659033C70.17666984294237,320.27484674793965,64.84698225790005,396.69656628748305,111.28512138212992,450.4950937839243C156.20124167950087,502.5303643271138,231.32542653798444,500.4755392045468,300,503.46388370962813"
								></path>
							</svg>
							<img
								src="@/assets/img/stack/awslambda.svg"
								class="custom-icon"
								alt="AWS Lambda"
							/>
						</div>
						<h3>AWS Lambda</h3>
					</div>
				</div>
				<!-- End Service Item -->

				<div class="col-lg-2 col-md-4" data-aos="fade-up" data-aos-delay="200">
					<div class="service-item item-androidstudio position-relative">
						<div class="icon">
							<svg width="100" height="100" viewBox="0 0 600 600">
								<path
									d="M300,532.3542879108572C369.38199826031484,532.3153073249985,429.10787420159085,491.63046689027357,474.5244479745417,439.17860296908856C522.8885846962883,383.3225815378663,569.1668002868075,314.3205725914397,550.7432151929288,242.7694973846089C532.6665558377875,172.5657663291529,456.2379748765914,142.6223662098291,390.3689995646985,112.34683881706744C326.66090330228417,83.06452184765237,258.84405631176094,53.51806209861945,193.32584062364296,78.48882559362697C121.61183558270385,105.82097193414197,62.805066853699245,167.19869350419734,48.57481801355237,242.6138429142374C34.843463184063346,315.3850353017275,76.69343916112496,383.4422959591041,125.22947124332185,439.3748458443577C170.7312796277747,491.8107796887764,230.57421082200815,532.3932930995766,300,532.3542879108572"
								></path>
							</svg>
							<img
								src="@/assets/img/stack/androidstudio.svg"
								class="custom-icon"
								alt="Android Studio"
							/>
						</div>
						<h3>Android Studio</h3>
					</div>
				</div>
				<!-- End Service Item -->

				<div class="col-lg-2 col-md-4" data-aos="fade-up" data-aos-delay="200">
					<div class="service-item item-ga position-relative">
						<div class="icon">
							<svg width="100" height="100" viewBox="0 0 600 600">
								<path
									d="M300,566.797414625762C385.7384707136149,576.1784315230908,478.7894351017131,552.8928747891023,531.9192734346935,484.94944893311C584.6109503024035,417.5663521118492,582.489472248146,322.67544863468447,553.9536738515405,242.03673114598146C529.1557734026468,171.96086150256528,465.24506316201064,127.66468636344209,395.9583748389544,100.7403814666027C334.2173773831606,76.7482773500951,269.4350130405921,84.62216499799875,207.1952322260088,107.2889140133804C132.92018162631612,134.33871894543012,41.79353780512637,160.00259165414826,22.644507872594943,236.69541883565114C3.319112789854554,314.0945973066697,72.72355303640163,379.243833228382,124.04198916343866,440.3218312028393C172.9286146004772,498.5055451809895,224.45579914871206,558.5317968840102,300,566.797414625762"
								></path>
							</svg>
							<img
								src="@/assets/img/stack/googleanalytics.svg"
								class="custom-icon"
								alt="Google Analytics"
							/>
						</div>
						<h3>Google Analytics</h3>
					</div>
				</div>
				<!-- End Service Item -->

				<div class="col-lg-2 col-md-4" data-aos="fade-up" data-aos-delay="200">
					<div class="service-item item-tomcat position-relative">
						<div class="icon">
							<svg width="100" height="100" viewBox="0 0 600 600">
								<path
									d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"
								></path>
							</svg>
							<img
								src="@/assets/img/stack/apachetomcat.svg"
								class="custom-icon"
								alt="Tomcat"
							/>
						</div>
						<h3>Tomcat</h3>
					</div>
				</div>
				<!-- End Service Item -->

				<div class="col-lg-2 col-md-4" data-aos="fade-up" data-aos-delay="200">
					<div class="service-item item-nginx position-relative">
						<div class="icon">
							<svg width="100" height="100" viewBox="0 0 600 600">
								<path
									d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"
								></path>
							</svg>
							<img
								src="@/assets/img/stack/nginx.svg"
								class="custom-icon"
								alt="Nginx"
							/>
						</div>
						<h3>Nginx</h3>
					</div>
				</div>
				<!-- End Service Item -->

				<div class="col-lg-2 col-md-4" data-aos="fade-up" data-aos-delay="200">
					<div class="service-item item-java position-relative">
						<div class="icon">
							<svg width="100" height="100" viewBox="0 0 600 600">
								<path
									d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781"
								></path>
							</svg>
							<img
								src="@/assets/img/stack/java.svg"
								class="custom-icon"
								alt="java"
							/>
						</div>
						<h3>Java</h3>
					</div>
				</div>
				<!-- End Service Item -->

				<div class="col-lg-2 col-md-4" data-aos="fade-up" data-aos-delay="200">
					<div class="service-item item-redis position-relative">
						<div class="icon">
							<svg width="100" height="100" viewBox="0 0 600 600">
								<path
									d="M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,81.28167332365135,250.07896920659033C70.17666984294237,320.27484674793965,64.84698225790005,396.69656628748305,111.28512138212992,450.4950937839243C156.20124167950087,502.5303643271138,231.32542653798444,500.4755392045468,300,503.46388370962813"
								></path>
							</svg>
							<img
								src="@/assets/img/stack/redis.svg"
								class="custom-icon"
								alt="Redis"
							/>
						</div>
						<h3>Redis</h3>
					</div>
				</div>
				<!-- End Service Item -->

				<div class="col-lg-2 col-md-4" data-aos="fade-up" data-aos-delay="200">
					<div class="service-item item-jsp position-relative">
						<div class="icon">
							<svg width="100" height="100" viewBox="0 0 600 600">
								<path
									d="M300,532.3542879108572C369.38199826031484,532.3153073249985,429.10787420159085,491.63046689027357,474.5244479745417,439.17860296908856C522.8885846962883,383.3225815378663,569.1668002868075,314.3205725914397,550.7432151929288,242.7694973846089C532.6665558377875,172.5657663291529,456.2379748765914,142.6223662098291,390.3689995646985,112.34683881706744C326.66090330228417,83.06452184765237,258.84405631176094,53.51806209861945,193.32584062364296,78.48882559362697C121.61183558270385,105.82097193414197,62.805066853699245,167.19869350419734,48.57481801355237,242.6138429142374C34.843463184063346,315.3850353017275,76.69343916112496,383.4422959591041,125.22947124332185,439.3748458443577C170.7312796277747,491.8107796887764,230.57421082200815,532.3932930995766,300,532.3542879108572"
								></path>
							</svg>
							<img
								src="@/assets/img/stack/jsp.svg"
								class="custom-icon"
								alt="JSP"
							/>
						</div>
						<h3>JSP</h3>
					</div>
				</div>
				<!-- End Service Item -->

				<div class="col-lg-2 col-md-4" data-aos="fade-up" data-aos-delay="200">
					<div class="service-item item-javascript position-relative">
						<div class="icon">
							<svg width="100" height="100" viewBox="0 0 600 600">
								<path
									d="M300,566.797414625762C385.7384707136149,576.1784315230908,478.7894351017131,552.8928747891023,531.9192734346935,484.94944893311C584.6109503024035,417.5663521118492,582.489472248146,322.67544863468447,553.9536738515405,242.03673114598146C529.1557734026468,171.96086150256528,465.24506316201064,127.66468636344209,395.9583748389544,100.7403814666027C334.2173773831606,76.7482773500951,269.4350130405921,84.62216499799875,207.1952322260088,107.2889140133804C132.92018162631612,134.33871894543012,41.79353780512637,160.00259165414826,22.644507872594943,236.69541883565114C3.319112789854554,314.0945973066697,72.72355303640163,379.243833228382,124.04198916343866,440.3218312028393C172.9286146004772,498.5055451809895,224.45579914871206,558.5317968840102,300,566.797414625762"
								></path>
							</svg>
							<img
								src="@/assets/img/stack/javascript.svg"
								class="custom-icon"
								alt="javascript"
							/>
						</div>
						<h3>javascript</h3>
					</div>
				</div>
				<!-- End Service Item -->

				<div class="col-lg-2 col-md-4" data-aos="fade-up" data-aos-delay="200">
					<div class="service-item item-c position-relative">
						<div class="icon">
							<svg width="100" height="100" viewBox="0 0 600 600">
								<path
									d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"
								></path>
							</svg>
							<img src="@/assets/img/stack/c.svg" class="custom-icon" alt="c" />
						</div>
						<h3>c</h3>
					</div>
				</div>
				<!-- End Service Item -->
			</div>
		</div>
	</section>
	<!-- /Services Section -->

	<!-- Portfolio Section -->
	<section id="portfolio" class="portfolio section">
		<!-- Section Title -->
		<div class="container section-title" data-aos="fade-up">
			<h2>Portfolio</h2>
			<p>
				지금까지 참여했던 프로젝트들을 소개합니다.<br />
				클릭하시면 상세 포트폴리오를 확인하실 수 있습니다.<br />
				현재 웹사이트는 Vue3로 개발되었으며 AWS의 EC2상에서 동작하고 있습니다.
			</p>
		</div>
		<!-- End Section Title -->

		<div class="container">
			<div data-layout="masonry" data-sort="original-order">
				<!-- End Portfolio Filters -->

				<div class="row gy-4" data-aos="fade-up" data-aos-delay="200">
					<!-- <div class="col-lg-4 col-md-6 portfolio-item">
						<RouterLink to="/toyproject">
							<img
								src="@/assets/img/masonry-portfolio/toyproject.png"
								class="img-fluid transparentsoft-image"
								alt="toyproject"
							/>

							<div class="portfolio-info">
								<h4>Toy Project</h4>
								<p>
									아파트 매물 거래와 유사한 룸쉐어 파트너 찾는 사이트 입니다.
								</p>
							</div>
						</RouterLink>
					</div> -->
					<!-- End Portfolio Item -->

					<!-- <div class="col-lg-4 col-md-6 portfolio-item">
						<RouterLink to="/toyproject">
							<img
								src="@/assets/img/masonry-portfolio/toyproject.png"
								class="img-fluid transparentsoft-image"
								alt="toyproject"
							/>

							<div class="portfolio-info">
								<h4>여행전에</h4>
								<p>각 나라의 도시별 여행정보를 모아놓은 사이트 입니다.</p>
							</div>
						</RouterLink>
					</div> -->
					<!-- End Portfolio Item -->

					<div class="col-lg-4 col-md-6 portfolio-item">
						<RouterLink to="/green">
							<img
								src="@/assets/img/masonry-portfolio/green.png"
								class="img-fluid transparentsoft-image"
								alt="greendongwha"
							/>

							<div class="portfolio-info">
								<h4>동화자연마루</h4>
								<p>동화기업의 마루 고객사이트 입니다.</p>
							</div>
						</RouterLink>
					</div>
					<!-- End Portfolio Item -->

					<div class="col-lg-4 col-md-6 portfolio-item">
						<RouterLink to="/greenviet">
							<img
								src="@/assets/img/masonry-portfolio/greenviet.png"
								class="img-fluid transparentsoft-image"
								alt="greendongwhavietnam"
							/>

							<div class="portfolio-info">
								<h4>동화자연마루 베트남</h4>
								<p>동화기업의 베트남 마루 고객 사이트 입니다.</p>
							</div>
						</RouterLink>
					</div>
					<!-- End Portfolio Item -->

					<div class="col-lg-4 col-md-6 portfolio-item">
						<RouterLink to="/mpark">
							<img
								src="@/assets/img/masonry-portfolio/mpark.png"
								class="img-fluid transparentsoft-image"
								alt="mpark"
							/>

							<div class="portfolio-info">
								<h4>엠파크 고객사이트</h4>
								<p>엠파크 중고차 매매단지 고객 사이트 입니다.</p>
							</div>
						</RouterLink>
					</div>
					<!-- End Portfolio Item -->

					<div class="col-lg-4 col-md-6 portfolio-item">
						<RouterLink to="/megam">
							<img
								src="@/assets/img/masonry-portfolio/megam.png"
								class="img-fluid transparentsoft-image"
								alt="megam"
							/>

							<div class="portfolio-info">
								<h4>엠파크 단지운영, 매물공유 사이트</h4>
								<p>엠파크 단지를 운영하고 딜러를위한 매물공유 사이트 입니다.</p>
							</div>
						</RouterLink>
					</div>
					<!-- End Portfolio Item -->

					<div class="col-lg-4 col-md-6 portfolio-item">
						<RouterLink to="/tablet">
							<img
								src="@/assets/img/masonry-portfolio/tablet.png"
								class="img-fluid transparenthard-image"
								alt="tablet"
							/>

							<div class="portfolio-info">
								<h4>Tablet 품질검사 & 생산 도면 관리</h4>
								<p>
									테블릿으로 품질을 검사하고 생산도면을 관리하는 시스템입니다.
								</p>
							</div>
						</RouterLink>
					</div>
					<!-- End Portfolio Item -->

					<div class="col-lg-4 col-md-6 portfolio-item">
						<RouterLink to="/scanner">
							<img
								src="@/assets/img/masonry-portfolio/scanner.png"
								class="img-fluid transparenthard-image"
								alt="scanner"
							/>

							<div class="portfolio-info">
								<h4>Mobile 스캐너 재고등록 및 재고관리</h4>
								<p>
									전용스캐너로 원거리 재고를 등록하고 관리하는 시스템입니다.
								</p>
							</div>
						</RouterLink>
					</div>
					<!-- End Portfolio Item -->

					<div class="col-lg-4 col-md-6 portfolio-item">
						<RouterLink to="/tank">
							<img
								src="@/assets/img/masonry-portfolio/tank.png"
								class="img-fluid transparenthard-image"
								alt="tank"
							/>

							<div class="portfolio-info">
								<h4>Mobile 탱크로리 실적전송</h4>
								<p>
									블루투스 통신으로 탱크로리의 주유량을 파악하고 실시간으로
									실적을 전송하는 시스템입니다.
								</p>
							</div>
						</RouterLink>
					</div>
					<!-- End Portfolio Item -->

					<!-- <div class="col-lg-4 col-md-6 portfolio-item">
						<img
							src="@/assets/img/masonry-portfolio/masonry-portfolio-9.jpg"
							class="img-fluid"
							alt=""
						/>
						<div class="portfolio-info">
							<h4>Branding 3</h4>
							<p>Lorem ipsum, dolor sit</p>
							<a
								href="@/assets/img/masonry-portfolio/masonry-portfolio-9.jpg"
								title="Branding 2"
								class="glightbox preview-link"
								><i class="bi bi-zoom-in"></i
							></a>
							<RouterLink to="/detail" title="More Details" class="details-link"
								><i class="bi bi-link-45deg"></i
							></RouterLink>
						</div>
					</div> -->
					<!-- End Portfolio Item -->
				</div>
				<!-- End Portfolio Container -->
			</div>
		</div>
	</section>
	<!-- /Portfolio Section -->

	<!-- Contact Section -->
	<section id="contact" class="contact section">
		<!-- Section Title -->
		<div class="container section-title" data-aos="fade-up">
			<h2>Contact</h2>
			<p>Feel free to text or email me.</p>
		</div>
		<!-- End Section Title -->

		<div class="container" data-aos="fade" data-aos-delay="100">
			<div class="row gy-4 justify-content-center">
				<div class="col-lg-4">
					<div class="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
						<i class="bi bi-geo-alt flex-shrink-0"></i>
						<div>
							<h3>Address</h3>
							<p>South Korea, Seoul</p>
						</div>
					</div>
					<!-- End Info Item -->

					<div class="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
						<i class="bi bi-telephone flex-shrink-0"></i>
						<div>
							<h3>Call Us</h3>
							<p>+82 10 2545 1289</p>
						</div>
					</div>
					<!-- End Info Item -->

					<div class="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
						<i class="bi bi-envelope flex-shrink-0"></i>
						<div>
							<h3>Email Us</h3>
							<p>oshion89@gmail.com</p>
						</div>
					</div>
					<!-- End Info Item -->
				</div>

				<!-- <div class="col-lg-8">
					<form
						action="forms/contact.php"
						method="post"
						class="php-email-form"
						data-aos="fade-up"
						data-aos-delay="200"
					>
						<div class="row gy-4">
							<div class="col-md-6">
								<input
									type="text"
									name="name"
									class="form-control"
									placeholder="Your Name"
									required=""
								/>
							</div>

							<div class="col-md-6">
								<input
									type="email"
									class="form-control"
									name="email"
									placeholder="Your Email"
									required=""
								/>
							</div>

							<div class="col-md-12">
								<input
									type="text"
									class="form-control"
									name="subject"
									placeholder="Subject"
									required=""
								/>
							</div>

							<div class="col-md-12">
								<textarea
									class="form-control"
									name="message"
									rows="6"
									placeholder="Message"
									required=""
								></textarea>
							</div>

							<div class="col-md-12 text-center">
								<div class="loading">Loading</div>
								<div class="error-message"></div>
								<div class="sent-message">
									Your message has been sent. Thank you!
								</div>

								<button type="submit">Send Message</button>
							</div>
						</div>
					</form>
				</div> -->
				<!-- End Contact Form -->
			</div>
		</div>
	</section>
	<!-- /Contact Section -->
</template>

<script setup>
import { onMounted, ref } from 'vue';
import AOS from 'aos';
import Typed from 'typed.js';
// import AppCounterItem from '@/components/app/AppCounterItem.vue';
import GLightbox from 'glightbox';

const skillsGroups = ref([
	[
		{ name: 'Spring boot', value: 80, animated: false },
		{ name: 'DBMS', value: 70, animated: false },
		{ name: 'vue3', value: 40, animated: false },
	],
	[
		{ name: 'Linux', value: 80, animated: false },
		{ name: 'AWS Cloud', value: 70, animated: false },
		{ name: 'Android', value: 70, animated: false },
	],
]);

const typedElement = ref(null);

// AOS 초기화 함수
function aosInit() {
	AOS.init({
		duration: 600,
		easing: 'ease-in-out',
		once: true,
		mirror: false,
	});
}

function typedElementInit() {
	// 데이터 속성에서 텍스트 항목 가져오기
	if (typedElement.value) {
		const typedStrings = typedElement.value
			.getAttribute('data-typed-items')
			.split(',');
		// Typed.js 초기화
		new Typed(typedElement.value, {
			strings: typedStrings,
			loop: true,
			typeSpeed: 40,
			backSpeed: 25,
			backDelay: 1000,
		});
	}
}

const observeSkills = () => {
	const observer = new IntersectionObserver(
		entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					skillsGroups.value.forEach(group => {
						group.forEach(skill => {
							skill.animated = true;
						});
					});
				}
			});
		},
		{ threshold: 0.5 }, // When 50% of the element is visible
	);

	const skillElements = document.querySelectorAll('.skills-content');
	skillElements.forEach(element => observer.observe(element));
};

function glightBoxInit() {
	// 이거 왜 동작 안하누 ㅠㅠ
	GLightbox({
		selector: '.glightbox', // .glightbox 클래스를 가진 요소에 대해 GLightbox 적용
	});
}

const age = ref(0);

const calculateAge = () => {
	const currentDate = new Date();
	const currentYear = currentDate.getFullYear();
	const currentMonth = currentDate.getMonth() + 1;
	const currentDay = currentDate.getDate();

	const [birthYear, birthMonth, birthDay] = '1989-05-11'.split('-').map(Number);

	// 나이 계산
	age.value = currentYear - birthYear;
	if (
		currentMonth < birthMonth ||
		(currentMonth === birthMonth && currentDay < birthDay)
	) {
		age.value--;
	}
};

onMounted(() => {
	aosInit();
	typedElementInit();
	observeSkills();
	glightBoxInit();
	calculateAge();
});
</script>

<style scoped></style>
