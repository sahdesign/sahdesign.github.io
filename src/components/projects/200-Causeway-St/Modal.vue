<template>
  <div>
    <div class="link-modal" v-b-modal.modal-xl.modal-center @click="modalShow = !modalShow">
      <p>200 Causeway St - Millis, MA - Relocated Post &amp; Beam Barn</p>
    </div>

    <b-modal hide-footer no-fade id="modal-xl modal-center" centered size="xl" title="200 Causeway St - Millis, MA" v-model="modalShow">
      <ProjectCarousel/>
    </b-modal>
  </div>
</template>

<script>
  import ProjectCarousel from '../../projects/200-Causeway-St/ProjectCarousel.vue';
  import '../../../resources/images/projects/200-Causeway-St-Millis-MA-Relocated-Post-and-Beam-Barn/Enscape-2021-08-14-12-08-07.jpg';
  import '../../../resources/images/projects/200-Causeway-St-Millis-MA-Relocated-Post-and-Beam-Barn/IMG-0105.jpg';
  import '../../../resources/images/projects/200-Causeway-St-Millis-MA-Relocated-Post-and-Beam-Barn/PXL-20220529-162207396-Original.jpg';

  export default {
    name: 'CausewayStModal',
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