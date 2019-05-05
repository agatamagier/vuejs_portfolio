<template>
  <div class="about main-content">
    <div class="left-side">
      <h1>
        about
        <span>me</span>
      </h1>
      <img src="../assets/avatar.jpg" alt="my photo">
      <div class="social-media_icons">
        <a href>
          <i class="fab fa-linkedin"></i>
        </a>
        <a href>
          <i class="fab fa-github"></i>
        </a>
        <a href>
          <i class="fab fa-facebook-square"></i>
        </a>
      </div>
      <button>
        <router-link to="/portfolio/one">my portfolio</router-link>
      </button>
    </div>
    <div class="right-side">
      <div class="about-me">
        <p>
          I had been working as a physiotherapist in the United Kingdom for over 9 years before I decided to switch to a new profession - Front-End Developer.
          <span>I love it!</span> If only I had done it earlier. I am highly-motivated, self-driven and
          hard-working person, eager to be a part of the team and learn new technologies to become a valuable employee of the company and bring it success.
        </p>
        <p>
          Over the years of working for National Health Service I became well-organized and gained ability to prioritize tasks and work under pressure. Communicating in fluent english with both co-workers and clients as well as atention to details and thoroughness
          were key aspects of my day to day work.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.left-side {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  justify-content: space-between;
  padding: 70px;
  background-color: #393939;

  h1 {
    padding-top: 40px;
    font-size: 3em;
    color: #bac3c8;
  }
  button {
    padding: 20px 30px;
    font-size: 1.5em;
  }
  a {
    color: #f3843e;
    #fb-icon {
      background-image: url(../assets/svg/001-facebook.svg);
    }
  }
  img {
    width: 220px;
    border-radius: 50%;
    filter: grayscale(100%);
    opacity: 0.7;
  }
}
.right-side {
  position: relative;
  padding: 50px;
  background-color: #f7f7f7;
  display: block;
  .about-me {
    padding-top: 50px;
    span {
      color: #ff5a09;
      font-weight: 700;
    }
  }
}
.right-side:before {
  background-color: #f7f7f7;
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.2;
  background-image: url("../assets/bcgor.jpg");
  background-position: left;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>


