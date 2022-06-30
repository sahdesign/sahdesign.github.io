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
                text="Interior rendering #1"
                img-src="img/Pages-from-32HighStExtension-Ashland-FinalBasementDesignPlan.jpg"
            >
            </b-carousel-slide>
            <b-carousel-slide
                text="Interior rendering #2"
                img-src="img/Pages-from-qqqq.jpg"
            ></b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script>
  export default {
    name: 'ProjectCarousel'
  }
</script>