<template>
  <div>
    <div class="link-modal" v-b-modal.modal-xl.modal-center @click="modalShow = !modalShow">
      <p>250 Main St - Clinton, MA - 3-Story Apartment Design</p>
    </div>

    <b-modal hide-footer no-fade id="modal-xl modal-center" class="250-main-st-modal" centered size="xl" title="250 Main St - Clinton, MA" v-model="modalShow">
      <ProjectCarousel/>
    </b-modal>
  </div>
</template>

<script>
  import ProjectCarousel from '../../projects/250-Main-St/ProjectCarousel.vue';
  import '../../../resources/images/projects/250-Main-St-3-Story-Apartment-Design-Clinton-MA/IMG-1076.jpg';
  import '../../../resources/images/projects/250-Main-St-3-Story-Apartment-Design-Clinton-MA/The-Circle-AT-Coachplace-final.jpg';

  export default {
    name: 'MainSt2Modal',
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