<template>
  <v-card class="post mx-auto" width="100%">
    <v-card-text>
      <div class="container">
        <div class="post-header">
          <h1 class="post-header__title">{{ post.title }}</h1>
          <div class="post-header__details">
            <div class="details-left">
              <div class="details-left__photo">
                <v-img :src="post.avatar" alt="user avatar" />
              </div>
              <div class="details-left__info">
                <h4 class="details-left__info-name">{{ post.name }}</h4>
                <h4 class="details-left__info-date">{{ new Date(post.date).toLocaleDateString() }}</h4>
              </div>
            </div>
            <div class="details-right">
              <!-- <post-icon
                v-for="i in 4"
                :key="i"
              /> -->
              <v-icon>mdi-arrow-collapse-left</v-icon>
              <v-icon>mdi-arrow-collapse-left</v-icon>
              <v-icon>mdi-arrow-collapse-left</v-icon>
              <v-icon>mdi-arrow-collapse-left</v-icon>
            </div>
          </div>
          <div class="post-main">
            <div class="post-main__preview">
              <v-img src="../assets/img/post.jpg" alt="preview" />
            </div>
            <div class="post-main__description">
              {{ post.description }}
            </div>
          </div>
        </div>
      </div>
    </v-card-text>
    <v-card-actions>
    </v-card-actions>
  </v-card>  
</template>

<script>
import { mapGetters } from 'vuex'
// import PostIcon from '../components/PostIcon.vue'
export default {
  name: "PostDetails",
  components: {
    // PostIcon
  },
  computed: {
    ...mapGetters('user', ['user']),
    ...mapGetters('forum', ['post']),
  }
}
</script>

<style lang="scss">
  .post {
    color: rgba(0, 0, 0, 0.84);
    .post-header {
      display: flex;
      flex-direction: column;

      &__title {
        margin: 0 auto;
        width: 500px;
        font-size: 40px;
      }

      &__details {
        display: flex;
        justify-content: space-evenly;
        margin: 20px 0;

        .details-left {
          display: flex;

          &__photo {
            width: 50px;
            img {
              width: 30px;
              height: 30px;
              border-radius: 15px;
            }
          }

          &__info {
            display: flex;
            flex-direction: column;
            font-size: 17px;
            line-height: 27px;

            // &-name {
              
            // }
            // &-date {

            // }
          }
        }
      }
    }

    &-main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &__preview {
        width: 80%;
      }
      
      &__description {
        width: 60%;
        font-size: 36px;
        line-height: 37px;
        margin: 80px 0;
      }
    }
  }
</style>