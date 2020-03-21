<template>
  <gmap-info-window
    :options="{ pixelOffset, maxWidth }"
    :position="{ lat: infoWindow.latitude, lng: infoWindow.longitude }"
    :opened="infoWinOpen"
    @closeclick="closeInfoWin"
  >
    <v-card>
      <v-card-text>
        <h1>{{ infoWindow.title }}</h1>
        <p>{{ infoWindow.description }}</p>
        <p>{{ infoWindow.emoji }}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn dark>!Like</v-btn>
        <v-btn v-if="user && user._id === infoWindow.user" dark>!Edit</v-btn>
        <v-btn v-if="user && user._id === infoWindow.user" dark @click="deletePoint(infoWindow._id)">!Delete</v-btn>
      </v-card-actions>
    </v-card>
  </gmap-info-window>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: "Expe",
  props: {
    infoWindow: {
      type: Object,
      required: true
    },
    infoWinOpen: {
      type: Boolean,
      required: true
    }
  },
  data(){
    return {
      pixelOffset: {height: '-3', width: 0},
      maxWidth: "300",
    }
  },
  methods: {
    closeInfoWin(){
      this.$emit('isInfoWinOpen', false)
    }
  },
  computed: {
    ...mapGetters('user', ['user']),
  },
  
}
</script>

<style>

</style>