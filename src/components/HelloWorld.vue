<template>

	<div id="wrapper">
		
		<div id="splash-container">

			<div id="splash-copy-wrapper" class="fade-in">

				<div class="">
					
					<p class="title">SAH D<span>esign</span></p>
					<p class="info">Seth Holden</p>
					<p class="info">Freelance Architectural Designer</p>
					<p class="coming-soon">Coming soon...</p>

				</div>

			</div>

		</div>

		<footer id="footer-content" class="active">

			<p id="copy-date"><span>&copy;&nbsp;</span>2020</p>

			<div class="social-link-wrapper">
				<a id="mail-link" href="mailto:sethholdendesign@gmail.com">
					<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" style="fill: rgb(255, 255, 255)">
						<title>mail</title>
						<path d="M15.996 15.457l16.004-7.539v-3.918h-32v3.906zM16.004 19.879l-16.004-7.559v15.68h32v-15.656z"></path>
					</svg>
				</a>
				<a id="tel-link" href="tel:+19789306903">
					<svg class="icon icon-old-phone"><use xlink:href="#icon-old-phone"></use></svg>
					<symbol id="icon-old-phone" viewBox="0 0 20 20">
						<path d="M17.256 12.253c-0.096-0.667-0.611-1.187-1.274-1.342-2.577-0.604-3.223-2.088-3.332-3.734-0.457-0.085-1.27-0.177-2.65-0.177s-2.193 0.092-2.65 0.177c-0.109 1.646-0.755 3.13-3.332 3.734-0.663 0.156-1.178 0.675-1.274 1.342l-0.497 3.442c-0.175 1.212 0.715 2.305 1.953 2.305h11.6c1.237 0 2.128-1.093 1.953-2.305l-0.497-3.442zM10 15.492c-1.395 0-2.526-1.12-2.526-2.5s1.131-2.5 2.526-2.5 2.526 1.12 2.526 2.5-1.132 2.5-2.526 2.5zM19.95 6c-0.024-1.5-3.842-3.999-9.95-4-6.109 0.001-9.927 2.5-9.95 4s0.021 3.452 2.535 3.127c2.941-0.381 2.76-1.408 2.76-2.876 0-1.024 2.392-1.271 4.655-1.271s4.654 0.247 4.655 1.271c0 1.468-0.181 2.495 2.76 2.876 2.513 0.325 2.558-1.627 2.535-3.127z"></path>
					</symbol>
				</a>
			</div>

		</footer>

	</div>
</template>

<script>
export default {
	name: 'HelloWorld',
	props: {
		msg: String
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
:root {
	
	--main-font-color: rgba(0, 0, 0, 1) !important;
	--footer-background-color: rgb(54,54,74);

}

@keyframes pulse_animation {
	0% { transform: scale(1); }
	50% { transform: scale(1.08); }
	100% { transform: scale(1); }
}

body, 
html {

	height: 100%;
	width: 100vw;
	min-width: 250px;
	width: auto;
	overflow: hidden;
	background-color: #fff;
	font-family: 'Arial', 'Open-Sans';
	font-weight: normal;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
	-webkit-box-pack: end;
	-ms-flex-pack: end;
	justify-content: flex-end;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	margin: 0 auto;


}

#wrapper {

	height: inherit;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
	-webkit-box-flex: 1;
	-ms-flex: 1 1 auto;
	flex: 1 1 auto;

}

.title {

	font-size: 2.5em;
	color: #CC5500;
	text-transform: uppercase;
}

.title span {

	font-size: 2.25rem;

}

.stage {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	width: 100%;
}

#splash-container {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	width: 100vw;
	-webkit-box-flex: 0;
	-ms-flex: 0 1 auto;
	flex: 0 1 auto;
	overflow: scroll;
	height: 100%;
	perspective: 1000px;
	/*border: 1px solid black;*/
}

#splash-container p {
	margin: 0.25rem 1rem;
	text-align: center;
}

.info {

	font-size: 1.25em;
	line-height: 1.5em !important;

}

@media screen and (max-width: 992px){
	
	#splash-container p.title {
		font-size: 2.5rem;
	}

	#splash-container p.info {
		font-size: 1rem;
	}


}

#footer-content {

	color: white;
	font-size: 0.75rem;
	width: 100vw;
	border: none;
	background-color: transparent;
	padding: 1.25rem 0rem;
	display: none;
	/*-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;*/
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	flex: 0 1 auto;

}

#footer-content.active {

	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background-color: rgba(59,59,69, 1);
}

.social-link-wrapper {

	display: flex;
	flex-direction: row;
	align-items: center;

}

.social-link-wrapper a {

	text-decoration: none;
	display: inline-block;

}

#mail-link svg {

	height: 2em;
	width: auto;
	padding: 0em 1em;	

}

#tel-link svg {

	height: 1.5rem;
	width: 1.5rem;
	fill: white;

}

#tel-link:visited, #tel-link:hover, #tel-link:active {

	color: white;
	text-decoration: none;

}

.fade-in {
	animation: fadeIn ease 2.5s;
	-webkit-animation: fadeIn ease 2.5s;
	-moz-animation: fadeIn ease 2.5s;
	-o-animation: fadeIn ease 2.5s;
	-ms-animation: fadeIn ease 2.5s;
}

@keyframes fadeIn {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

@-moz-keyframes fadeIn {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

@-webkit-keyframes fadeIn {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

@-o-keyframes fadeIn {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

@-ms-keyframes fadeIn {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
</style>
