<template>
  <div class="card">
    <!-- <canvas
      ref="canvas"
      id="canvas" /> -->
    <canvas
      ref="card-item" 
      class="card-item"
      @mousemove="startRotate($event)"
      @mouseout="stopRotate($event)">
        <img
          ref="book"
          class="book floating"
          src="../assets/img/fi.jpg"
        />
    </canvas>
  </div>
</template>

<script>
export default {
  methods: {
    startRotate(e) {
      const cardItem = this.$refs["card-item"];

      const halfHeight = cardItem.offsetHeight/2;
      const halfWidth = cardItem.offsetWidth/2;

      cardItem.style.transform = 'rotateX(' + -(e.offsetY -
        halfHeight) / 5 +'deg) rotateY(' +
        (e.offsetX - halfWidth) / 5 + 'deg)';
    },
    stopRotate(){
      this.$refs["card-item"].style.transform = 'rotate(0)'
    },
  },
  mounted(){
      debugger
      const canvas = this.$refs['card-item'];
      const ctx = canvas.getContext('2d');
      const image = this.$refs['book'];

      ctx.drawImage(image, 0, 0);

      var imgd = ctx.getImageData(0, 0, canvas.width, canvas.hight);
      var data = imgd.data;

      for (var i = 0; i < data.length; i += 4) {
        var avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i]     = avg; // red
        data[i + 1] = avg; // green
        data[i + 2] = avg; // blue
      }
      ctx.putImageData(imgd, 0, 0);
    }
}
</script>

<style>

.floating {  
  animation-name: floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  margin-left: 30px;
  margin-top: 5px;
}

.card {
  perspective: 1000px; /*глубина - расстаяние внутри*/
  transform-style: preserve-3d; /*прокучивание 3Д*/
}

.card-item {
  border: 1px solid black;
  width: 200px;
  height: 240px;
  transition: transform 0.2s;
  margin: 1rem;
}

.book {
  width: 190px;
}


@keyframes floating {
  from { 
    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
    transform: translate(0,  0px); 
  }
  65%  { 
    box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
    transform: translate(0, -20px); 
  }
  to   {
    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
    transform: translate(0, 0px); 
  }    
}
</style>