<template>
  <div class="home main-content">
    <div class="left-side slideUp">
      <h1>MagBucket - <span>Bucket List Vue.js App.</span> </h1>
      <p class="project-info">&rarr;  A Bucket List application built with Vue.js and Vuetify - Meterial Design Component Framework.
      </p>
      <p class="project-info">&rarr;  I created my own list of things to do before I die.</p>
      <p class="project-info">&rarr;  The app  allows me to upload picture, pick the 'due date' and store them on Firebase database. Firebase authentication was also included.</p>
      <router-link to="/portfolio/two"><img src="../assets/arrow-down.svg" alt="arrow down" class="arrow arrow-down">
      </router-link>
    </div>
    <div class="right-side img-portfolio social-media_icons">
      <img src="../assets/magbucket-img.png">
      <a href=""> <i class="fab fa-github"></i></a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PortfolioOne',
  }
</script>
<style lang="scss" scoped>
  h1 {
    color: #393939 !important;
    font-size: 2.5em !important;
  }
  .img-portfolio {
    background-color: #393939;
    font-size: 4em;
    img {
      width: 90%;
      height: auto;
      margin-top: 30px;
      padding-top: 50px;
      box-shadow: 0 13px 10px -4px #191919;
      border-radius: 10px;
    }
  }
  .left-side:before {
    background-color: #f7f7f7;
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: .2;
    background-image: url("../assets/cactus.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>
