<template>
  <div class="home main-content">
    <div class="left-side">
      <h1>not just another <span>junior</span> front-end developer</h1>
    </div>
    <div class="right-side img-background">
      <button><router-link to="/portfolio/one">my portfolio</router-link></button>
      <h3 class="footer">Coded with &hearts; by Agata Magier. &copy; 2018 All rights reserved. </h3>
    </div>
     
  </div>
</template>

<script>

</script>
<style scoped>
.img-background {
  background: linear-gradient(rgba(57, 57, 57, .75), rgba(57, 57, 57, .75)),  url("../assets/bcg1.jpg");
  background-position: center;
  background-size:cover;
  background-repeat: no-repeat;
  
}
</style>
