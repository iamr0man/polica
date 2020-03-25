<template>
  <v-card class="posts">
    <v-card-text>
      <div class="card-info">
        <div class="card-info__photo">
          <v-img class="avatar" :src="post.avatar" alt="icon" />
        </div>
        <div class="card-info__details">
          <p to="/">{{ post.name }}</p>
          <span>{{ new Date(post.date).toLocaleDateString() }}</span>
        </div>
        <div class="card-info__description">
          <p>{{ post.description}}</p>
        </div>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn>
        <v-icon>
          mdi-thumb-up-outline
        </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>  
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "PostDetails",
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters('user', ['user'])
  }
}
</script>

<style lang="scss">
  .posts {
    .card-info {
      display: flex;

      .avatar {
        width: 45px;
        height: 45px;
        border-radius: 20px;
      }

      &__details {
        margin-left: 10px;
        line-height: 20px;

        p {
          margin-bottom: 0;
        }
      }
    }
  }
</style>