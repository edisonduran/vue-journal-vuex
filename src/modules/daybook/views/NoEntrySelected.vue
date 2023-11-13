<template>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center">No hay nada seleccionado</h1>    
  </div>
  <FabAction 
    @on:click="createNewEntry"
  />
</template>

<script>

import { defineAsyncComponent } from 'vue';


export default {

  components: {
    FabAction: defineAsyncComponent( () => import('../components/FabAction.vue') )     
  },

  methods: {
    createNewEntry() {
      console.log( 'New Netry' )
      this.$router.push( { name: 'entry', params: { id: 'new' } } )
    }
  }

}
</script>

<style lang="scss" scoped>
div {
    height: 100%;
}

</style>