<template>
  <div>
    <v-card width="800" class="mx-auto">
      <div class="square"></div>
    </v-card>
    <router-link to="/" class="create-new">
      Create new Post
    </router-link>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('forum', ['posts'])
  },
  async created(){
    await this.$store.dispatch('forum/getPosts');
  }
}
</script>

<style>
  .square {
    width: 800px;
    height: 300px;
    background-color: teal;
    margin: 2rem 0;
  }

  .create-new {
    position: fixed;
    bottom: 44px; /* <--- set to zero, 1em = the inherited font size, which will offset it */
    right: 33px;
    width: 400px;
    height: 100px;
    background-color: teal;

    line-height: 94px;
    font-size: 32px;
    text-decoration: none;
    text-align: center;
    color: white !important;
  }
</style>