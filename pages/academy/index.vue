<template>
	<div>
		<NavBar />
		<div class="">
			<div class="landing wrap">
				<div class="cop">
					<h1>
						A School for the Creatively Gifted
					</h1>
					<p>
						Senpai Academy is an innovative design school that teaches creative
						people how to harness their creative potential through good design,
						technology, and social entrepreneurship.
					</p>
					<button>View Courses</button>
				</div>
				<div style="width: 44%;">
					<div class="hero"></div>
				</div>
			</div>
			<div class="future">
				<div class="copy2">
					<h1>
						The future is being designed by creative people who have embraced
						technology as a platform for creativity.
					</h1>
					<p>
						Begin your creative technology journey with senpai and join a
						community to artists, makers and dreamers who have decided to create
						a better future for humanity.
					</p>
				</div>
				<img class="clip" src="/simi.png" alt="" />
			</div>
			<section class="courses">
				<h1>
					Courses
				</h1>
				<p>
					We offer a variety of courses that have been created with love to help
					you become a better designer and problem solver. Whether you are new
					to design or looking to add design to your skillset, We have sometime
					for you.
				</p>
				<div class="course">
					<div>
						<nuxt-link
							:to="{
								name: 'academy-courses-design101',
							}"
						>
							<div class="course1 design101 ">
								<h2>
									Design 101
								</h2>
							</div>
							<!-- <h2>
              Design 101
            </h2> -->
						</nuxt-link>
					</div>
					<div class="course1 frontend">
						<h2>
							Intro to Web Development for Creatives
						</h2>
					</div>
					<div class="course1 design101">
						<h2>
							Design 101
						</h2>
					</div>
				</div>
			</section>
		</div>
		<Footer />
	</div>
</template>

<script>
import NavBar from '~/components/AcademyNav.vue'
import Footer from '~/components/Footer.vue'
export default {
	components: {
		NavBar,
		Footer,
	},
}
</script>

<style scoped>
a {
	text-decoration: none;
}
.wrap {
	width: 80%;
	margin: auto;
}
.landing {
	display: flex;
	align-items: center;
	margin-bottom: 70px;
	/* margin-top: 30px; */
}
.cop {
	width: 60%;
	padding-right: 65px;
}
.cop h1 {
	font-family: Montserrat, Helvetica, Arial, sans-serif;
	font-style: normal;
	font-stretch: normal;
	line-height: normal;
	letter-spacing: normal;
	color: #525252;
	font-weight: bold;
	font-size: 65px;
	line-height: 74px;
	letter-spacing: 0.02em;
}
.cop p {
	font-family: Montserrat, Helvetica, Arial, sans-serif;
	font-style: normal;
	font-weight: normal;
	font-size: 21px;
	line-height: 26px;
	color: #525252;
	margin-top: 5px;
}
.cop button {
	padding: 10px 15px;
	background-color: #41c0bf;
	color: white;
	border: none;
	border-radius: 5px;
	font-family: Montserrat;
	font-style: normal;
	font-weight: 500;
	font-size: 17px;
	line-height: 19px;
	cursor: pointer;
	margin-top: 20px;
}
.hero {
	padding-bottom: 112%;
	background-color: #41c0bf;
	border-radius: 0px 0px 300px 300px;
	background-image: url(/rectangle.jpg);
	/* background-size: cover; */
	background-position: center;
	background: linear-gradient(
			0deg,
			rgba(65, 192, 191, 0.4),
			rgba(65, 192, 191, 0.4)
		),
		url(/hero.png),
		linear-gradient(108.5deg, #41c0bf 24.02%, rgba(61, 185, 144, 0.47) 81.23%),
		#c4c4c4;
	background-position: center;
	background-size: cover;
}
.future {
	background-color: #81caca;
	/* width: 80%; */
	padding: 0 0 0 10%;
	/* margin: auto; */
	display: -webkit-box;
	display: flex;
	height: 366px;
	align-items: center;
}
.copy2 h1 {
	font-family: Montserrat;
	font-style: normal;
	font-weight: bold;
	font-size: 32px;
	line-height: 39px;
	color: #ffffff;
	width: 57%;
}
.copy2 p {
	font-family: Montserrat;
	font-style: normal;
	font-weight: normal;
	font-size: 22px;
	line-height: 27px;
	color: #ffffff;
	width: 50%;
	margin-top: 20px;
}
.clip {
	width: 45%;
	/* position: absolute; */
	-webkit-clip-path: 0 5% 0 0;
	clip-path: 0 5% 0 0;
	-webkit-clip-path: inset(0px 0px 0px 29px);
	clip-path: inset(0px 0px 0px 29px);
	-webkit-clip-path: polygon(43% 0, 100% 0%, 100% 100%, 0% 100%);
	clip-path: polygon(43% 0, 100% 0%, 100% 100%, 0% 100%);
	-o-object-fit: cover;
	object-fit: cover;
	height: 366px;
	-o-object-position: center;
	object-position: center;
	position: absolute;
	right: 0;
}
.courses {
	background: linear-gradient(
			180deg,
			#ffffff 5.52%,
			rgba(255, 255, 255, 0.16) 57.46%,
			rgba(82, 82, 82, 0.14) 100%
		),
		#ffffff;
	padding: 60px 10%;
}
.courses h1 {
	font-family: Montserrat;
	font-style: normal;
	font-weight: bold;
	font-size: 40px;
	line-height: 49px;
	color: #525252;
	display: inline-block;
	margin-bottom: 15px;
}
.courses h1::after {
	content: '';
	background: #41c0bf;
	display: block;
	height: 5px;
	width: 50%;
	margin-top: 5px;
}
.courses p {
	font-family: Montserrat;
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 22px;
	color: #525252;
	width: 70%;
}
.course {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 35px;
	margin-top: 45px;
}

.course1 {
	background-position: center;
	background-size: cover;
	height: 180px;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
	border-radius: 5px;
	text-align: center;
	color: white;
	display: flex;
	cursor: pointer;
}
.design101 {
	background-image: linear-gradient(
			0deg,
			rgba(49, 154, 155, 0.6),
			rgba(49, 154, 153, 0.6)
		),
		url(/teach.jpeg);
}
.frontend {
	background-image: linear-gradient(
			0deg,
			rgba(49, 154, 155, 0.6),
			rgba(49, 154, 153, 0.6)
		),
		url(/dev.png);
}
.course1 h2 {
	margin: auto;
	width: 80%;
	font-family: Montserrat;
	font-style: normal;
	font-weight: bold;
	font-size: 28px;
	line-height: 34px;

	color: #ffffff;
	filter: drop-shadow(4px 3px 0px #525252);
}
</style>
