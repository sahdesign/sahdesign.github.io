<template>
  <div>
    <div class="link-modal" v-b-modal.modal-xl.modal-center @click="modalShow = !modalShow">
      <p>48 Monument Sq - Concord, MA - Concord Inn Porch Addition Design</p>
    </div>

    <b-modal hide-footer no-fade id="modal-xl modal-center" centered size="xl" title="48 Monument Sq - Concord, MA" v-model="modalShow">
      <ProjectCarousel/>
    </b-modal>
  </div>
</template>

<script>
  import ProjectCarousel from '../../projects/48-Monument-Sq/ProjectCarousel.vue';
  import '../../../resources/images/projects/Concords-Colonial-Inn-48-Monument-Square-Concord-Inn-MA-Porch-Addition-Design/48-Monument-Square-Concord-Ma.jpg';
  import '../../../resources/images/projects/Concords-Colonial-Inn-48-Monument-Square-Concord-Inn-MA-Porch-Addition-Design/IMG-1709.jpg';
  import '../../../resources/images/projects/Concords-Colonial-Inn-48-Monument-Square-Concord-Inn-MA-Porch-Addition-Design/Concord-Inn-compressed.jpg';

  export default {
    name: 'ConcordModal',
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