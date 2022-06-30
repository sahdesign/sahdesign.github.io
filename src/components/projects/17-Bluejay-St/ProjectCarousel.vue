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
                text="Exterior redndering #1"
                img-src="img/Enscape-2022-06-11-14-18-25-Updated.jpg"
            >
            </b-carousel-slide>
            <b-carousel-slide
                text="Exterior redndering #2"
                img-src="img/Enscape-2022-06-12-10-23-08.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
                text="Exterior redndering #3"
                img-src="img/Enscape-2022-06-12-10-45-163-UPDATE.jpg"
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