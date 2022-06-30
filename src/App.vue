<template>
	<div id="app">
		<HelloWorld msg="SAH Design"/>
	</div>
</template>


<script>
	import HelloWorld from './components/HelloWorld.vue';

	export default {
		name: 'App',
		components: {
			HelloWorld
		}
	}
</script>

<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";
	
#app {

	height: 100%;

}

</style>
