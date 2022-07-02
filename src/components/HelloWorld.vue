<template>
	<div id="wrapper" class="">
		<div id="nav-wrapper">
			<nav id="main-navigation">
				<div id="logo-container">
					<picture>
						<img :src="bannerImg" alt="">
					</picture>
					<h1 style="visibility: hidden; width: 0; height: 0;">SAH DESIGN</h1>

				</div>
				<ul class="nav-links">
					<li class="nav-item" id="nav-item-1">
						<a href="#about">About</a>
					</li>
					<li class="nav-item" id="nav-item-2">
						<a href="#services">Services</a>
					</li>
					<li class="nav-item" id="nav-item-3">
						<a href="#portfolio">Portfolio</a>
					</li>
					<li class="nav-item" id="nav-item-4">
						<a href="#resume">Resume</a>
					</li>
					<li class="nav-item" id="nav-item-5"> 
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</nav>
		</div>

		<div id="hero-img-container">
			<HeroCarousel/>
		</div>

		<div id="main-content">
			<div id="about" class="anchor">
				<h2>About Us</h2>
				<div>
					<p>SAH Design, LLC located in Holliston, MA offers services with Residential, Commercial, and Millwork design from initial concept to completion.. We take on many different projects and consider no project too small.</p>
				</div>
			</div>
			<div id="services" class="anchor">
				<h2>Services</h2>
				<div>
					<b-container fluid class="">
						<p>SAH provides the following services:</p>
						<b-row class="mt-3 mb-0">
							<b-col class="px-3 py-3 mr-sm-0 mr-md-3">
								<p><u>Residential</u></p>
								<ul class="pl-3">
									<li>Design services from conceptual to construction documents</li>
									<li>Single family custom homes</li>
									<li>Addition/renovation/remodeling planning and design</li>
									<li>Existing condition surveys and as-built drawings</li>
									<li>Built in – Millwork Design</li>
									<li>3D Renderings</li>
									<li>Design Studies</li>
								</ul>
							</b-col>
							<b-col class="px-3 py-3">
								<p><u>Commercial</u></p>
								<ul class="pl-3">
									<li>Retail/Mixed Use/ Apartments/Business</li>
									<li>Design services from conceptual to construction documents</li>
									<li>Lease Outline Documents</li>
									<li>Existing condition surveys and as-built drawings</li>
									<li>3D Renderings</li>
									<li>Design Studies</li>
								</ul>
							</b-col>
						</b-row>
						<div class="divider mb-4"></div>
						<b-row>
							<b-col>
								<h5>Initial Meet &amp; Greet</h5>
								<p>A meeting will be set-up to discuss the overall project objectives and expectations.</p>
								<p>After the initial meeting, a proposal for Design services will be sent to you. After approval, we will move forward to the next phase as required.</p>
								<h5>Existing Conditions</h5>
								<p>This phase involves taking measurements of the existing conditions to allow schematic design/Design Development to take place.</p>
								<h5>Design</h5>
								<p>During this phase an initial layout will be developed/ fine tuned to a final design of your liking. This will include floor/roof plans, elevations, conceptual details, and 3D Renderings as required to your satisfaction. Structure, materials, fixtures, finishes will be discussed during this phase and allow us to move onto to the Construction Document phase. Once your approval has been given than we will move onto the Construction Document phase.</p>
								<h5>Construction Documents/Permit Phase</h5>
								<p>Once the design is finalized, the construction documents will be prepared. If the specific project requires Permit drawings these will be prepared and submitted to the town building department for approval. Decisions about final materials/finishes are still in motion until Drawings are completed.</p>
								<p>Once the Construction Documents/Permit phase is complete SAH Design, LLC will assist hiring a builder and answering any additional questions.</p>
								<h5>Construction Administration</h5>
								<p>Depending on the project this phase will include visiting the site, assisting with Construction questions, and answering any questions until the jobs completion.</p>
								<h5>Design Studies</h5>
								<p>If you are unsure about taking on a project with fulls scope of services, SAH Design, LLC offers studies to allow you to make a decision to move forward.</p>
							</b-col>
						</b-row>
					</b-container>
				</div>
			</div>
			<div id="portfolio" class="anchor">
				<h2>Portfolio</h2>
				<div class="container-fluid">
					<MainStModal/>
					<MainSt2Modal/>
					<WilsonRdModal/>
					<BluejayStModal/>
					<CausewayStModal/>
					<!-- <BrighamStModal/> -->
					<HighStExtModal/>
					<WinterStAptsModal/>
					<ConcordModal/>
				</div>
				<!-- <ProjectGrid/> -->
			</div>
			<div id="resume" class="anchor">
				<h2>Resume</h2>
				<div>
					<p>As a lifelong resident of Holliston, MA,  Seth's love for design has evolved over the years with a hands on approach. His knowledge both in the field and the office has been a key asset that gives him a big picture perspective.  While not working he enjoys spending time with his family, friends, and fiancee'. Seth is an avid endurance athlete who is a passionate participant of  triathlons, hiking, and running.</p>

					<div class="pdf-link-wrapper">
						<strong><a class="resume-link" :href="sethResume">Download</a></strong>
						<div class="pdf-icon">
							<svg
								xmlns:dc="http://purl.org/dc/elements/1.1/"
								xmlns:cc="http://creativecommons.org/ns#"
								xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
								xmlns:svg="http://www.w3.org/2000/svg"
								xmlns="http://www.w3.org/2000/svg"
								xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
								xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
								width="75.320129mm"
								height="92.604164mm"
								viewBox="0 0 75.320129 92.604164"
								version="1.1"
								id="svg8"
								inkscape:version="0.92.3 (2405546, 2018-03-11)"
								sodipodi:docname="PDF file icon.svg">
								<title
									id="title2682">PDF file icon</title>
								<defs
									id="defs2">
									<clipPath
									clipPathUnits="userSpaceOnUse"
									id="clipPath839">
									<rect
										style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:fill markers stroke"
										id="rect841"
										width="68.688263"
										height="67.886459"
										x="-74.033661"
										y="141.44913" />
									</clipPath>
								</defs>
								<g
									inkscape:label="Capa 1"
									inkscape:groupmode="layer"
									id="layer1"
									transform="translate(36.076172,-93.731774)">
									<g
									id="g899"
									transform="matrix(1.4843054,0,0,1.4843054,17.471885,-90.243502)">
									<g
										id="g876">
										<path
										inkscape:connector-curvature="0"
										style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill:#ff2116;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:2.11666656;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:markers fill stroke;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
										d="m -29.632812,123.94727 c -3.551967,0 -6.44336,2.89347 -6.44336,6.44531 v 49.49804 c 0,3.55185 2.891393,6.44532 6.44336,6.44532 H 8.2167969 c 3.5519661,0 6.4433591,-2.89335 6.4433591,-6.44532 v -40.70117 c 0,0 0.101353,-1.19181 -0.416015,-2.35156 -0.484969,-1.08711 -1.275391,-1.84375 -1.275391,-1.84375 a 1.0584391,1.0584391 0 0 0 -0.0059,-0.008 L 3.5722246,125.7752 a 1.0584391,1.0584391 0 0 0 -0.015625,-0.0156 c 0,0 -0.8017392,-0.76344 -1.9902344,-1.27344 -1.39939552,-0.6005 -2.8417968,-0.53711 -2.8417968,-0.53711 l 0.021484,-0.002 z"
										id="path890" />
										<path
										inkscape:connector-curvature="0"
										style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill:#f5f5f5;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:2.11666656;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:markers fill stroke;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
										d="m -29.632812,126.06445 h 28.3789058 a 1.0584391,1.0584391 0 0 0 0.021484,0 c 0,0 1.13480448,0.011 1.96484378,0.36719 0.79889772,0.34282 1.36536982,0.86176 1.36914062,0.86524 1.25e-5,1e-5 0.00391,0.004 0.00391,0.004 l 9.3671868,9.18945 c 0,0 0.564354,0.59582 0.837891,1.20899 0.220779,0.49491 0.234375,1.40039 0.234375,1.40039 a 1.0584391,1.0584391 0 0 0 -0.002,0.0449 v 40.74609 c 0,2.41592 -1.910258,4.32813 -4.3261717,4.32813 H -29.632812 c -2.415914,0 -4.326172,-1.91209 -4.326172,-4.32813 v -49.49804 c 0,-2.41603 1.910258,-4.32813 4.326172,-4.32813 z"
										id="rect2684" />
										<path
										sodipodi:nodetypes="scccscccscccccssscacccsccccccccccccccccccccaccccccccc"
										inkscape:connector-curvature="0"
										d="m -23.40766,161.09299 c -1.45669,-1.45669 0.11934,-3.45839 4.39648,-5.58397 l 2.69124,-1.33743 1.04845,-2.29399 c 0.57665,-1.26169 1.43729,-3.32036 1.91254,-4.5748 l 0.8641,-2.28082 -0.59546,-1.68793 c -0.73217,-2.07547 -0.99326,-5.19438 -0.52872,-6.31588 0.62923,-1.51909 2.69029,-1.36323 3.50626,0.26515 0.63727,1.27176 0.57212,3.57488 -0.18329,6.47946 l -0.6193,2.38125 0.5455,0.92604 c 0.30003,0.50932 1.1764,1.71867 1.9475,2.68743 l 1.44924,1.80272 1.8033728,-0.23533 c 5.72900399,-0.74758 7.6912472,0.523 7.6912472,2.34476 0,2.29921 -4.4984914,2.48899 -8.2760865,-0.16423 -0.8499666,-0.59698 -1.4336605,-1.19001 -1.4336605,-1.19001 0,0 -2.3665326,0.48178 -3.531704,0.79583 -1.202707,0.32417 -1.80274,0.52719 -3.564509,1.12186 0,0 -0.61814,0.89767 -1.02094,1.55026 -1.49858,2.4279 -3.24833,4.43998 -4.49793,5.1723 -1.3991,0.81993 -2.86584,0.87582 -3.60433,0.13733 z m 2.28605,-0.81668 c 0.81883,-0.50607 2.47616,-2.46625 3.62341,-4.28553 l 0.46449,-0.73658 -2.11497,1.06339 c -3.26655,1.64239 -4.76093,3.19033 -3.98386,4.12664 0.43653,0.52598 0.95874,0.48237 2.01093,-0.16792 z m 21.21809,-5.95578 c 0.80089,-0.56097 0.68463,-1.69142 -0.22082,-2.1472 -0.70466,-0.35471 -1.2726074,-0.42759 -3.1031574,-0.40057 -1.1249,0.0767 -2.9337647,0.3034 -3.2403347,0.37237 0,0 0.993716,0.68678 1.434896,0.93922 0.58731,0.33544 2.0145161,0.95811 3.0565161,1.27706 1.02785,0.31461 1.6224,0.28144 2.0729,-0.0409 z m -8.53152,-3.54594 c -0.4847,-0.50952 -1.30889,-1.57296 -1.83152,-2.3632 -0.68353,-0.89643 -1.02629,-1.52887 -1.02629,-1.52887 0,0 -0.4996,1.60694 -0.90948,2.57394 l -1.27876,3.16076 -0.37075,0.71695 c 0,0 1.971043,-0.64627 2.97389,-0.90822 1.0621668,-0.27744 3.21787,-0.70134 3.21787,-0.70134 z m -2.74938,-11.02573 c 0.12363,-1.0375 0.1761,-2.07346 -0.15724,-2.59587 -0.9246,-1.01077 -2.04057,-0.16787 -1.85154,2.23517 0.0636,0.8084 0.26443,2.19033 0.53292,3.04209 l 0.48817,1.54863 0.34358,-1.16638 c 0.18897,-0.64151 0.47882,-2.02015 0.64411,-3.06364 z"
										style="fill:#ff2116;fill-opacity:1;stroke-width:0.26458335"
										id="path2697" />
										<g
										id="g858">
										<path
											inkscape:connector-curvature="0"
											id="path845"
											style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:125%;font-family:'Franklin Gothic Medium Cond';-inkscape-font-specification:'Franklin Gothic Medium Cond';letter-spacing:0px;word-spacing:4.26000023px;fill:#2c2c2c;fill-opacity:1;stroke:none;stroke-width:0.35824656px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
											d="m -20.930423,167.83862 h 2.364986 q 1.133514,0 1.840213,0.2169 0.706698,0.20991 1.189489,0.9446 0.482795,0.72769 0.482795,1.75625 0,0.94459 -0.391832,1.6233 -0.391833,0.67871 -1.056548,0.97958 -0.65772,0.30087 -2.02913,0.30087 h -0.818651 v 3.72941 h -1.581322 z m 1.581322,1.22447 v 3.33058 h 0.783664 q 1.049552,0 1.44838,-0.39184 0.405826,-0.39183 0.405826,-1.27345 0,-0.65772 -0.265887,-1.06355 -0.265884,-0.41282 -0.587747,-0.50378 -0.314866,-0.098 -1.000572,-0.098 z" />
										<path
											inkscape:connector-curvature="0"
											id="path847"
											style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:125%;font-family:'Franklin Gothic Medium Cond';-inkscape-font-specification:'Franklin Gothic Medium Cond';letter-spacing:0px;word-spacing:4.26000023px;fill:#2c2c2c;fill-opacity:1;stroke:none;stroke-width:0.35824656px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
											d="m -13.842461,167.83862 h 2.148082 q 1.560333,0 2.4909318,0.55276 0.9375993,0.55276 1.4133973,1.6443 0.482791,1.09153 0.482791,2.42096 0,1.3994 -0.4338151,2.49793 -0.4268149,1.09153 -1.3154348,1.76324 -0.8816233,0.67172 -2.5189212,0.67172 h -2.267031 z m 1.581326,1.26645 v 7.018 h 0.657715 q 1.378411,0 2.001144,-0.9516 0.6227329,-0.95858 0.6227329,-2.5539 0,-3.5125 -2.6238769,-3.5125 z" />
										<path
											inkscape:connector-curvature="0"
											id="path849"
											style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:125%;font-family:'Franklin Gothic Medium Cond';-inkscape-font-specification:'Franklin Gothic Medium Cond';letter-spacing:0px;word-spacing:4.26000023px;fill:#2c2c2c;fill-opacity:1;stroke:none;stroke-width:0.35824656px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
											d="m -5.7889096,167.83862 h 5.30372941 v 1.26645 H -4.2075842 v 2.85478 h 2.9807225 v 1.26646 h -2.9807225 v 4.16322 h -1.5813254 z" />
										</g>
									</g>
									</g>
								</g>
							</svg>
							<p class="doc-type"><em>(PDF)</em></p>
						</div>
					</div>
					<div class="pdf-link-wrapper">
						<strong><a class="current-work-link" :href="currentWork">Current work</a></strong>
						<div class="pdf-icon">
							<svg
								xmlns:dc="http://purl.org/dc/elements/1.1/"
								xmlns:cc="http://creativecommons.org/ns#"
								xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
								xmlns:svg="http://www.w3.org/2000/svg"
								xmlns="http://www.w3.org/2000/svg"
								xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
								xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
								width="75.320129mm"
								height="92.604164mm"
								viewBox="0 0 75.320129 92.604164"
								version="1.1"
								id="svg8"
								inkscape:version="0.92.3 (2405546, 2018-03-11)"
								sodipodi:docname="PDF file icon.svg">
								<title
									id="title2682">PDF file icon</title>
								<defs
									id="defs2">
									<clipPath
									clipPathUnits="userSpaceOnUse"
									id="clipPath839">
									<rect
										style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:fill markers stroke"
										id="rect841"
										width="68.688263"
										height="67.886459"
										x="-74.033661"
										y="141.44913" />
									</clipPath>
								</defs>
								<g
									inkscape:label="Capa 1"
									inkscape:groupmode="layer"
									id="layer1"
									transform="translate(36.076172,-93.731774)">
									<g
									id="g899"
									transform="matrix(1.4843054,0,0,1.4843054,17.471885,-90.243502)">
									<g
										id="g876">
										<path
										inkscape:connector-curvature="0"
										style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill:#ff2116;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:2.11666656;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:markers fill stroke;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
										d="m -29.632812,123.94727 c -3.551967,0 -6.44336,2.89347 -6.44336,6.44531 v 49.49804 c 0,3.55185 2.891393,6.44532 6.44336,6.44532 H 8.2167969 c 3.5519661,0 6.4433591,-2.89335 6.4433591,-6.44532 v -40.70117 c 0,0 0.101353,-1.19181 -0.416015,-2.35156 -0.484969,-1.08711 -1.275391,-1.84375 -1.275391,-1.84375 a 1.0584391,1.0584391 0 0 0 -0.0059,-0.008 L 3.5722246,125.7752 a 1.0584391,1.0584391 0 0 0 -0.015625,-0.0156 c 0,0 -0.8017392,-0.76344 -1.9902344,-1.27344 -1.39939552,-0.6005 -2.8417968,-0.53711 -2.8417968,-0.53711 l 0.021484,-0.002 z"
										id="path890" />
										<path
										inkscape:connector-curvature="0"
										style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill:#f5f5f5;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:2.11666656;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:markers fill stroke;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
										d="m -29.632812,126.06445 h 28.3789058 a 1.0584391,1.0584391 0 0 0 0.021484,0 c 0,0 1.13480448,0.011 1.96484378,0.36719 0.79889772,0.34282 1.36536982,0.86176 1.36914062,0.86524 1.25e-5,1e-5 0.00391,0.004 0.00391,0.004 l 9.3671868,9.18945 c 0,0 0.564354,0.59582 0.837891,1.20899 0.220779,0.49491 0.234375,1.40039 0.234375,1.40039 a 1.0584391,1.0584391 0 0 0 -0.002,0.0449 v 40.74609 c 0,2.41592 -1.910258,4.32813 -4.3261717,4.32813 H -29.632812 c -2.415914,0 -4.326172,-1.91209 -4.326172,-4.32813 v -49.49804 c 0,-2.41603 1.910258,-4.32813 4.326172,-4.32813 z"
										id="rect2684" />
										<path
										sodipodi:nodetypes="scccscccscccccssscacccsccccccccccccccccccccaccccccccc"
										inkscape:connector-curvature="0"
										d="m -23.40766,161.09299 c -1.45669,-1.45669 0.11934,-3.45839 4.39648,-5.58397 l 2.69124,-1.33743 1.04845,-2.29399 c 0.57665,-1.26169 1.43729,-3.32036 1.91254,-4.5748 l 0.8641,-2.28082 -0.59546,-1.68793 c -0.73217,-2.07547 -0.99326,-5.19438 -0.52872,-6.31588 0.62923,-1.51909 2.69029,-1.36323 3.50626,0.26515 0.63727,1.27176 0.57212,3.57488 -0.18329,6.47946 l -0.6193,2.38125 0.5455,0.92604 c 0.30003,0.50932 1.1764,1.71867 1.9475,2.68743 l 1.44924,1.80272 1.8033728,-0.23533 c 5.72900399,-0.74758 7.6912472,0.523 7.6912472,2.34476 0,2.29921 -4.4984914,2.48899 -8.2760865,-0.16423 -0.8499666,-0.59698 -1.4336605,-1.19001 -1.4336605,-1.19001 0,0 -2.3665326,0.48178 -3.531704,0.79583 -1.202707,0.32417 -1.80274,0.52719 -3.564509,1.12186 0,0 -0.61814,0.89767 -1.02094,1.55026 -1.49858,2.4279 -3.24833,4.43998 -4.49793,5.1723 -1.3991,0.81993 -2.86584,0.87582 -3.60433,0.13733 z m 2.28605,-0.81668 c 0.81883,-0.50607 2.47616,-2.46625 3.62341,-4.28553 l 0.46449,-0.73658 -2.11497,1.06339 c -3.26655,1.64239 -4.76093,3.19033 -3.98386,4.12664 0.43653,0.52598 0.95874,0.48237 2.01093,-0.16792 z m 21.21809,-5.95578 c 0.80089,-0.56097 0.68463,-1.69142 -0.22082,-2.1472 -0.70466,-0.35471 -1.2726074,-0.42759 -3.1031574,-0.40057 -1.1249,0.0767 -2.9337647,0.3034 -3.2403347,0.37237 0,0 0.993716,0.68678 1.434896,0.93922 0.58731,0.33544 2.0145161,0.95811 3.0565161,1.27706 1.02785,0.31461 1.6224,0.28144 2.0729,-0.0409 z m -8.53152,-3.54594 c -0.4847,-0.50952 -1.30889,-1.57296 -1.83152,-2.3632 -0.68353,-0.89643 -1.02629,-1.52887 -1.02629,-1.52887 0,0 -0.4996,1.60694 -0.90948,2.57394 l -1.27876,3.16076 -0.37075,0.71695 c 0,0 1.971043,-0.64627 2.97389,-0.90822 1.0621668,-0.27744 3.21787,-0.70134 3.21787,-0.70134 z m -2.74938,-11.02573 c 0.12363,-1.0375 0.1761,-2.07346 -0.15724,-2.59587 -0.9246,-1.01077 -2.04057,-0.16787 -1.85154,2.23517 0.0636,0.8084 0.26443,2.19033 0.53292,3.04209 l 0.48817,1.54863 0.34358,-1.16638 c 0.18897,-0.64151 0.47882,-2.02015 0.64411,-3.06364 z"
										style="fill:#ff2116;fill-opacity:1;stroke-width:0.26458335"
										id="path2697" />
										<g
										id="g858">
										<path
											inkscape:connector-curvature="0"
											id="path845"
											style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:125%;font-family:'Franklin Gothic Medium Cond';-inkscape-font-specification:'Franklin Gothic Medium Cond';letter-spacing:0px;word-spacing:4.26000023px;fill:#2c2c2c;fill-opacity:1;stroke:none;stroke-width:0.35824656px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
											d="m -20.930423,167.83862 h 2.364986 q 1.133514,0 1.840213,0.2169 0.706698,0.20991 1.189489,0.9446 0.482795,0.72769 0.482795,1.75625 0,0.94459 -0.391832,1.6233 -0.391833,0.67871 -1.056548,0.97958 -0.65772,0.30087 -2.02913,0.30087 h -0.818651 v 3.72941 h -1.581322 z m 1.581322,1.22447 v 3.33058 h 0.783664 q 1.049552,0 1.44838,-0.39184 0.405826,-0.39183 0.405826,-1.27345 0,-0.65772 -0.265887,-1.06355 -0.265884,-0.41282 -0.587747,-0.50378 -0.314866,-0.098 -1.000572,-0.098 z" />
										<path
											inkscape:connector-curvature="0"
											id="path847"
											style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:125%;font-family:'Franklin Gothic Medium Cond';-inkscape-font-specification:'Franklin Gothic Medium Cond';letter-spacing:0px;word-spacing:4.26000023px;fill:#2c2c2c;fill-opacity:1;stroke:none;stroke-width:0.35824656px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
											d="m -13.842461,167.83862 h 2.148082 q 1.560333,0 2.4909318,0.55276 0.9375993,0.55276 1.4133973,1.6443 0.482791,1.09153 0.482791,2.42096 0,1.3994 -0.4338151,2.49793 -0.4268149,1.09153 -1.3154348,1.76324 -0.8816233,0.67172 -2.5189212,0.67172 h -2.267031 z m 1.581326,1.26645 v 7.018 h 0.657715 q 1.378411,0 2.001144,-0.9516 0.6227329,-0.95858 0.6227329,-2.5539 0,-3.5125 -2.6238769,-3.5125 z" />
										<path
											inkscape:connector-curvature="0"
											id="path849"
											style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:125%;font-family:'Franklin Gothic Medium Cond';-inkscape-font-specification:'Franklin Gothic Medium Cond';letter-spacing:0px;word-spacing:4.26000023px;fill:#2c2c2c;fill-opacity:1;stroke:none;stroke-width:0.35824656px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
											d="m -5.7889096,167.83862 h 5.30372941 v 1.26645 H -4.2075842 v 2.85478 h 2.9807225 v 1.26646 h -2.9807225 v 4.16322 h -1.5813254 z" />
										</g>
									</g>
									</g>
								</g>
							</svg>
							<p class="doc-type"><em>(PDF)</em></p>
						</div>
					</div>
				</div>
			</div>
			<div id="contact" class="anchor">
				<h2>Contact</h2>
				<div class="profile">
					<div id="profile-pic"></div>
					<div class="">
						<p>Seth Holden founded SAH Design, LLC in April 2021. With over 20 years of experience in Residential Construction/Cabinet Making, and 14 years in Commercial work, he understands the working relationship between client, contractor, and many different trades for a successful project.</p>
						<ul style="list-style-type: none; padding: 0;margin: 0;">
							<li>We are located at:</li>
							<li>351 Concord St</li>
							<li>Suite #2</li>
							<li>Hollistion, Ma 01746</li>
						</ul>
					</div>
				</div>
				<!-- <div class="contact-address">
					
				</div> -->
				<div class="contact-form">
					<iframe style="width: 100%; margin: 3em 0; display: flex;" src="https://docs.google.com/forms/d/e/1FAIpQLSf0xCyhVn79DlwIPHC7utKXx8kPp1uq8bLNWFwtA0rOrJy4ug/viewform?embedded=true" width="640" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
				</div>
			</div>
		</div>

		<footer id="footer-content" class="active">

			<p id="copy-date">SAH Design, LLC&nbsp;<span>&copy;&nbsp;</span>2022</p>

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
	// import MobileNav from './MobileNav.vue';
	import HeroCarousel from './HeroCarousel.vue';
	// import ProjectGrid from './ProjectGrid.vue';
	import MainSt2Modal from './projects/250-Main-St/Modal.vue'; 
	import MainStModal from './projects/74-Main-St/Modal.vue'; 
	import WilsonRdModal from './projects/6-Wilson-Rd/Modal.vue'; 
	import BluejayStModal from './projects/17-Bluejay-St/Modal.vue';
	import CausewayStModal from './projects/200-Causeway-St/Modal.vue';
	// import BrighamStModal from './projects/Brigham-St/Modal.vue';
	import HighStExtModal from './projects/High-St-Ext/Modal.vue';
	import WinterStAptsModal from './projects/Winter-St-Apts/Modal.vue';
	import ConcordModal from './projects/48-Monument-Sq/Modal.vue';

	import bannerImg from '../resources/images/logos/SAH-Design-Logo-full.png';
	import sethResume from '../resources/documents/Seth-Holden-Resume-2022-Current.pdf';
	import currentWork from '../resources/documents/20220608-SAH-Design-Current-Work.pdf';


	export default {
		name: 'HelloWorld',
		props: {
			msg: String
		},
		components: {
			// MobileNav,
			MainStModal,
			MainSt2Modal,
			WilsonRdModal,
			BluejayStModal,
			CausewayStModal,
			// BrighamStModal,
			HighStExtModal,
			WinterStAptsModal,
			ConcordModal,
			// ProjectGrid,
			HeroCarousel
		},
		data: function () {
            return {
                bannerImg: bannerImg,
				sethResume: sethResume,
				currentWork: currentWork
            }
        }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"></style>
