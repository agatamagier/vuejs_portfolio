<template>
  <div class="home main-content">
    <div class="left-side slideUp">
      <router-link to="/portfolio/one"><img src="../assets/arrow-up.svg" alt="arrow up" class="arrow arrow-up">
      </router-link>
      <h1>Portfolio with <span>parallax effect.</span> </h1>
      <p class="project-info">&rarr; Here is one of my very first portfolios.</p>
      <p class="project-info">&rarr; It's very 'begginer' without much structrure and exciting features.</p>
      <p class="project-info">&rarr; Purely made to see parallax effect in action as I think it looks awesome and I love pretty things &hearts;.</p>
      <router-link to="/portfolio/four"><img src="../assets/arrow-down.svg" alt="arrow down" class="arrow arrow-down">
      </router-link>
    </div>
    <div class="right-side img-portfolio social-media_icons">
      <img src="../assets/portfolio-parallax.png">
      <a href=""> <i class="fab fa-github"></i></a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PortfolioThree',
  }
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
    opacity: .15;
    background-image: url("../assets/mug.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>