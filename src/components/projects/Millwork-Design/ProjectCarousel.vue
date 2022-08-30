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
                text="Millis, MA - Finished Conditions"
            >
                <template #img>
                    <img
                        class="mx-auto fit-contain"
                        src="img/Millwork_Millis_Ma.jpg"
                    >
                </template>
            </b-carousel-slide>
            <b-carousel-slide
                text="Needham, MA - Conceptual Design"
            >
                <template #img>
                    <img
                        class="mx-auto fit-contain"
                        src="img/Millwork_Needham_ConceptualDesign.jpg"
                    >
                </template>
            </b-carousel-slide>
            <b-carousel-slide
                text="Needham, MA - Finished Conditions"
                img-src="img/Millwork_Needham_Final_compressed.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
                text="Stove Hood Rendering - Private Residence"
            >
                <template #img>
                    <img
                        class="mx-auto fit-contain"
                        src="img/Stove-Hood-Rendering---Residence.jpg"
                    >
                </template>
            </b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script>
  export default {
    name: 'ProjectCarousel'
  }
</script>