<template>
  <v-icon>{{ icon }}</v-icon>
</template>

<script>
import { icons } from '../helpers/static.js'
export default {
  computed: {
    icon() {
      return icons[Math.floor(Math.random() * 1264 - 1)]
    }
  }
}
</script>

<style>

</style>