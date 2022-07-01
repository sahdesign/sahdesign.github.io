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
                img-src="img/Framigham-Rendering.jpg"
            >
            </b-carousel-slide>
            <b-carousel-slide
                text="Existing conditions"
                img-src="img/PXL-20210927-164710841.jpg"
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