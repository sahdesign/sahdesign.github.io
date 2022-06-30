<template>
  <div>
    <div class="link-modal" v-b-modal.modal-xl.modal-center @click="modalShow = !modalShow">
      <!-- <picture>
        <img src="https://picsum.photos/1024/480/?image=10" alt="">
      </picture> -->
      <p>17 Blue Jay St - Franklin, MA - 48' x 72' Garage</p>
    </div>

    <b-modal hide-footer no-fade id="modal-xl modal-center" centered size="xl" title="17 Blue Jay St - Franklin, MA" v-model="modalShow">
      <ProjectCarousel/>
    </b-modal>
  </div>
</template>

<script>
  import ProjectCarousel from '../../projects/17-Bluejay-St/ProjectCarousel.vue';
  import '../../../resources/images/projects/17-Blue-Jay-St-Franklin-MA-48-x-72-Garage/Enscape-2022-06-11-14-18-25-Updated.jpg';
  import '../../../resources/images/projects/17-Blue-Jay-St-Franklin-MA-48-x-72-Garage/Enscape-2022-06-12-10-23-08.jpg';
  import '../../../resources/images/projects/17-Blue-Jay-St-Franklin-MA-48-x-72-Garage/Enscape-2022-06-12-10-45-163-UPDATE.jpg';

  export default {
    name: 'BluejayStModal',
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