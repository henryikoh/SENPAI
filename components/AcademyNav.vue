<template>
	<div class="head">
		<div class="logo">
			<svg
				width="46"
				height="52"
				viewBox="0 0 46 52"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M46 0H0V31.5713C0 42.854 10.2974 52 23 52C35.7026 52 46 42.854 46 31.5713V0Z"
					fill="#41C0BF"
				/>
				<path
					d="M33.4535 14.5601L31.1289 23.9193H12.5459C12.5459 18.7496 16.7045 14.5601 21.8388 14.5601H33.4535Z"
					fill="white"
				/>
				<path
					d="M12.5459 23.9194H31.129C31.129 29.0891 26.9705 33.2787 21.8388 33.2787C16.7045 33.2786 12.5459 29.0891 12.5459 23.9194Z"
					fill="white"
				/>
				<path
					d="M31.1304 23.9208L33.4549 14.5615H21.8402C16.7059 14.5615 12.5474 18.7511 12.5474 23.9208C12.5474 29.0905 16.7059 33.2801 21.8402 33.2801C26.9718 33.2799 31.1304 29.0905 31.1304 23.9208Z"
					fill="white"
				/>
			</svg>
			<h1>Senpai Academy</h1>
		</div>
		<ul class="menu">
			<li>
				Tracks
			</li>
			<li>
				Courses
			</li>
			<li>
				About
			</li>
		</ul>
	</div>
</template>

<script>
export default {}
</script>

<style scoped>
.head {
	width: 80%;
	margin: auto;
	padding: 25px 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.logo {
	display: inline-flex;
	align-items: center;
}
.logo h1 {
	width: 50%;
	font-family: Montserrat;
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 22px;
	color: #525252;
	margin-left: 10px;
	text-transform: uppercase;
}
.menu {
	list-style-type: none;
}
.menu li {
	display: inline-block;
	margin-left: 30px;
}
</style>
