<template>
  <div class="home">
    <h1 class="home__header">ALL WE ART</h1>
    <Planets />
  </div>
</template>

<script>
import Planets from '@/components/Planets.vue'
export default {
  name: "Home",
  components: {
    Planets,
  }
}
</script>

<style lang="scss">
  .home {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url('../assets/photos/bg-stars.png');
    background-repeat: repeat;

    &__header {
      font-size: 50px;
      font-family: 'Hagrid';
      font-weight: bolder;
      color: teal;
    }

    &__logo {
      width: 54px;
      height: 54px;

      path {
        fill: #FFFF66;
      }
    }
  }
</style>