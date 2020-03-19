<template>
  <GmapMap
    v-if="points"
    :center="center"
    :map-type-id="mapTypeId"
    :zoom="5"
    @rightclick="mapRClick">
      <GmapMarker 
        v-for="(item, i) in points"
        :position="{ lat: item.lat, lng: lng.item}"
        :key="item.lng + i + item.lng"
        @click="toggleInfoWindow(item,i)"
      />
      <GmapInfoWindow
        :options="{ pixelOffset, maxWidth }"
        :position="infoWindow.position"
        :opened="infoWinOpen"
        @closeclick="infoWinOpen=false"
      >
        <v-card>
          <v-card-text>
            <h1>{{ infoWindow.title }}</h1>
            <p>{{ infoWindow.description }}</p>
            <p>{{ infoWindow.emoji }}</p>
          </v-card-text>
          <v-card-actions>
            <v-btn dark>!Like</v-btn>
          </v-card-actions>
        </v-card>
      </GmapInfoWindow>
      <GmapMarker
        :position="newMarker.position"
      />
    </GmapMap>
</template>

<script>

import { mapState } from 'vuex'

export default {
  data(){
    return {
      center: { lat: 50, lng: 30 },
      mapTypeId: "terrain",
      markers: [
        { title: "Near Silver Breez", position: { lat: 50.48585, lng: 29.1466 }, description: "Latest autumn, when was not very cold, because winter couldn't chill me! So near also we have river, called Dnipro, wide Dnipro... Return to my experience to read in this atmosfere: people go around, ride on cycle and etc. Not very traffic place, i do know", emoji: '😜'},
        { title: "Near Silver Breez", position: { lat: 45.9127778, lng: 32.6205556 }, description: "Latest autumn, when was not very cold, because winter couldn't chill me! So near also we have river, called Dnipro, wide Dnipro... Return to my experience to read in this atmosfere: people go around, ride on cycle and etc. Not very traffic place, i do know", emoji: '😜'},
      ],
      infoWindow: {},
      infoWinOpen: false,
      currentMidx: null,
      pixelOffset: {height: '-3', width: 0},
      maxWidth: "300",
      newMarker: { position: { lat: 0, lng: 0}}
    }
  },
  methods: {
    toggleInfoWindow(marker,idx){
      this.infoWindow = marker;

      if(this.currentMidx === idx) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    },
    mapRClick(markerArgs){
      this.newMarker.position = markerArgs.latLng;
      // console.log(markerArgs.latLng)
    },
  },
  mounted: {
    ...mapState('data', ['points'])
  },
  async beforeCreate(){
    await this.$store.dispatch('data/getPoints') 
  }
}

</script>
  
<style>
  .vue-map-container {
    height: 100%;
    width: 100%;
  }
  .window {
    width: 30%;
  }
</style>