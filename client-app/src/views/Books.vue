<template>
  <div class="books-container">
    <div v-for="(v, i) in 4" :key="i">
      <book />
    </div>
  </div>
</template>

<script>
import Book from '../components/Book.vue'
export default {
  components: {
    Book
  }
}
</script>

<style lang="scss">
  .books-container {
    background-color: teal;
    display: flex;
    flex-wrap: wrap;
  }
</style>