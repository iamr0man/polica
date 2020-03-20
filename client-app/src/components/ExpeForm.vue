<template>
  <div class="expe-form-container">
    <v-form
      @submit="createExpe">
      <v-card width="300">
        <v-card-text>
          <h2>Describe your place:</h2>
          <v-text-field
            label="Title"
            v-model="title"
          />
          <v-textarea
            label="Describe:"
            v-model="describe"
          />
          <v-text-field
            label="Your mood:"
            v-model="emoji"
          />
        </v-card-text>
        <v-card-actions>
          <v-btn type="submit" dark>Share it!</v-btn>
        </v-card-actions>
    </v-card>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "ExpeForm",
  data(){
    return {
      title: "",
      describe: "",
      emoji: "",
    }
  },
  methods: {
    async createExpe(){
      await this.$store.dispatch('data/createExpe', { title: this.title, describe: this.describe, emoji: this.emoji})
    }
  }
};
</script>

<style lang="scss" scoped>

</style>