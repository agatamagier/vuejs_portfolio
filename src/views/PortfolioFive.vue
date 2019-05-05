<template>
  <div class="home main-content">
    <div class="left-side slideUp">
      <router-link to="/portfolio/four">
        <img src="../assets/arrow-up.svg" alt="arrow up" class="arrow arrow-up">
      </router-link>
      <h1>
        Single page CV with
        <span>Sass and CSS Grid.</span>
      </h1>
      <p
        class="project-info"
      >&rarr; This is a One Page CV project which helped me to discover all the great benefits of using Sass.</p>
      <p class="project-info">&rarr; I have used a lot of CSS Grid to make the layout responsive.</p>
    </div>
    <div class="right-side img-portfolio social-media_icons">
      <img src="../assets/cv.png">
      <a href>
        <i class="fab fa-github"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioFour"
};
</script>
<style lang="scss" scoped>
h1 {
  color: #393939 !important;
  font-size: 2em !important;
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
  opacity: 0.15;
  background-image: url("../assets/pens.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>