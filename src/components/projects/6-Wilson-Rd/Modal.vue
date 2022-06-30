<template>
  <div>
    <div class="link-modal" v-b-modal.modal-xl.modal-center @click="modalShow = !modalShow">

      <p>6 Wilson Rd - Northborough, MA - Exterior Re-model</p>
    </div>

    <b-modal hide-footer no-fade id="modal-xl modal-center" class="6-wilson-rd-modal" centered size="xl" title="6 Wilson Rd - Northborough, MA" v-model="modalShow">
      <WilsonRdProjectCarousel/>
    </b-modal>
  </div>
</template>

<script>
  import WilsonRdProjectCarousel from './ProjectCarousel.vue';
    import '../../../resources/images/projects/6-Wilson-Rd-Northborough-MA-Exterior-Remodel/Enscape-2022-06-23-17-32-45.jpg';
  import '../../../resources/images/projects/6-Wilson-Rd-Northborough-MA-Exterior-Remodel/Enscape-2022-06-23-17-51-23.jpg';

  export default {
    name: 'WilsonRdModal',
    data() {
      return {
        modalShow: false
      }
    },
    components: {
			WilsonRdProjectCarousel
		}
  }
</script>