<template>
  <v-app id="app">
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
  @font-face {
    font-family: 'Hagrid';
    src: url('./assets/fonts/Hagrid-Text-Extrabold-trial.ttf');
    font-weight: bolder;
  }
  #app {
    font-family: 'Montserrat', sans-serif;
  }
</style>
