<template>
    <div>
        <b-carousel
            id="carousel-fade"
            style="text-shadow: 0px 0px 2px #000"
            indicators
            :interval="0"
            controls
        >
        <v-if>
            <b-carousel-slide
                text="Exterior rendering #1"
                img-src="img/Enscape-2021-08-14-12-08-07.jpg"
            >
            </b-carousel-slide>
            <b-carousel-slide
                text="Exterior perspective sketch"
                img-src="img/IMG-0105.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
                text="Job site (In progress)"
                img-src="img/PXL-20220529-162207396-Original.jpg"
            ></b-carousel-slide>
        </v-if>
        </b-carousel>
    </div>
</template>

<script>
  export default {
    name: 'ProjectCarousel'
  }
</script>