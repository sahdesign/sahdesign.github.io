<template>
  <div>
    <VueSlickCarousel v-bind="settings">
      <div>
        <!-- <h3>1</h3> -->
        <picture>
          <img src="../resources/images/projects/1_46GlenEllenBlvd_Sandi_JeffGarfield_Built-In_Final-compressed.png" alt="">
        </picture>
      </div>
      <div>
        <!-- <h3>2</h3> -->
        <picture>
          <img src="../resources/images/projects/32HighStExtension_Ashland_FinalBasementDesignPlan-1-compressed.jpg" alt="">
        </picture>
      </div>
      <div>
        <!-- <h3>3</h3> -->
        <picture>
          <img src="../resources/images/projects/20220119_LynchLandscaping_ConceptualFloorPlan1_AdminArea-1-compressed.png" alt="">
        </picture>
      </div>
      <div>
        <!-- <h3>4</h3> -->
        <picture>
          <img src="../resources/images/projects/20220227__250MainSt_Clinton_MA_FINAL_PlanningBoardSubmission-1-compressed.jpg" alt="">
        </picture>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel';
  import 'vue-slick-carousel/dist/vue-slick-carousel.css';
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

  export default {
    name: 'MyComponent',
    components: { 
        VueSlickCarousel 
    },
    data() {
      return {
        settings: {
            "dots": true,
            "dotsClass": "slick-dots custom-dot-class",
            "edgeFriction": 0.5,
            "speed": 1000,
            "slidesToShow": 1,
            "slidesToScroll": 1,
            "arrows": true,
            "adaptiveHeight": true,
            "initialSlide": 0,
            "lazyLoad": "progressive",
            "autoplay": false,
            "autoplaySpeed": 3000,
            "cssEase": "linear"
        },
      }
    }
  }
</script>