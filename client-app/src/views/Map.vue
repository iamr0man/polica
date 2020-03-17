<template>
  <GmapMap
    :center="center"
    :map-type-id="mapTypeId"
    :zoom="5">
      <GmapMarker 
        v-for="(item, i) in markers"
        :position="item.position"
        :key="item.position.lng + i"
        @click="center = item.position"
      />
      <GmapInfoWindow
        v-for="(item, i) in markers"
        :options="{ content, pixelOffset }"
        :key="item.position.lat + i"
        :position="item.position"
      />
    </GmapMap>
</template>

<script>

export default {
  data(){
    return {
      center: { lat: -3.350235, lng: 111.995865 },
      mapTypeId: "terrain",
      markers: [
        {position: { lat: -0.48585, lng: 117.1466 }},
        {position: { lat: -6.9127778, lng: 107.6205556 }},
      ],
      content: "<v-card><v-card-text>testing one ! two !</v-card-text></v-card-actions><v-btn>!Like</v-btn></v-card-actions></v-card>" + '\n' +
      "description: pending",
      pixelOffset: {height: '-3', width: 0}
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