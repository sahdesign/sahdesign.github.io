<template>
    <div>
        <b-carousel
            id="carousel-fade"
            style="text-shadow: 0px 0px 2px #000"
            indicators
            :interval="0"
            controls
        >
            <b-carousel-slide
                text="Exterior rendering #1"
                img-src="img/Enscape-2022-05-10-14-06-00-LogoReduced.jpg"  
            ></b-carousel-slide>
            <b-carousel-slide
                text="Exterior rendering #2"
                img-src="img/Enscape-2022-05-10-14-35-Reduced.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
                text="Existing conditions"
                img-src="img/IMG-1297.jpg"
            ></b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script>
    export default {
        name: 'ProjectCarousel'
    }
</script>