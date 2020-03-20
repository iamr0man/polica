<template>
  <div>
    <gmap-marker
      :position="newMarker.position"
    />
    <gmap-info-window
      :options="{ pixelOffset, maxWidth }"
      :position="newMarker.position"
      :opened="createWinOpen"
      @closeclick="removeCreateMarker"
    >
      <expe-form />
    </gmap-info-window> 
  </div> 
</template>

<script>

import ExpeForm from './ExpeForm.vue'

export default {
  components: {
    ExpeForm
  },
  data(){
    return {
      newMarker: { position: { lat: 0, lng: 0}},
      pixelOffset: {height: '-3', width: 0},
      createWinOpen: false,
    }
  },
  methods: {
    removeCreateMarker(){
      this.newMarker.position = null;
      this.createWinOpen = false;
    }
  }
}
</script>

<style>

</style>