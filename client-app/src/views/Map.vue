<template>
  <GmapMap
    :center="center"
    :map-type-id="mapTypeId"
    :zoom="5">
      <GmapMarker 
        v-for="(item, i) in markers"
        :position="item.position"
        :key="item.position.lng + i"
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
            <h1>Near Silver Breez</h1>
            <p>{{ infoWindow.description }}</p>
            <p>{{ infoWindow.emoji }}</p>
          </v-card-text>
          <v-card-actions>
            <v-btn dark>!Like</v-btn>
          </v-card-actions>
        </v-card>
      </GmapInfoWindow>
    </GmapMap>
</template>

<script>

export default {
  data(){
    return {
      center: { lat: 50.350235, lng: 30.995865 },
      mapTypeId: "terrain",
      markers: [
        { position: { lat: 50.48585, lng: 29.1466 }, description: "Latest autumn, when was not very cold, because winter couldn't chill me! So near also we have river, called Dnipro, wide Dnipro... Return to my experience to read in this atmosfere: people go around, ride on cycle and etc. Not very traffic place, i do know", emoji: '😜'},
        { position: { lat: 50.48585, lng: 29.1488 }, description: "Latest autumn, when was not very cold, because winter couldn't chill me! So near also we have river, called Dnipro, wide Dnipro... Return to my experience to read in this atmosfere: people go around, ride on cycle and etc. Not very traffic place, i do know", emoji: '😜'},
        { position: { lat: 50.48585, lng: 29.1500 }, description: "Latest autumn, when was not very cold, because winter couldn't chill me! So near also we have river, called Dnipro, wide Dnipro... Return to my experience to read in this atmosfere: people go around, ride on cycle and etc. Not very traffic place, i do know", emoji: '😜'},
        { position: { lat: 50.48585, lng: 29.1522 }, description: "Latest autumn, when was not very cold, because winter couldn't chill me! So near also we have river, called Dnipro, wide Dnipro... Return to my experience to read in this atmosfere: people go around, ride on cycle and etc. Not very traffic place, i do know", emoji: '😜'},
        { position: { lat: 50.48585, lng: 29.1544 }, description: "Latest autumn, when was not very cold, because winter couldn't chill me! So near also we have river, called Dnipro, wide Dnipro... Return to my experience to read in this atmosfere: people go around, ride on cycle and etc. Not very traffic place, i do know", emoji: '😜'},
        { position: { lat: 45.9127778, lng: 32.6205556 }, description: "Latest autumn, when was not very cold, because winter couldn't chill me! So near also we have river, called Dnipro, wide Dnipro... Return to my experience to read in this atmosfere: people go around, ride on cycle and etc. Not very traffic place, i do know", emoji: '😜'},
      ],
      infoWindow: {},
      infoWinOpen: false,
      currentMidx: null,
      pixelOffset: {height: '-3', width: 0},
      maxWidth: "300",
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
    }
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