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
                text="Exterior rendering"
                img-src="img/Brookside-Rd---Needham-MA-compressed.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
                text="Front Elevation"
                img-src="img/Brookside-Rd-Needham-MA-FrontElevation.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
                text="Existing conditions"
                img-src="img/IMG_1841.jpg"
            ></b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script>
  export default {
    name: 'ProjectCarousel'
  }
</script>