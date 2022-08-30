<template>
  <div>
    <div class="link-modal" v-b-modal.modal-xl.modal-center @click="modalShow = !modalShow">
      <p>Millwork Design</p>
    </div>

    <b-modal hide-footer no-fade id="modal-xl modal-center" centered size="xl" title="Millwork Design" v-model="modalShow">
      <ProjectCarousel/>
    </b-modal>
  </div>
</template>

<script>
  import ProjectCarousel from '../../projects/Millwork-Design/ProjectCarousel.vue';
  import '../../../resources/images/projects/Millwork-Design/Millwork_Millis_Ma.jpg';
  import '../../../resources/images/projects/Millwork-Design/Millwork_Needham_ConceptualDesign.jpg';
  import '../../../resources/images/projects/Millwork-Design/Millwork_Needham_Final_compressed.jpg';
  import '../../../resources/images/projects/Millwork-Design/Stove-Hood-Rendering---Residence.jpg';

  export default {
    name: 'MillworkDesignModal',
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