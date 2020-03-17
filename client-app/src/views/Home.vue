<template>
  <div class="home-container">
      <div class="centered ">
        <div class="centered circle">
            <router-link class="router-links" to="/">
              <p>download</p>
            </router-link>
          </div>
          <div class="centered rectangle">
            <router-link class="router-links" to="/">
              <p>forum</p>
            </router-link>
          </div>
      </div>
      <div class="centered">
          <div class="centered triangle">
            <router-link class="router-links" to="/map">
              <p>points</p>
            </router-link>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss" scoped>

$black-gradient: linear-gradient(-30deg, black, transparent);

body {
  overflow: hidden;
}

.home-container{
  background: url('../assets/img/home.jpg');
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.centered {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.circle {
  padding: 10px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  box-shadow: -2px 17px 4px black;
}

.rectangle {
  width: 350px;
  height: 150px;
  background: $black-gradient;
  // box-shadow: 39px -3px 34px black;
  box-shadow: -4px 15px 22px black;
}

.triangle {
  width: 0;
  height: 0;
  border-left: 200px solid transparent;
  border-right: 460px solid transparent;
  border-bottom: 151px solid;
  box-shadow: -2px 17px 4px black;
}

.router-links {
  color: #fff;
  text-decoration: none;
  font-size: 20px;
  text-transform: uppercase;
}
</style>