<template>
  <v-card>
    <v-card-text>
      <div class="card-info">
        <div class="card-info__photo">
          <v-img :src="post.avatar" alt="icon">
        </div>
        <div class="card-info__details">
          <router-link to="/">{{ post.name }}</router-link>
          <p>{{ post.date }}</p>
        </div>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-icon>
        thumb-up-outline
      </v-icon>
    </v-card-actions>
  </v-card>  
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "Comments",
  props: {
    client: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters('user', ['user'])
  }
}
</script>

<style>

</style>