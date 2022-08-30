<template>
  <div>
    <div class="link-modal winter-st" v-b-modal.modal-xl.modal-center @click="modalShow = !modalShow">
      <p>Winter St Apartments - Framingham, MA<sup>*</sup></p>
      <p><small><sup>*</sup> Work while employed at Dario Designs, Inc.</small></p>
    </div>

    <b-modal hide-footer no-fade id="modal-xl modal-center" centered size="xl" title="Winter St Apartments - Framingham, MA" v-model="modalShow">
      <ProjectCarousel/>
    </b-modal>
  </div>
</template>

<script>
  import ProjectCarousel from '../../projects/Winter-St-Apts/ProjectCarousel.vue';
  import '../../../resources/images/projects/Winter-Street-Apartment-Framingham-MA/Framigham-Rendering.jpg';
  import '../../../resources/images/projects/Winter-Street-Apartment-Framingham-MA/PXL-20210927-164710841.jpg';
  import '../../../resources/images/projects/Winter-Street-Apartment-Framingham-MA/Framingham-Existing-Conditions.jpg';

  export default {
    name: 'WinterStAptsModal',
    data() {
      return {
        modalShow: false
      }
    },
    components: {
			ProjectCarousel
		}
  }
</script>