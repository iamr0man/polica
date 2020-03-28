<template>
  <div class="books-container">
    <book
      v-for="(book, i) in books"
      :book="book"
      :key="i"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Book from '../components/Book.vue'
export default {
  components: {
    Book
  },
  computed: {
    ...mapGetters('book', ['books'])
  },
  async created(){
    await this.$store.dispatch('book/getBooks')
  }
}
</script>

<style lang="scss">
  .books-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(https://ucdf758f0b71f56166ff23268814.previews.dropboxusercontent.com/p/thumb/AAx1cdC_oMguVH14WARAs_TNpRazcCC0S3YP5atC3btzLz_mTP9mdTPMfta7V4JUG3VBTJQTjTGhowB85bIsuCLYWJ-0_1m41dD3_lTSYfJQlVaa3VWlzENKhYTpOgdD2TK1VxdKZjaJtYOnTdu-hReNvxeTv2g0VuiupbgdMd5cPbeWqsaJavCOpcc1VAlnWlXHkOHutwqKQw8CsiOatGTtpEFUtbPp_TvQ1Sw1jtScFhgh6DfV1Sh6tFSOMODCWR1PU8BOUIwPLctQ6jy8vwfQkB-sCn-HbTqLuHPr5s_0sbCdu1H8wIC6sQ9huCwG4iFJ_72TTbf-szRpowf-_jb9IO4mxLO75ksPZXBhYSZkincBS8laxIDLndI6lXIKd_y0cl8MZaMgOjOhPTpcfg3HMHLcShca8z9KIu75pdSK1w/p.jpeg?fv_content=true&size_mode=5);
    height: 100%;
  }
</style>