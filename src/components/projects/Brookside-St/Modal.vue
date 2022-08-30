<template>
  <div>
    <div class="link-modal" v-b-modal.modal-xl.modal-center @click="modalShow = !modalShow">
      <p>Brookside St - Needham, MA - 2nd Story Addition</p>
    </div>

    <b-modal hide-footer no-fade id="modal-xl modal-center" centered size="xl" title="Brookside St - Needham, MA" v-model="modalShow">
      <ProjectCarousel/>
    </b-modal>
  </div>
</template>

<script>
  import ProjectCarousel from '../../projects/Brookside-St/ProjectCarousel.vue';
  import '../../../resources/images/projects/Brookside-St-Needham-MA-2nd-Story-Addition/Brookside-Rd-Needham-MA-FrontElevation.jpg';
  import '../../../resources/images/projects/Brookside-St-Needham-MA-2nd-Story-Addition/Brookside-Rd---Needham-MA-compressed.jpg';
  import '../../../resources/images/projects/Brookside-St-Needham-MA-2nd-Story-Addition/IMG_1841.jpg';

  export default {
    name: 'BrooksideStModal',
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