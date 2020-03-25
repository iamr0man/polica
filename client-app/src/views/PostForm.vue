<template>
  <div class="new-post-container">
    <v-card shaped class="card" width="700">
      <v-card-text>
        <v-text-field 
         outlined
         solo
         flat
         label="title"
         v-model="title"
         />
        <v-textarea 
         outlined
         solo
         flat
         :auto-grow="true"
         :clearable="true"
         :rows="15"
         label="description"
         v-model="description"
         />
      </v-card-text>
      <v-card-actions>
          <v-btn @click="registration" class="mx-auto" dark width="85%" color="#000">Post</v-btn>
      </v-card-actions>
    </v-card> 
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data(){
    return {
      title: "",
      description: "",
    }
  },
  computed: {
    ...mapGetters('user', ['user'])
  },
  methods: {
    async registration(){
      return await this.$store.dispatch('forum/createPost', { name: this.user.name, title: this.title, description: this.description})
    }
  }
};
</script>

<style scoped>
  .new-post-container {
    display: flex;
    justify-content: center;
  }

  .card {
    margin-right: 200px;
    box-shadow: 3px -6px 0px 6px black;;
  }

  .v-application a {
    color: #000;
  }

</style>
