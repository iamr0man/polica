<template>
    <div class="book floating">
      <v-img src="../assets/img/fi.jpg" />
    </div>
</template>

<script>
export default {

}
</script>

<style>

.book {
  width: 200px;
}

.floating {  
    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    margin-left: 30px;
    margin-top: 5px;
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