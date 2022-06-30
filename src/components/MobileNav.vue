<template v-if="mobile">
  <b-navbar toggleable type="light" variant="light">
    <b-navbar-brand href="#" id="logo-container-mobile"> 
        <div>
            <picture>
                <img src="../resources/images/logos/SAH-Design-Logo.png" alt="">
            </picture>
        </div>
    </b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="x"></b-icon>
        <b-icon v-else icon="list"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">Link 1</b-nav-item>
        <b-nav-item href="#">Link 2</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
  export default {
    name: 'MobileNav'
  }
  
</script>