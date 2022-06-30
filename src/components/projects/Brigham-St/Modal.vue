<template>
  <div>
    <div class="link-modal" v-b-modal.modal-xl.modal-center @click="modalShow = !modalShow">
      <p>Brigham St - Northborough, MA - Renovation</p>
    </div>

    <b-modal hide-footer no-fade id="modal-xl modal-center" centered size="xl" title="Brigham St - Northborough, MA" v-model="modalShow">
      <ProjectCarousel/>
    </b-modal>
  </div>
</template>

<script>
  import ProjectCarousel from '../../projects/Brigham-St/ProjectCarousel.vue';
  import '../../../resources/images/projects/Brigham-St-Northborough-MA-Renovation/20200706-123805.jpg';
  import '../../../resources/images/projects/Brigham-St-Northborough-MA-Renovation/BrighamTemplate-LTqqq.jpg';

  export default {
    name: 'BrighamStModal',
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