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
                img-src="img/Enscape-2022-06-23-17-32-45.jpg"
            >
            </b-carousel-slide>
            <b-carousel-slide
                text="Exterior rendering #2"
                img-src="img/Enscape-2022-06-23-17-51-23.jpg"
            ></b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script>
  export default {
    name: 'ProjectCarousel'
  }
</script>