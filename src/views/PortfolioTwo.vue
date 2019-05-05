<template>
  <div class="two main-content">
    <div class="left-side slideUp">
      <router-link to="/portfolio/one">
        <img src="../assets/arrow-up.svg" alt="arrow up" class="arrow arrow-up">
      </router-link>
      <h1>
        Old portfolio with
        <span>Responsive Webb Design.</span>
      </h1>
      <p
        class="project-info"
      >&rarr; One of my old portfolios designed by me to practice Responsive Web Design with Media Queries.</p>
      <p class="project-info">&rarr; I also included some animations to make it look more 'alive'.</p>
      <p
        class="project-info"
      >&rarr; It's far from perfect but I enjoyed making it and I love the pastel colours &hearts;.</p>
      <router-link to="/portfolio/three">
        <img src="../assets/arrow-down.svg" alt="arrow down" class="arrow arrow-down">
      </router-link>
    </div>
    <div class="right-side img-portfolio social-media_icons">
      <img src="../assets/portfolio-rwd.png">
      <a href>
        <i class="fab fa-github"></i>
      </a>s
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioTwo"
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
  background-image: url("../assets/chair.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
