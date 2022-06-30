<template>
  <div>
    <div class="link-modal" v-b-modal.modal-xl.modal-center @click="modalShow = !modalShow">
      <p>High St Extension - Ashland, MA - Basement Renovation</p>
    </div>

    <b-modal hide-footer no-fade id="modal-xl modal-center" centered size="xl" title="High St Extension - Ashland, MA" v-model="modalShow">
      <ProjectCarousel/>
    </b-modal>
  </div>
</template>

<script>
  import ProjectCarousel from '../../projects/High-St-Ext/ProjectCarousel.vue';
  import '../../../resources/images/projects/High-St-Extension-Ashland-MA-Basement-Renovation/Pages-from-32HighStExtension-Ashland-FinalBasementDesignPlan.jpg';
  import '../../../resources/images/projects/High-St-Extension-Ashland-MA-Basement-Renovation/Pages-from-qqqq.jpg';

  export default {
    name: 'HighStExtModal',
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