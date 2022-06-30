<template>
    <b-container class="bv-example-row outline">
        <!-- Stack the columns on mobile by making one full-width and the other half-width -->
        <b-row>
            <b-col cols="6" md="4">project 1</b-col>
            <b-col cols="6" md="4">project 2</b-col>
            <b-col cols="6" md="4">project 3</b-col>
        </b-row>

        <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
        <b-row>
            <b-col cols="6" md="4">project 4</b-col>
            <b-col cols="6" md="4">project 5</b-col>
            <b-col cols="6" md="4">project 6</b-col>
        </b-row>
    </b-container>
</template>

<script>
  export default {
    name: 'ProjectGrid'
  }
  
</script>