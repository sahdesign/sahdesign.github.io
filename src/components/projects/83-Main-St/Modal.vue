<template>
  <div>
    <div class="link-modal" v-b-modal.modal-xl.modal-center @click="modalShow = !modalShow">
      <p>83 Main St - Medway, MA - Master's Touch - New Office</p>
    </div>

    <b-modal hide-footer no-fade id="modal-xl modal-center" class="74-main-st-modal" centered size="xl" title="83 Main St - Medway, MA" v-model="modalShow">
      <ProjectCarousel/>
    </b-modal>
  </div>
</template>

<script>
  import ProjectCarousel from '../../projects/83-Main-St/ProjectCarousel.vue';
  import '../../../resources/images/projects/83-Main-St-Medway-MA-New-Office/Enscape-2022-05-10-14-06-00-LogoReduced.jpg';
  import '../../../resources/images/projects/83-Main-St-Medway-MA-New-Office/Enscape-2022-05-10-14-35-Reduced.jpg';
  import '../../../resources/images/projects/83-Main-St-Medway-MA-New-Office/IMG-1297.jpg';

  export default {
    name: 'MainStModal',
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