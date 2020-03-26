<template>
  <div class="new-post-container">
    <v-card shaped class="card" width="700">
      <v-card-text>
        <v-text-field 
         outlined
         solo
         flat
         label="Title"
         v-model="title"
         />
        <v-text-field 
         outlined
         solo
         flat
         label="Short Description"
         v-model="shortDescription"
         />
        <v-textarea 
         outlined
         solo
         flat
         :auto-grow="true"
         :clearable="true"
         :rows="15"
         label="Description"
         v-model="description"
         />
      </v-card-text>
      <v-card-actions>
          <v-btn @click="registration" class="mx-auto" color="indigo" dark width="85%">Post</v-btn>
      </v-card-actions>
    </v-card> 
    <v-card shaped class="card" width="700">
      <v-icon class="cloud-upload" color="indigo">mdi-cloud-upload</v-icon>
      <v-file-input
        v-model="files"
        placeholder="Upload your preview photo"
        label="Photo input"
        multiple
        prepend-icon="mdi-paperclip"
      >
      <template v-slot:selection="{ text }">
          <v-chip
            small
            label
            color="primary"
          >
          {{ text }}
        </v-chip>
      </template>
    </v-file-input>
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
      shortDescription: "",
      preview: [],
    }
  },
  computed: {
    ...mapGetters('user', ['user'])
  },
  methods: {
    async registration(){
      const formData = new formData();
      formData.append('title', this.title)
      formData.append('description', this.description)
      formData.append('shortDescription', this.shortDescription)
      formData.append('preview', this.preview)

      return await this.$store.dispatch('forum/createPost', formData)
    }
  }
};
</script>

<style scoped>
  .new-post-container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card {
    margin-right: 200px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .cloud-upload {
    font-size: 230px;
  }

</style>
