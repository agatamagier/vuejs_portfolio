import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import PortfolioOne from './views/PortfolioOne.vue'
import PortfolioTwo from './views/PortfolioTwo.vue'
import PortfolioThree from './views/PortfolioThree.vue'
import PortfolioFour from './views/PortfolioFour.vue'
import PortfolioFive from './views/PortfolioFive.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {path: '/portfolio/one',
     name: 'portfolioOne',
     component: PortfolioOne
    },
    {path: '/portfolio/two',
    name: 'portfolioTwo',
    component: PortfolioTwo
    },
    {path: '/portfolio/three',
    name: 'portfolioThree',
    component: PortfolioThree
    },
    {path: '/portfolio/four',
    name: 'portfolioFour',
    component: PortfolioFour
    },
    {path: '/portfolio/five',
    name: 'portfolioFive',
    component: PortfolioFive
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () { 
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    }
  ],
  mode: 'history'
})
