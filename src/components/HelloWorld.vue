<template>

	<div id="wrapper">
		
		<div id="splash-container">

			<div id="splash-copy-wrapper">

				<div class="front">
					
					<p class="title">SAH Design</p>
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
				<a id="tel-link" href="tel:+19789306903">978.930.6903</a>
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

#tel-link {

	font-size: 0.75rem;
	color: white;
	text-decoration: none;

}

#tel-link:visited, #tel-link:hover, #tel-link:active {

	color: white;
	text-decoration: none;

}

</style>
