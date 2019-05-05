<template>
  <div id="app">
    <div class="container">
      <div class="inner">
        <nav>
          <router-link to="/" id="logo">agata<span>/magier/</span>
          </router-link>
          <ul>
            <li>
              <router-link to="/">home</router-link>
            </li>
            <li>
              <router-link to="/about">about</router-link>
            </li>
            <li>
              <router-link to="/portfolio/one">portfolio</router-link>
            </li>
          </ul>
        </nav>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./global.scss">

</style>



