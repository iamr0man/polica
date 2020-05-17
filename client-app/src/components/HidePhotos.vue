<template>
  <div class="" ref="hide-wrapper">
    <img class="mask" src="../assets/img/fi.jpg" />
    <img class="mask" src="../assets/img/qq.jpeg" />
    <img class="mask" src="../assets/img/post.jpg" />
    <img class="mask" src="../assets/img/login.jpg" />
    <img class="mask" src="../assets/img/fi.jpg" />
    <img class="mask" src="../assets/img/qq.jpeg" />
    <img class="mask" src="../assets/img/post.jpg" />
    <img class="mask" src="../assets/img/login.jpg" />
  </div>
</template>

<script>
export default {
  props: {
    currPosition: {
      type: Object,
      required: true
    },
    currNumber: {
      type: Number,
      required: true
    },
    vector: {
      type: String,
      required: true
    }
  },
  // data(){
  //   return {
  //     // currPhoto: '',
  //   }
  // },
  computed: {
    animation(){
      return this.currNumber
      // return this.photos[this.currNumber]
    }
  },
  watch: {
    currNumber(){
      this.$refs['hide-wrapper'].children[this.currNumber].classList.add('blow-mind')
      this.$refs['hide-wrapper'].children[this.currNumber].style.x = this.currPosition.x
      this.$refs['hide-wrapper'].children[this.currNumber].style.y = this.currPosition.y

      // this.$refs['hide-wrapper'].children[this.currNumber].style.transform = `translate${this.vector}(10px)`;
      return this.currNumber
    }
  }
}
</script>

<style>
  .mask {
    display: none;
    width: 190px;
  }

  .blow-mind {
    display: block;
    position: absolute;

    animation-name: blow-mind-x;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  @keyframes blow-mind-x {
    0% {
      transform: translateX(0);
      opacity: 1
    }
    20% {
      transform: translateX(20px);
      opacity: 0.8
    }
    60% {
      transform: translateY(-20%);
      opacity: 0.4
    }
    80% {
      transform: translateY(-60%);
      opacity: 0.2
    }
    100% {
      transform: translateY(-100%);
      opacity: 0
    }
    
  }
</style>