<template>
  <div class="card"
      @mousemove="rotateCard($event)"
      @mouseout="refreshCard($event)"
    >
      <img 
        class="card-item"
        src="../assets/img/fi.jpg" />
    </div>
</template>

<script>
export default {
  methods: {
    rotateCard(e) {
      const cardItem = e.target;

      const halfHeight = cardItem.offsetHeight/2;
      const halfWidth = cardItem.offsetWidth/2;

      cardItem.style.transform = 'rotateX(' + -(e.offsetY -
        halfHeight) / 5 +'deg) rotateY(' +
        (e.offsetX - halfWidth) / 5 + 'deg';
    },
    refreshCard(e){
      const cardItem = e.target;
      cardItem.style.transform = `rotate(0)`
    }
  },
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
    background-color: #fff;
    width: 250px;
    height: 400px;
    transition: transform 0.2s;
    margin: 1rem;
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