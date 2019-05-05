<template>
    <div class="home main-content">
        <div class="left-side slideUp">
            <router-link to="/portfolio/three"><img src="../assets/arrow-up.svg" alt="arrow up" class="arrow arrow-up">
            </router-link>
            <h1>Random quote machine -<span> Little Ajax project.</span></h1>
            <p class="project-info">&rarr; This is a small quote generator using Ajax to get a random quote from an external API.</p>
            <p class="project-info">&rarr; It also propopulates Twitter post with the quote.</p>
            <p class="project-info">&rarr; Not the easiest thing and I definitelly need more practice with it.</p>
             <router-link to="/portfolio/five"><img src="../assets/arrow-down.svg" alt="arrow down" class="arrow arrow-down">
      </router-link>
        </div>
        <div class="right-side img-portfolio social-media_icons">
            <img src="../assets/randomquote-ajax.png">
            <a href=""> <i class="fab fa-github"></i></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PortfolioFour',
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
    opacity: .2;
    background-image: url("../assets/notebook.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>